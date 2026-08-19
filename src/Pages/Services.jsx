import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "Digital Marketing",
      description:
        "Build a stronger online presence with strategic digital marketing designed to increase visibility, reach, and meaningful growth.",
      points: [
        "Digital Marketing Strategy",
        "Search Engine Optimization",
        "Paid Advertising",
        "Performance Marketing",
      ],
    },
    {
      number: "02",
      title: "Content Writing",
      description:
        "Turn ideas into valuable content that informs your audience, builds trust, and gives your brand a stronger voice.",
      points: [
        "Website Content",
        "Blog Writing",
        "SEO Content",
        "Brand Content",
      ],
    },
    {
      number: "03",
      title: "Copywriting",
      description:
        "Words that do more than sound good. We create persuasive copy that captures attention and encourages your audience to act.",
      points: [
        "Ad Copy",
        "Social Media Copy",
        "Landing Page Copy",
        "Brand Messaging",
      ],
    },
    {
      number: "04",
      title: "Social Media Management",
      description:
        "Build an active and memorable social presence with creative content, consistent communication, and strategic management.",
      points: [
        "Content Planning",
        "Social Media Posts",
        "Content Calendars",
        "Community Engagement",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      text: "We learn about your business, audience, goals, and challenges.",
    },
    {
      number: "02",
      title: "Strategize",
      text: "We create a clear digital strategy based on your business objectives.",
    },
    {
      number: "03",
      title: "Execute",
      text: "We turn strategy into creative content, campaigns, and marketing activities.",
    },
    {
      number: "04",
      title: "Grow",
      text: "We analyze performance, optimize campaigns, and focus on continuous improvement.",
    },
  ];

  return (
    <main className="kliqura-services">

      {/* ================= HERO ================= */}

      <section className="services-hero">
        <div className="container services-hero-grid">

          <div className="services-hero-copy">

            <div className="services-label">
              <span></span>
              WHAT WE DO
            </div>

            <h1>
              Marketing
              <br />
              that <em>moves.</em>
            </h1>

            <p>
              From strategy to storytelling, KLIQURA helps brands create
              meaningful digital experiences that attract, connect and convert.
            </p>

            <Link to="/contact" className="services-yellow-btn">
              Start a Project
              <span>↗</span>
            </Link>

          </div>

          <div className="services-hero-art">

            <div className="services-art-circle"></div>

            <div className="services-art-red"></div>

            <div className="services-art-yellow">
              <span>CLICK</span>
            </div>

            <div className="services-art-text">
              <span>STRATEGY</span>
              <span>CREATIVITY</span>
              <span>GROWTH</span>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SERVICES INTRO ================= */}

      <section className="services-intro">
        <div className="container services-intro-grid">

          <div className="services-number">
            01
          </div>

          <div>
            <div className="services-label">
              OUR SERVICES
            </div>

            <h2>
              Everything your brand needs
              <span> to grow digitally.</span>
            </h2>

            <p>
              We combine strategy, creativity and execution to help your brand
              communicate better and grow with purpose.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SERVICE LIST ================= */}

      <section className="services-list-section">
        <div className="container">

          <div className="services-list">

            {services.map((service) => (
              <article
                className="service-detail-card"
                key={service.number}
              >

                <div className="service-detail-number">
                  {service.number}
                </div>

                <div className="service-detail-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p className="service-detail-description">
                    {service.description}
                  </p>

                  <div className="service-points">

                    {service.points.map((point, index) => (
                      <div
                        className="service-point"
                        key={index}
                      >
                        <span>↗</span>
                        <p>{point}</p>
                      </div>
                    ))}

                  </div>

                </div>

                <div className="service-card-arrow">
                  ↗
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="services-process">
        <div className="container">

          <div className="services-process-heading">

            <div>
              <div className="services-label">
                HOW WE WORK
              </div>

              <h2>
                Simple process.
                <span> Serious results.</span>
              </h2>
            </div>

            <p>
              A straightforward process that keeps every project focused,
              creative and moving forward.
            </p>

          </div>

          <div className="services-process-grid">

            {process.map((item) => (
              <div
                className="services-process-item"
                key={item.number}
              >

                <span>
                  {item.number}
                </span>

                <div className="process-accent"></div>

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

      {/* ================= CTA ================= */}

      <section className="services-cta">
        <div className="container">

          <div className="services-cta-inner">

            <div className="services-dark-label">
              HAVE A PROJECT IN MIND?
            </div>

            <h2>
              Let's make your brand
              <span> impossible to ignore.</span>
            </h2>

            <p>
              Tell us what you're building. Let's turn your next idea into
              something people remember.
            </p>

            <Link to="/contact" className="services-dark-btn">
              Let's Talk
              <span>↗</span>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Services;