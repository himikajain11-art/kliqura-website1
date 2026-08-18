import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="banner">

      <div className="banner-content">

        <p className="banner-eyebrow">
          LET'S WORK TOGETHER
        </p>

        <h2>
          Ready to make your
          <span> brand click?</span>
        </h2>

        <p className="banner-text">
          Let's create something meaningful, memorable,
          and built for growth.
        </p>

        <Link to="/contact" className="primary-btn">
          Let's Talk <span>↗</span>
        </Link>

      </div>

    </section>
  );
}

export default Banner;