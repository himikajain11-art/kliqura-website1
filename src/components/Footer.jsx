import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/kliqura-logo.png";

function Footer() {
  return (
    <footer className="site-footer">

      {/* FOOTER MAIN */}
      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <img
              src={logo}
              alt="KLIQURA - We Make It Click"
            />
          </Link>

          <p>
            We create ideas, connect brands with people,
            and turn attention into meaningful growth.
          </p>

          <span className="footer-tagline">
            WE MAKE IT CLICK.
          </span>

        </div>


        {/* EXPLORE */}
        <div className="footer-column">

          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>

        </div>


        {/* MORE */}
        <div className="footer-column">

          <h3>More</h3>

          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>

        </div>


        {/* CONTACT */}
        <div className="footer-column">

          <h3>Let's Talk</h3>

          <a href="mailto:hello@kliqura.com">
            hello@kliqura.com
          </a>

          <p>
            Udaipur, Rajasthan, India
          </p>

          <Link
            to="/contact"
            className="footer-contact-btn"
          >
            Start A Project <span>↗</span>
          </Link>

        </div>

      </div>


      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} KLIQURA.
          All Rights Reserved.
        </p>

        <p>
          Create. Connect. Convert.
        </p>

      </div>

    </footer>
  );
}

export default Footer;