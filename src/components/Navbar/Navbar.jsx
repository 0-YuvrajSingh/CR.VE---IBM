import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const { getTotalQuantity } = useContext(StoreContext);
  const { user, logout } = useContext(AuthContext);
  const totalQuantity = getTotalQuantity();
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <Link to="/menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</Link>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-basket-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket_icon" />
          </Link>
          <div className={totalQuantity === 0 ? "dotHidden" : "dot"}>
            <p>{totalQuantity}</p>
          </div>
        </div>

        {user ? (
          <>
            <span style={{ marginRight: "10px", fontWeight: "bold" }}>{user.email.split("@")[0]}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;