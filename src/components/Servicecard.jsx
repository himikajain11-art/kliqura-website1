import React from "react";

function Servicecard({ number, title, description }) {
  return (
    <div className="service-component-card">

      {/* TOP */}
      <div className="service-component-top">
        <span className="service-component-number">
          {number}
        </span>

        <span className="service-component-arrow">
          ↗
        </span>
      </div>

      {/* CONTENT */}
      <div className="service-component-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="service-component-link">
          Explore Service <span>↗</span>
        </div>

      </div>

    </div>
  );
}

export default Servicecard;