import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";
import { deliveryFee } from "../Cart/Cart";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handlePayment = () => {
    const subtotal = getTotalCartAmount();
    const delivery = subtotal === 0 ? 0 : deliveryFee;
    const total = subtotal + delivery;

    // Store order summary temporarily
    localStorage.setItem(
      "orderSummary",
      JSON.stringify({ subtotal, delivery, total })
    );

    // Navigate to mock payment screen
    navigate("/checkout");
  };

  return (
    <form className="place-order">
      <div className="place-order-left">
        <h2 className="title">Delivery Information</h2>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Street" required />
        <div className="multi-fields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="multi-fields">
          <input type="number" placeholder="Zip Code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="number" placeholder="Phone" required />
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
              <p>${getTotalCartAmount() === 0 ? "0.00" : deliveryFee.toFixed(2)}</p>
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
