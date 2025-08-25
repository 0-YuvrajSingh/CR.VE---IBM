import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./FakePayment.css";

const FakePayment = () => {
  const { setCartItems } = useContext(StoreContext);
  const navigate = useNavigate();
  const [summary, setSummary] = useState({ subtotal: 0, delivery: 0, total: 0 });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("orderSummary"));
    if (saved) setSummary(saved);
  }, []);

  const handlePayment = () => {
    setCartItems({});
    localStorage.removeItem("orderSummary");
    navigate("/success");
  };

  return (
    <div className="fake-payment">
      <div className="fake-payment-container">
        <h2>💳 Payment Gateway (Mock)</h2>
        <div className="summary">
          <p>Subtotal: ${summary.subtotal.toFixed(2)}</p>
          <p>Delivery: ${summary.delivery.toFixed(2)}</p>
          <h3>Total: ${summary.total.toFixed(2)}</h3>
        </div>
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default FakePayment;
