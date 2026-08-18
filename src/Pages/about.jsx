import React from "react";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tag">KLIQURA — WE MAKE IT CLICK</p>

          <h1>
            Turn Your Brand Into
            <span> Something People Remember.</span>
          </h1>

          <p className="hero-description">
            KLIQURA is a digital marketing agency helping brands grow with
            creative strategies, powerful content, and meaningful digital
            experiences.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Let's Work Together</button>
            <button className="secondary-btn">Explore Services</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle">
            <span>CREATE</span>
            <span>CONNECT</span>
            <span>CONVERT</span>
          </div>
        </div>
      </section>


      {/* INTRO SECTION */}
      <section className="intro-section">
        <div className="section-heading">
          <p>WHO WE ARE</p>
          <h2>
            We don't just market brands.
            <span> We make them click.</span>
          </h2>
        </div>

        <div className="intro-text">
          <p>
            At KLIQURA, we believe every brand has a story worth telling.
            Our job is to turn that story into a digital experience that
            attracts attention, builds trust, and drives growth.
          </p>

          <p>
            From strategy to content and social media, we combine creativity
            with smart marketing to help businesses stand out in a crowded
            digital world.
          </p>
        </div>
      </section>


      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="section-title">
          <p>WHAT WE DO</p>
          <h2>Our Digital Superpowers</h2>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <span className="service-number">01</span>
            <h3>Digital Marketing</h3>
            <p>
              Smart digital strategies designed to increase visibility,
              reach the right audience, and grow your business online.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">02</span>
            <h3>Content Writing</h3>
            <p>
              Valuable and engaging content that informs your audience,
              builds authority, and keeps your brand memorable.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">03</span>
            <h3>Copywriting</h3>
            <p>
              Words that grab attention, create desire, and encourage your
              audience to take action.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">04</span>
            <h3>Social Media Management</h3>
            <p>
              Consistent, creative, and strategic social media management
              that turns followers into a real community.
            </p>
          </div>

        </div>
      </section>


      {/* PROCESS SECTION */}
      <section className="process-section">
        <div className="section-title">
          <p>OUR PROCESS</p>
          <h2>From Idea To Impact</h2>
        </div>

        <div className="process-grid">

          <div className="process-item">
            <span>01</span>
            <h3>Discover</h3>
            <p>
              We understand your brand, audience, goals, and challenges.
            </p>
          </div>

          <div className="process-item">
            <span>02</span>
            <h3>Create</h3>
            <p>
              We turn insights into creative ideas, content, and campaigns.
            </p>
          </div>

          <div className="process-item">
            <span>03</span>
            <h3>Connect</h3>
            <p>
              We help your brand communicate with the right audience.
            </p>
          </div>

          <div className="process-item">
            <span>04</span>
            <h3>Convert</h3>
            <p>
              We focus on turning attention into measurable business growth.
            </p>
          </div>

        </div>
      </section>


      {/* CTA SECTION */}
      <section className="cta-section">
        <p>READY TO MAKE YOUR BRAND CLICK?</p>

        <h2>
          Let's create something
          <span> unforgettable.</span>
        </h2>

        <button className="primary-btn">
          Start A Conversation
        </button>
      </section>

    </div>
  );
}

export default Home;