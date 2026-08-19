import React from "react";
import { Link } from "react-router-dom";

import mascot from "../assets/kliqura-mascot.png";

function About() {
  return (
    <>
      {/* =========================
          ABOUT HERO
      ========================== */}

      <section className="about-hero">
        <div className="container about-hero-grid">

          <div className="about-hero-content">

            <div className="about-eyebrow">
              <span></span>
              ABOUT KLIQURA
            </div>

            <h1>
              Trusted Digital
              <br />
              Marketing Agency
              <br />
              <em>in Udaipur.</em>
            </h1>

            <p>
              We help businesses build a strong digital presence through
              creative ideas, smart marketing strategies and meaningful
              digital experiences.
            </p>

          </div>

          <div className="about-hero-visual">

            <div className="about-yellow-circle"></div>

            <img
              src={mascot}
              alt="KLIQURA mascot"
              className="about-mascot"
            />

            <div className="about-red-label">
              WE MAKE IT CLICK.
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          INTRODUCTION
      ========================== */}

      <section className="about-introduction section-padding">

        <div className="container about-content">

          <div className="about-section-label">
            <span>01</span>
            WHO WE ARE
          </div>

          <div className="about-main-text">

            <h2>
              Helping brands
              <br />
              <span>grow with purpose.</span>
            </h2>

            <p>
              KLIQURA is a digital marketing agency based in Udaipur,
              dedicated to helping businesses build a strong online presence
              and achieve continuous growth. We combine creative ideas,
              marketing strategy and data-driven thinking to create campaigns
              that reach the right audience and deliver meaningful results.
            </p>

            <p>
              Whether you are a startup, a local business or an established
              brand, our digital marketing solutions are designed to help you
              compete confidently in today's constantly changing digital
              landscape.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          OUR APPROACH
      ========================== */}

      <section className="about-approach">

        <div className="container about-approach-grid">

          <div className="about-approach-heading">

            <div className="about-section-label light-label">
              <span>02</span>
              OUR APPROACH
            </div>

            <h2>
              Strategy
              <br />
              before
              <br />
              <span>execution.</span>
            </h2>

          </div>

          <div className="about-approach-text">

            <p>
              We first analyze your target audience and understand your
              business objectives. This allows us to create an effective
              strategy that is specifically designed around your brand,
              audience and goals.
            </p>

            <p>
              Our approach combines research, creativity, analytics and
              continuous optimization. Instead of following a one-size-fits-
              all formula, we focus on finding the opportunities that can
              create genuine growth for your business.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          DIGITAL MARKETING
      ========================== */}

      <section className="about-services section-padding">

        <div className="container">

          <div className="about-services-heading">

            <div>
              <div className="about-section-label">
                <span>03</span>
                WHAT WE DO
              </div>

              <h2>
                Digital marketing
                <br />
                <span>built for growth.</span>
              </h2>
            </div>

            <p>
              From search visibility to social media and content, we bring
              different areas of digital marketing together to create a
              stronger and more consistent online presence.
            </p>

          </div>


          <div className="about-service-list">

            {/* SEO */}

            <div className="about-service-row">

              <div className="about-service-number">
                01
              </div>

              <div className="about-service-info">

                <h3>SEO & Website Optimization</h3>

                <p>
                  Using effective SEO strategies, we optimize websites to
                  improve search engine visibility and help businesses rank
                  higher on Google for relevant local and industry-specific
                  keywords. Our work includes keyword research, on-page
                  optimization and technical improvements that support
                  sustainable organic growth.
                </p>

              </div>

            </div>


            {/* PERFORMANCE */}

            <div className="about-service-row">

              <div className="about-service-number">
                02
              </div>

              <div className="about-service-info">

                <h3>Performance Marketing</h3>

                <p>
                  We create data-driven advertising strategies across
                  platforms such as Google Ads and Meta Ads. Campaigns are
                  carefully planned, monitored and optimized to generate
                  quality leads, increase website traffic and improve return
                  on investment.
                </p>

              </div>

            </div>


            {/* SOCIAL */}

            <div className="about-service-row">

              <div className="about-service-number">
                03
              </div>

              <div className="about-service-info">

                <h3>Social Media Management</h3>

                <p>
                  We help brands build meaningful connections with their
                  audiences across platforms such as Instagram, Facebook and
                  LinkedIn. From content planning to creative posts and
                  audience engagement, we keep your social presence active,
                  consistent and relevant.
                </p>

              </div>

            </div>


            {/* CONTENT */}

            <div className="about-service-row">

              <div className="about-service-number">
                04
              </div>

              <div className="about-service-info">

                <h3>Content Writing & Copywriting</h3>

                <p>
                  Powerful storytelling is at the heart of effective
                  communication. Our content writing and copywriting services
                  are designed to communicate your brand message clearly and
                  effectively through website content, blogs, advertisements,
                  social media captions and other digital content.
                </p>

              </div>

            </div>


            {/* GROWTH */}

            <div className="about-service-row">

              <div className="about-service-number">
                05
              </div>

              <div className="about-service-info">

                <h3>Growth Marketing</h3>

                <p>
                  To support long-term business expansion, we develop growth
                  marketing strategies focused on customer acquisition,
                  retention and brand loyalty. By combining analytics,
                  experimentation and customer understanding, we identify
                  opportunities that help businesses scale more efficiently.
                </p>

              </div>

            </div>


            {/* DESIGN */}

            <div className="about-service-row">

              <div className="about-service-number">
                06
              </div>

              <div className="about-service-info">

                <h3>Creative & Graphic Design</h3>

                <p>
                  Visual communication plays an important role in digital
                  marketing. Our creative approach focuses on high-quality
                  social media designs, banners and marketing materials that
                  attract attention while maintaining a consistent brand
                  identity across digital platforms.
                </p>

              </div>

            </div>


            {/* EMAIL */}

            <div className="about-service-row">

              <div className="about-service-number">
                07
              </div>

              <div className="about-service-info">

                <h3>Email Marketing</h3>

                <p>
                  We create effective email marketing strategies that help
                  businesses generate leads, build customer relationships,
                  promote products and increase sales. Newsletter campaigns
                  and automated email communication help brands reach the
                  right audience at the right time.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICES WE PROVIDE
      ========================== */}

      <section className="about-provided">

        <div className="container">

          <div className="about-provided-header">

            <div className="about-section-label light-label">
              <span>04</span>
              OUR EXPERTISE
            </div>

            <h2>
              Digital Marketing
              <br />
              Services We <span>Provide.</span>
            </h2>

          </div>


          <div className="provided-grid">

            <div>Growth Marketing</div>
            <div>Performance Marketing</div>
            <div>SEO</div>
            <div>Content Writing</div>
            <div>Copywriting</div>
            <div>Graphic Design</div>
            <div>Social Media Management</div>
            <div>Paid Advertising</div>
            <div>Website Optimization</div>

          </div>

        </div>

      </section>


      {/* =========================
          WHY KLIQURA
      ========================== */}

      <section className="about-why section-padding">

        <div className="container about-why-grid">

          <div>

            <div className="about-section-label">
              <span>05</span>
              WHY KLIQURA
            </div>

            <h2>
              The right
              <br />
              partner for
              <br />
              <span>your growth.</span>
            </h2>

          </div>


          <div className="about-why-content">

            <p>
              If you are looking for an original and trusted digital marketing
              brand in Udaipur, KLIQURA is here to help you move forward.
            </p>

            <p>
              Our goal is to increase brand awareness, attract the right
              audience and create digital experiences that make your business
              stand out.
            </p>

            <p>
              We believe creative ideas become powerful when they are backed
              by clear strategy and measurable thinking. That is why every
              project we work on is built around your business goals.
            </p>

            <Link to="/contact" className="about-yellow-button">
              Let's Make It Click
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================== */}

      <section className="about-final-cta">

        <div className="container">

          <div className="about-final-inner">

            <div className="about-final-small">
              READY TO GROW?
            </div>

            <h2>
              Let's make your
              <br />
              brand <span>click.</span>
            </h2>

            <p>
              Tell us about your business and let's create something people
              remember.
            </p>

            <Link to="/contact" className="about-navy-button">
              Start a Conversation
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}

export default About;