import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [Tbtn, SetTbtn] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="navItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li><Link>Cart</Link></li>
          <button
            className="login"
            onClick={() => {
              // SetTbtn("logout")
              Tbtn === "login" ? SetTbtn("logout") : SetTbtn("login");
            }}
          >
            {Tbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
