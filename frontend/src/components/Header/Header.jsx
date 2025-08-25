import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-contents">
        <h2>Satisfy Every Craving with CR<span className="dot">·</span>VE</h2>
        <p>
          Welcome to CR·VE — your destination for bold flavors and fast delivery. 
          Dive into our chef-curated menu and treat yourself to meals that hit the spot every time.
        </p>
        <button onClick={() => navigate("/menu")}>View Menu</button>
      </div>
    </header>
  );
};

export default Header;
