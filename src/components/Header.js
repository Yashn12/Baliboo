import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 50);
      setAtTop(currentScroll === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`top ${!atTop && "hidden"}`}>
        <div className="navbar-left">
          <span className="span1">Mon-Wed: 11AM-9PM</span>
          <span className="span2">Thurs-Sat: 11AM-10PM</span>
        </div>
        <div className="navbar-right">
          <span className="span3">Goregaon, Mumbai, Maharashtra 400063</span>
        </div>
      </div>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-logo">
          <img src="/assets/baliboo.png" alt="Logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/home">Home</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/menu">Menu</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/book-table">Book Table</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/contactus">Contact Us</Link>

          </li>

        </ul>
      </nav>
    </>
  );
}

export default Header;
