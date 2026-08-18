import React from "react";

function Services() {
  const services = [
    {
      number: "01",
      title: "Digital Marketing",
      description:
        "Build a stronger online presence with data-driven digital marketing strategies designed to increase visibility, reach, and growth.",
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
        "Words that do more than sound good. We create persuasive copy that captures attention and encourages your audience to take action.",
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
        "Build an active and memorable social presence with creative content, consistent communication, and strategic social media management.",
      points: [
        "Content Planning",
        "Social Media Posts",
        "Content Calendars",
        "Community Engagement",
      ],
    },
  ];

  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-content">
          <p className="hero-tag">WHAT WE DO</p>

          <h1>
            Marketing That
            <span> Makes An Impact.</span>
          </h1>

          <p>
            From strategy to storytelling, KLIQURA helps brands create
            meaningful digital experiences that attract, connect, and convert.
          </p>
        </div>
      </section>


      {/* SERVICES */}
      <section className="services-list-section">

        <div className="services-intro">
          <p>OUR SERVICES</p>

          <h2>
            Everything your brand needs
            <span> to grow digitally.</span>
          </h2>
        </div>


        <div className="services-list">

          {services.map((service) => (
            <div className="service-detail-card" key={service.number}>

              <div className="service-detail-number">
                {service.number}
              </div>

              <div className="service-detail-content">

                <h3>{service.title}</h3>

                <p className="service-detail-description">
                  {service.description}
                </p>

                <div className="service-points">
                  {service.points.map((point, index) => (
                    <div className="service-point" key={index}>
                      <span>↗</span>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>

              </div>

              <div className="service-arrow">
                →
              </div>

            </div>
          ))}

        </div>
      </section>


      {/* PROCESS */}
      <section className="services-process">

        <div className="section-title">
          <p>HOW WE WORK</p>

          <h2>
            Simple process.
            <span> Serious results.</span>
          </h2>
        </div>

        <div className="services-process-grid">

          <div className="services-process-item">
            <span>01</span>
            <h3>Understand</h3>
            <p>
              We learn about your business, audience, goals, and challenges.
            </p>
          </div>

          <div className="services-process-item">
            <span>02</span>
            <h3>Strategize</h3>
            <p>
              We create a clear digital strategy based on your business
              objectives.
            </p>
          </div>

          <div className="services-process-item">
            <span>03</span>
            <h3>Execute</h3>
            <p>
              We turn strategy into creative content, campaigns, and
              marketing activities.
            </p>
          </div>

          <div className="services-process-item">
            <span>04</span>
            <h3>Grow</h3>
            <p>
              We analyze performance, optimize campaigns, and focus on
              continuous improvement.
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="cta-section">

        <p>HAVE A PROJECT IN MIND?</p>

        <h2>
          Let's make your brand
          <span> impossible to ignore.</span>
        </h2>

        <button className="primary-btn">
          Let's Talk
        </button>

      </section>

    </div>
  );
}

export default Services;