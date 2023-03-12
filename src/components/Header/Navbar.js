import React from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/orders">Orders</a>
          </li>
          <li>
            <a href="/inventory">Inventory</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
