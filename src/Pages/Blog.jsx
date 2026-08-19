import React from "react";

function Blog() {
  const posts = [
    {
      number: "01",
      category: "DIGITAL MARKETING",
      title: "Why Your Brand Needs a Strong Digital Presence",
      description:
        "Discover how a strong digital presence can help businesses build trust, reach the right audience, and grow online.",
    },
    {
      number: "02",
      category: "SOCIAL MEDIA",
      title: "5 Ways to Make Your Social Media More Engaging",
      description:
        "Learn simple strategies that can help your brand create better content and build a stronger social media community.",
    },
    {
      number: "03",
      category: "CONTENT",
      title: "The Power of Content in Modern Marketing",
      description:
        "Great content can educate, connect, and convert. Here's why content should be at the heart of your marketing strategy.",
    },
    {
      number: "04",
      category: "AI MARKETING",
      title: "How AI Is Changing Digital Marketing",
      description:
        "Explore how artificial intelligence is helping brands create smarter campaigns, understand audiences, and improve marketing.",
    },
  ];

  return (
    <div className="blog-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="hero-tag">KLIQURA BLOG</p>

          <h1>
            Ideas That
            <span> Make You Think.</span>
          </h1>

          <p>
            Digital marketing insights, creative ideas, useful strategies,
            and trends to help your brand stay ahead.
          </p>
        </div>
      </section>

      {/* BLOG POSTS */}
      <section className="blog-section">

        <div className="section-title">
          <p>FROM OUR BLOG</p>

          <h2>
            Ideas worth
            <span> clicking.</span>
          </h2>
        </div>

        <div className="blog-grid">

          {posts.map((post) => (
            <article className="blog-card" key={post.number}>

              <div className="blog-card-top">
                <span>{post.number}</span>
                <span>{post.category}</span>
              </div>

              <h3>{post.title}</h3>

              <p>{post.description}</p>

              <button className="blog-read-btn">
                Read Article →
              </button>

            </article>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <p>KEEP EXPLORING</p>

        <h2>
          Stay curious.
          <span> Stay ahead.</span>
        </h2>

        <button className="primary-btn">
          Work With Us
        </button>
      </section>

    </div>
  );
}

export default Blog;