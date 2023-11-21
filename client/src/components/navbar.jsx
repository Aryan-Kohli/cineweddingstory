import React, { useState, useEffect } from "react";
import "../css/navbar2.css";
import logo from "../pics/logo.jpg";
function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState(" nav ");

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollThreshold = 800;
    if (scrollPosition > scrollThreshold) {
      setNavbarBackground(" nav navbg ");
      // setNavbarBackground("black");
    } else {
      setNavbarBackground(" nav ");
    }
  }, [scrollPosition]);

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className={navbarBackground}>
      <a href="#" className="nav__brand">
        CineWedding Story
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Gallery
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact us
          </a>
        </li>
        {/* <li className="nav__item">
          <a
            href="https://www.instagram.com/cineweddingstoryofficial/"
            className="nav__link"
          >
            <i className="bx bxl-instagram" />
          </a>
        </li> */}
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
