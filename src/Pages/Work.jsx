import React from "react";

function Work() {
  const projects = [
    {
      number: "01",
      category: "SOCIAL MEDIA",
      title: "Brand Identity & Social Presence",
      description:
        "A creative social media strategy designed to build a recognizable brand identity and connect with the target audience.",
    },
    {
      number: "02",
      category: "DIGITAL MARKETING",
      title: "Digital Growth Campaign",
      description:
        "A focused digital marketing campaign created to increase online visibility, audience reach, and meaningful engagement.",
    },
    {
      number: "03",
      category: "CONTENT",
      title: "Content Strategy & Creation",
      description:
        "A content-driven approach combining storytelling, informative content, and brand communication.",
    },
    {
      number: "04",
      category: "BRAND COMMUNICATION",
      title: "Creative Campaign",
      description:
        "A creative campaign focused on creating memorable communication and making the brand stand out.",
    },
  ];

  return (
    <div className="work-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">

          <p className="hero-tag">OUR WORK</p>

          <h1>
            Ideas We've
            <span> Brought To Life.</span>
          </h1>

          <p>
            From creative campaigns to digital strategies, here's a look at
            how we turn ideas into meaningful brand experiences.
          </p>

        </div>
      </section>


      {/* PROJECTS */}
      <section className="work-section">

        <div className="section-title">

          <p>SELECTED WORK</p>

          <h2>
            Creating work that
            <span> gets noticed.</span>
          </h2>

        </div>


        <div className="work-grid">

          {projects.map((project) => (
            <article className="work-card" key={project.number}>

              <div className="work-card-visual">

                <span className="work-number">
                  {project.number}
                </span>

                <span className="work-category">
                  {project.category}
                </span>

              </div>

              <div className="work-card-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <button className="work-view-btn">
                  View Project →
                </button>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* STATS */}
      <section className="work-stats">

        <div className="stat">
          <h3>Creative</h3>
          <p>Thinking</p>
        </div>

        <div className="stat">
          <h3>Strategic</h3>
          <p>Approach</p>
        </div>

        <div className="stat">
          <h3>Meaningful</h3>
          <p>Connections</p>
        </div>

        <div className="stat">
          <h3>Real</h3>
          <p>Growth</p>
        </div>

      </section>


      {/* CTA */}
      <section className="cta-section">

        <p>HAVE A PROJECT IN MIND?</p>

        <h2>
          Your next project could be
          <span> our next story.</span>
        </h2>

        <button className="primary-btn">
          Start A Project
        </button>

      </section>

    </div>
  );
}

export default Work;