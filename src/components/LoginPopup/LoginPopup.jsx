import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type === "text" ? "name" : e.target.type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Loading...");
    try {
      if (currentState === "Sign up") {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        setMessage("Account created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        setMessage("Signed in successfully!");
      }
      setTimeout(() => setShowLogin(false), 2000);
    } catch (error) {
      setMessage(error.message.replace("Firebase:", "").trim());
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img src={assets.cross_icon} alt="close" onClick={() => setShowLogin(false)} />
        </div>

        <div className="login-popup-inputs">
          {currentState === "Sign up" && (
            <input type="text" placeholder="Your name" required value={formData.name} onChange={handleChange} />
          )}
          <input type="email" placeholder="Your email" required value={formData.email} onChange={handleChange} />
          <input type="password" placeholder="Password" required value={formData.password} onChange={handleChange} />
        </div>

        <button type="submit">{currentState === "Sign up" ? "Create Account" : "Login"}</button>

        {currentState === "Sign up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        )}

        <p>
          {currentState === "Login" ? "Create a new account?" : "Already have an account?"}
          <span onClick={() => setCurrentState(currentState === "Login" ? "Sign up" : "Login")}> {currentState === "Login" ? "Click here" : "Login here"}</span>
        </p>

        {message && <p style={{ textAlign: "center", color: "green", fontWeight: "bold" }}>{message}</p>}
      </form>
    </div>
  );
};

export default LoginPopup;