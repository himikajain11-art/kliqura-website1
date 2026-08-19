import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/kliqura-logo.png";

function Header() {
  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <span>
            KLIQURA — DIGITAL MARKETING THAT MAKES IT CLICK.
          </span>

          <span className="top-bar-right">
            Strategy • Content • Social • Growth
          </span>
        </div>
      </div>

      <header className="main-header">
        <div className="container nav-inner">

          <Link to="/" className="brand-logo">
            <img src={logo} alt="KLIQURA" />
          </Link>

          <nav className="desktop-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/work">Work</Link>
            <Link to="/blog">Blog</Link>
          </nav>

          <Link to="/contact" className="header-cta">
            Let's Talk
            <span>↗</span>
          </Link>

        </div>
      </header>
    </>
  );
}

export default Header;