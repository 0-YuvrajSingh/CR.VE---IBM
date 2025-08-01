import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            At <strong>CR<span className="dot">·</span>VE</strong>, we’re redefining how people experience food. 
            Blending bold flavors with fresh ingredients, we aim to satisfy every craving, every time. 
            Whether you're ordering for a cozy dinner or a late-night binge, we deliver delight at your doorstep.
          </p>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>+1-123-456-7890</li>
            <li>contact@crve.com</li>
          </ul>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com">
              <img src={assets.facebook_icon} alt="facebook" />
            </a>
            <a href="https://www.twitter.com">
              <img src={assets.twitter_icon} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com">
              <img src={assets.linkedin_icon} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © <span className="brand">CR<span className="dot">·</span>VE</span>
      </p>
    </footer>
  );
};

export default Footer;
