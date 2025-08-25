import React from "react";
import "./PaymentSuccess.css";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="payment-success">
      <div className="success-box">
        <h2>🎉 Payment Successful!</h2>
        <p>Your order has been placed.</p>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
