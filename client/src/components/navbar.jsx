import React from "react";
import "../css/navbar.css";
export default function navbar() {
  const iconStyle = {
    color: "black",
  };
  return (
    <div className="indexpage">
      <header className="header">
        <a href="#" className="logo">
          Cine Wedding Story
        </a>
        <nav className="navbar">
          <a href="#" style={{ "--i": "1" }}>
            Home
          </a>
          <a href="#aboutus" style={{ "--i": "3" }}>
            AboutUs
          </a>
          <a href="#t" style={{ "--i": "4" }}>
            Events
          </a>
          <a href="#" style={{ "--i": "4" }}>
            Contact Us
          </a>
        </nav>
        <div className="social-media">
          <a href="#" style={{ "--i": "1" }}>
            <i className="bx bxl-twitter" />
          </a>
          <a href="#" style={{ "--i": "2" }}>
            <i className="bx bxl-facebook" />
          </a>
          <a href="#" style={{ "--i": "3" }}>
            <i className="bx bxl-instagram" />
          </a>
        </div>
      </header>
    </div>
  );
}
