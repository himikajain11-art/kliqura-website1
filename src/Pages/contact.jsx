import React from "react";

function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="hero-tag">GET IN TOUCH</p>

          <h1>
            Let's Make
            <span> It Click.</span>
          </h1>

          <p>
            Have a project, idea, or brand that needs a little more
            attention? Let's talk and create something meaningful together.
          </p>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="contact-section">

        <div className="contact-info">

          <p className="contact-label">LET'S CONNECT</p>

          <h2>
            Have an idea?
            <span> Tell us about it.</span>
          </h2>

          <p>
            Whether you are launching a new business, building your brand,
            or looking for a better digital strategy, we'd love to hear
            from you.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <span>EMAIL</span>
              <p>hello@kliqura.com</p>
            </div>

            <div className="contact-detail">
              <span>LOCATION</span>
              <p>Udaipur, Rajasthan, India</p>
            </div>

            <div className="contact-detail">
              <span>FOLLOW US</span>
              <p>Instagram · LinkedIn</p>
            </div>

          </div>

        </div>


        {/* FORM */}
        <div className="contact-form-wrapper">

          <form className="contact-form">

            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Company / Brand</label>
              <input
                type="text"
                placeholder="Enter your brand name"
              />
            </div>

            <div className="form-group">
              <label>What can we help you with?</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>

                <option value="digital-marketing">
                  Digital Marketing
                </option>

                <option value="content-writing">
                  Content Writing
                </option>

                <option value="copywriting">
                  Copywriting
                </option>

                <option value="social-media">
                  Social Media Management
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Your Message</label>

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button type="submit" className="primary-btn">
              Send Message →
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;