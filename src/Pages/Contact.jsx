import React from "react";
import "../Form.css"; // Agar aapki CSS file ka naam App.css hai, toh yahan "../App.css" likh sakte hain

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* Left Side: Text and Details */}
        <div className="contact-info">
          <span style={{ color: "#FFC300", fontWeight: "bold", fontSize: "14px", letterSpacing: "1px" }}>
            LET'S CONNECT
          </span>
          <h1>Have an idea? Tell us about it.</h1>
          <p style={{ color: "#e0e0e0", lineHeight: "1.6" }}>
            Whether you are launching a new business, building your brand, or looking for a better digital strategy, we'd love to hear from you.
          </p>

          <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <strong style={{ color: "#FFC300", fontSize: "12px" }}>EMAIL</strong>
              <p style={{ margin: "5px 0 0 0", fontSize: "16px" }}>hello@kliqura.com</p>
            </div>
            <div>
              <strong style={{ color: "#FFC300", fontSize: "12px" }}>LOCATION</strong>
              <p style={{ margin: "5px 0 0 0", fontSize: "16px" }}>Udaipur, Rajasthan, India</p>
            </div>
            <div>
              <strong style={{ color: "#FFC300", fontSize: "12px" }}>FOLLOW US</strong>
              <p style={{ margin: "5px 0 0 0", fontSize: "16px" }}>Instagram &middot; LinkedIn</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-card">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Your Name *</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="input-group">
              <label>Email Address *</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
              <label>Company / Brand</label>
              <input type="text" placeholder="Enter your brand name" />
            </div>

            <div className="input-group">
              <label>What can we help you with?</label>
              <select defaultValue="">
                <option value="" disabled>Select a service</option>
                <option value="branding">Brand Identity</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="web-dev">Web Development</option>
              </select>
            </div>

            <div className="input-group">
              <label>Your Message *</label>
              <textarea rows="4" placeholder="Tell us about your project..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message &rarr;
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
