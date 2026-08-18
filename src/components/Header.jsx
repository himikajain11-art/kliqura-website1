import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/kliqura-logo.png";

function Header() {
  return (
    <header className="site-header">
      <nav className="navbar">

        {/* KLIQURA LOGO */}
        <Link to="/" className="logo-link">
          <img
            src={logo}
            alt="KLIQURA - We Make It Click"
            className="navbar-logo"
          />
        </Link>

        {/* NAVIGATION */}
        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/work">
            Work
          </Link>

          <Link to="/blog">
            Blog
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </div>

        {/* CONTACT BUTTON */}
        <Link to="/contact" className="nav-btn">
          Let's Talk <span>↗</span>
        </Link>

      </nav>
    </header>
  );
}

export default Header;