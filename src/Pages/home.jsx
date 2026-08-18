import React from "react";
import { Link } from "react-router-dom";

import mascot from "../assets/kliqura-mascot.png";

function Home() {
  return (
    <main className="home-page">

      {/* ================= HERO ================= */}
      <section className="home-hero">

        <div className="hero-content">

          <div className="hero-tag">
            <span></span>
            DIGITAL MARKETING AGENCY
          </div>

          <h1>
            We Make
            <span> It Click.</span>
          </h1>

          <p className="hero-description">
            We build bold digital experiences, smart marketing strategies,
            and powerful brand identities that help businesses get noticed,
            connect with people, and grow.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="hero-btn hero-btn-yellow">
              Let's Work Together
              <span>↗</span>
            </Link>

            <Link to="/work" className="hero-btn hero-btn-outline">
              Explore Our Work
              <span>↗</span>
            </Link>
          </div>

          <div className="hero-bottom-text">
            <span>CREATE</span>
            <span>•</span>
            <span>CONNECT</span>
            <span>•</span>
            <span>CONVERT</span>
          </div>

        </div>


        {/* MASCOT */}
        <div className="hero-mascot">

          <div className="mascot-glow"></div>

          <div className="mascot-circle">
            <span className="mascot-word mascot-word-one">
              STRATEGY
            </span>

            <span className="mascot-word mascot-word-two">
              CREATIVITY
            </span>

            <span className="mascot-word mascot-word-three">
              GROWTH
            </span>

            <img
              src={mascot}
              alt="KLIQURA Digital Marketing Mascot"
              className="mascot-image"
            />
          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="intro-section">

        <div className="section-label">
          <span>01</span>
          WHAT WE DO
        </div>

        <div className="intro-content">

          <h2>
            Marketing that
            <span> moves your brand.</span>
          </h2>

          <p>
            Your brand deserves more than ordinary marketing.
            KLIQURA combines creativity, strategy, technology and
            data to create digital experiences that people remember.
          </p>

          <Link to="/about" className="text-link">
            Discover KLIQURA
            <span>↗</span>
          </Link>

        </div>

      </section>


      {/* ================= SERVICES PREVIEW ================= */}
      <section className="home-services">

        <div className="section-heading">

          <div>
            <p className="section-label-text">
              OUR EXPERTISE
            </p>

            <h2>
              What we
              <span> make click.</span>
            </h2>
          </div>

          <Link to="/services" className="view-all-link">
            View All Services ↗
          </Link>

        </div>


        <div className="service-preview-grid">

          <Link to="/services" className="service-preview-card">
            <span>01</span>
            <h3>Growth Marketing</h3>
            <p>
              Smart strategies designed to turn attention into sustainable
              business growth.
            </p>
            <strong>↗</strong>
          </Link>


          <Link to="/services" className="service-preview-card red-card">
            <span>02</span>
            <h3>Performance Marketing</h3>
            <p>
              Data-driven campaigns focused on measurable results and ROI.
            </p>
            <strong>↗</strong>
          </Link>


          <Link to="/services" className="service-preview-card yellow-card">
            <span>03</span>
            <h3>SEO</h3>
            <p>
              Search strategies that help your brand get discovered by
              the right audience.
            </p>
            <strong>↗</strong>
          </Link>


          <Link to="/services" className="service-preview-card">
            <span>04</span>
            <h3>Content Writing</h3>
            <p>
              Content that informs, connects, communicates and builds trust.
            </p>
            <strong>↗</strong>
          </Link>


          <Link to="/services" className="service-preview-card">
            <span>05</span>
            <h3>Copy Writing</h3>
            <p>
              Words crafted to capture attention and inspire action.
            </p>
            <strong>↗</strong>
          </Link>


          <Link to="/services" className="service-preview-card red-card">
            <span>06</span>
            <h3>Graphic Design</h3>
            <p>
              Visual identities and creative designs that make brands
              instantly recognizable.
            </p>
            <strong>↗</strong>
          </Link>

        </div>

      </section>


      {/* ================= BIG STATEMENT ================= */}
      <section className="statement-section">

        <div className="statement-number">
          02
        </div>

        <div className="statement-content">

          <p className="section-label-text">
            OUR APPROACH
          </p>

          <h2>
            Don't just
            <span> exist online.</span>
            <br />
            Make an impact.
          </h2>

          <p>
            From the first idea to the final conversion, we create
            marketing that has a purpose. Every campaign, every visual,
            and every word is designed to move your brand forward.
          </p>

          <Link to="/about" className="dark-link">
            More About Us ↗
          </Link>

        </div>

      </section>


      {/* ================= ALL SERVICES STRIP ================= */}
      <section className="services-strip">

        <p>
          WHAT WE DO
        </p>

        <div className="services-marquee">
          <span>GROWTH MARKETING</span>
          <b>✦</b>
          <span>PERFORMANCE MARKETING</span>
          <b>✦</b>
          <span>SEO</span>
          <b>✦</b>
          <span>CONTENT WRITING</span>
          <b>✦</b>
          <span>COPY WRITING</span>
          <b>✦</b>
          <span>GRAPHIC DESIGN</span>
          <b>✦</b>
          <span>SOCIAL MEDIA MANAGEMENT</span>
          <b>✦</b>
          <span>PAID ADVERTISING</span>
          <b>✦</b>
          <span>WEBSITE OPTIMIZATION</span>
        </div>

      </section>


      {/* ================= WORK CTA ================= */}
      <section className="work-cta">

        <div className="work-cta-content">

          <p className="section-label-text">
            HAVE A PROJECT IN MIND?
          </p>

          <h2>
            Let's make
            <span> something click.</span>
          </h2>

          <p>
            Tell us what you're building, and let's turn your idea
            into something people can't ignore.
          </p>

          <Link to="/contact" className="big-cta-button">
            Start A Project
            <span>↗</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;