import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { deliveryFee } from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.street.trim()) newErrors.street = "Street is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.state.trim()) newErrors.state = "State is required";
    if (!form.zip.trim()) newErrors.zip = "ZIP code is required";
    if (!form.country.trim()) newErrors.country = "Country is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone))
      newErrors.phone = "Valid 10-digit phone is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = () => {
    if (!validateForm()) return;

    const subtotal = getTotalCartAmount();
    const delivery = subtotal === 0 ? 0 : deliveryFee;
    const total = subtotal + delivery;

    localStorage.setItem(
      "orderSummary",
      JSON.stringify({ subtotal, delivery, total })
    );

    navigate("/checkout");
  };

  return (
    <form className="place-order">
      <div className="place-order-left">
        <h2 className="title">Delivery Information</h2>

        <div className="multi-fields">
          <div style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>
        </div>

        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="text"
          placeholder="Street"
          value={form.street}
          onChange={(e) => setForm({ ...form, street: e.target.value })}
        />
        {errors.street && <span className="error">{errors.street}</span>}

        <div className="multi-fields">
          <div style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            {errors.city && <span className="error">{errors.city}</span>}
          </div>

          <div style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="State"
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
            />
            {errors.state && <span className="error">{errors.state}</span>}
          </div>
        </div>

        <div className="multi-fields">
          <div style={{ width: "100%" }}>
            <input
              type="number"
              placeholder="Zip Code"
              value={form.zip}
              onChange={(e) => setForm({ ...form, zip: e.target.value })}
            />
            {errors.zip && <span className="error">{errors.zip}</span>}
          </div>

          <div style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="Country"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
            />
            {errors.country && <span className="error">{errors.country}</span>}
          </div>
        </div>

        <input
          type="number"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2 className="title">Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>
                ${getTotalCartAmount() === 0 ? "0.00" : deliveryFee.toFixed(2)}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                $
                {getTotalCartAmount() === 0
                  ? "0.00"
                  : (getTotalCartAmount() + deliveryFee).toFixed(2)}
              </b>
            </div>
          </div>

          <div className="place-order-buttons">
            <button type="button" onClick={() => navigate("/cart")}>
              ⬅️ Back to Cart
            </button>
            <button
              type="button"
              disabled={getTotalCartAmount() === 0}
              onClick={handlePayment}
            >
              Payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
