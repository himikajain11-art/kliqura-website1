import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/kliqura-logo.png";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">

            <Link to="/">
              <img src={logo} alt="KLIQURA" />
            </Link>

            <p>
              We build brands that connect,
              <br />
              communicate and grow.
            </p>

          </div>


          <div className="footer-links">

            <div>
              <h4>Explore</h4>

              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/work">Work</Link>
              <Link to="/blog">Blog</Link>
            </div>


            <div>
              <h4>Services</h4>

              <Link to="/services">Digital Marketing</Link>
              <Link to="/services">Content Writing</Link>
              <Link to="/services">Copywriting</Link>
              <Link to="/services">Social Media</Link>
            </div>


            <div>
              <h4>Connect</h4>

              <a href="mailto:hello@kliqura.com">
                hello@kliqura.com
              </a>

              <a href="#">
                Instagram ↗
              </a>

              <a href="#">
                LinkedIn ↗
              </a>
            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 KLIQURA. All Rights Reserved.
          </span>

          <span>
            WE MAKE IT CLICK.
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;