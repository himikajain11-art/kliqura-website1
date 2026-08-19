import React from "react";
import { Link } from "react-router-dom";

import mascot from "../assets/kliqura-mascot.png";

function Home() {
  const services = [
    {
      number: "01",
      title: "Digital Marketing",
      text: "Strategic digital marketing that puts your brand in front of the right people and turns attention into opportunity.",
    },
    {
      number: "02",
      title: "Content Writing",
      text: "Useful, engaging and SEO-friendly content that gives your audience a reason to read, trust and remember your brand.",
    },
    {
      number: "03",
      title: "Copywriting",
      text: "Persuasive words crafted to make your audience stop scrolling, understand your value and take action.",
    },
    {
      number: "04",
      title: "Social Media Management",
      text: "Consistent, creative and strategic social media management that keeps your brand active and connected.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      text: "We learn about your business, audience and goals.",
    },
    {
      number: "02",
      title: "Strategize",
      text: "We create a clear marketing direction built around your goals.",
    },
    {
      number: "03",
      title: "Create",
      text: "We turn strategy into content, campaigns and creative ideas.",
    },
    {
      number: "04",
      title: "Grow",
      text: "We measure, improve and keep your brand moving forward.",
    },
  ];

  return (
    <>

      {/* HERO */}

      <section className="home-hero">

        <div className="container hero-grid">

          <div className="hero-copy">

            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              DIGITAL MARKETING AGENCY
            </div>

            <h1>
              We make
              <br />
              <span>it click.</span>
            </h1>

            <p>
              KLIQURA helps businesses build stronger digital brands through
              smart marketing, powerful content and social media strategies
              that connect with the right audience.
            </p>

            <div className="hero-actions">

              <Link to="/contact" className="yellow-button">
                Start a Project
                <span>↗</span>
              </Link>

              <Link to="/work" className="outline-button">
                See Our Work
              </Link>

            </div>

            <div className="hero-proof">

              <div>
                <strong>4+</strong>
                <span>Core Services</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Creative Focus</span>
              </div>

              <div>
                <strong>1</strong>
                <span>Growth Goal</span>
              </div>

            </div>

          </div>


          <div className="hero-visual">

            <div className="hero-yellow-circle"></div>

            <div className="hero-red-shape"></div>

            <div className="mascot-glow"></div>

            <img
              src={mascot}
              alt="KLIQURA mascot"
              className="hero-mascot"
            />

            <div className="mascot-tag tag-one">
              CREATE
            </div>

            <div className="mascot-tag tag-two">
              CONNECT
            </div>

            <div className="mascot-tag tag-three">
              CONVERT
            </div>

            <div className="hero-circle-text">
              <span>WE MAKE IT CLICK • KLIQURA • </span>
            </div>

          </div>

        </div>

      </section>


      {/* BRAND STAT BAR */}

      <section className="stat-strip">

        <div className="container stat-strip-grid">

          <div>
            <strong>01</strong>
            <span>Strategy</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Creativity</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Content</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Growth</span>
          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="home-intro section-padding">

        <div className="container intro-grid">

          <div className="section-number">
            01
          </div>

          <div>

            <div className="small-heading">
              WHY KLIQURA
            </div>

            <h2>
              Your brand deserves
              <span> more than ordinary.</span>
            </h2>

            <p className="intro-large">
              We don't just create content. We create reasons for people to
              notice your brand, trust it and remember it.
            </p>

            <p>
              KLIQURA is a digital marketing agency built around strategy,
              creativity and meaningful communication. We help businesses
              turn their digital presence into something people actually
              connect with.
            </p>

            <Link to="/about" className="text-link">
              More about KLIQURA
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* SERVICES */}

      <section className="home-services section-padding">

        <div className="container">

          <div className="section-top">

            <div>
              <div className="small-heading">
                WHAT WE DO
              </div>

              <h2>
                Marketing that
                <span> moves.</span>
              </h2>
            </div>

            <p>
              Four focused services. One clear goal — helping your brand
              become more visible, valuable and memorable.
            </p>

          </div>


          <div className="service-list">

            {services.map((service) => (
              <Link
                to="/services"
                className="home-service-card"
                key={service.number}
              >

                <div className="service-number">
                  {service.number}
                </div>

                <div className="service-main">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                </div>

                <div className="service-arrow">
                  ↗
                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>


      {/* WHY US */}

      <section className="why-section section-padding">

        <div className="container why-grid">

          <div>

            <div className="small-heading yellow-text">
              THE KLIQURA WAY
            </div>

            <h2>
              Think smart.
              <br />
              <span>Create better.</span>
            </h2>

          </div>


          <div className="why-content">

            <div className="why-row">

              <span>01</span>

              <div>
                <h3>Strategy before execution</h3>

                <p>
                  Every campaign starts with understanding. We don't create
                  just to fill space — every piece has a purpose.
                </p>
              </div>

            </div>


            <div className="why-row">

              <span>02</span>

              <div>
                <h3>Creative that communicates</h3>

                <p>
                  Good marketing looks good. Great marketing makes people
                  understand why your brand matters.
                </p>
              </div>

            </div>


            <div className="why-row">

              <span>03</span>

              <div>
                <h3>Focused on growth</h3>

                <p>
                  We care about visibility, engagement and the bigger picture:
                  helping your business move forward.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PROCESS */}

      <section className="process-section section-padding">

        <div className="container">

          <div className="small-heading">
            HOW WE WORK
          </div>

          <div className="process-heading">

            <h2>
              From idea
              <span> to impact.</span>
            </h2>

            <p>
              A simple process designed to keep your marketing clear,
              creative and focused.
            </p>

          </div>


          <div className="process-grid">

            {process.map((item) => (
              <div className="process-card" key={item.number}>

                <span>
                  {item.number}
                </span>

                <div className="process-line"></div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* RESULTS */}

      <section className="results-section">

        <div className="container results-grid">

          <div>

            <div className="small-heading yellow-text">
              WHAT WE BELIEVE
            </div>

            <h2>
              Don't just get
              <span> noticed.</span>
            </h2>

          </div>

          <div className="results-copy">

            <p>
              Get remembered.
            </p>

            <span>
              Every interaction is an opportunity to make your brand more
              useful, more human and more memorable.
            </span>

            <Link to="/work" className="yellow-button">
              Explore Our Work
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="home-cta">

        <div className="container">

          <div className="cta-inner">

            <div className="small-heading">
              READY TO MAKE IT CLICK?
            </div>

            <h2>
              Let's grow
              <span> together.</span>
            </h2>

            <p>
              Tell us what you're building. We'll bring the strategy,
              creativity and digital thinking.
            </p>

            <Link to="/contact" className="navy-button">
              Start a Conversation
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;