```jsx
import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-intro">
          <span className="contact-eyebrow">LET'S CONNECT</span>

          <h1>
            Have an idea?
            <br />
            <span>Let's make it click.</span>
          </h1>

          <p>
            Whether you're launching a new business, building your brand,
            or looking for a better digital strategy, we'd love to hear
            from you.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <span>EMAIL</span>
              <a href="mailto:hello@kliqura.com">
                hello@kliqura.com
              </a>
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

        {/* RIGHT SIDE FORM */}
        <div className="contact-form-card">

          <div className="form-heading">
            <h2>Tell us about your project.</h2>
            <p>
              Fill in the details below and we'll get back to you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="company">Company / Brand</label>
              <input
                id="company"
                type="text"
                name="company"
                placeholder="Enter your brand name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <span>→</span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Form;
```
