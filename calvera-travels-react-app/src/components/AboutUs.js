import React from "react";
import SEO from "./SEO";
import Hero from "./Hero";
import "./About.css";

const AboutUs = () => {
  const aboutHeroImages = [
    "/images/AboutUs/AHEROback/aboutback.jpg",
    "/images/AboutUs/AHEROback/Aheroback2.jpg",
    "/images/AboutUs/AHEROback/Aheroback3.jpg",
  ];

  return (
    <div className="about-page">
      <SEO
        title="About Calvera Travels - Our Story and Promise"
        description="Learn about Calvera Travels, our passion for crafting unforgettable journeys, and our commitment to providing personalized, authentic, and reliable travel experiences in Sri Lanka."
        name="Calvera Travels"
        type="website"
        image={`${process.env.PUBLIC_URL}/images/og-image-about.jpg`}
        url="https://calveratravels.com/about"
      />

      {/* ===== HERO ===== */}
      <Hero
        images={aboutHeroImages}
        title="About Calvera Travels"
        highlightText="Story & Spirit"
        subtitle="Crafting unforgettable journeys with passion and expertise."
        badge="Who We Are"
        primaryButton={{ text: "Our Promise", link: "#our-promise", icon: "fa-heart" }}
        secondaryButton={{ text: "Contact Us", link: "/contact", icon: "fa-phone" }}
        showFeatures
        showScrollIndicator
      />

      {/* ===== WELCOME SECTION (Luxury Split Layout) ===== */}
      <section className="luxe-welcome-section">
        <div className="luxe-container">
          <div className="welcome-grid">
            <div className="welcome-text">
              <span className="luxe-subtitle">Our Story</span>
              <h2 className="luxe-heading">Welcome to Calvera Travel</h2>
              <div className="luxe-divider"></div>
              <p className="lead-text">
                At Calvera, we believe every journey is crafted with passion, purpose, and a personal touch.
              </p>
              <p>
                We are a full-service travel company based in Sri Lanka, curating unforgettable travel experiences across the island and beyond. Whether you seek a relaxing beach escape, a cultural adventure, or a luxury honeymoon, our team ensures every detail is handled with care.
              </p>
            </div>
            <div className="welcome-image-box">
              <div className="glass-experience-card" style={{ backgroundImage: "url('/images/AboutUs/Awelcomeback/Awelcomesec.jpg')" }}>
                <div className="glass-overlay">
                  <h3>Experience the Extraordinary</h3>
                  <p>Your dream vacation, meticulously planned.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO SECTION (Modern Grid) ===== */}
      <section className="luxe-services-section" style={{ backgroundImage: "url('/images/AboutUs/Awhatwedoback/AWWDO.jpg')" }}>
        <div className="dark-glass-overlay"></div>
        <div className="luxe-container relative-z">
          <div className="section-header-center text-white">
            <span className="luxe-subtitle-gold">Our Expertise</span>
            <h2 className="luxe-heading text-white">What We Do</h2>
            <p className="header-desc">Specializing in custom-designed travel experiences that suit your style, budget, and purpose.</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-map-marked-alt"></i>
              <h4>Tailor-made Tours</h4>
              <p>Personalized itineraries designed entirely around your unique interests.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-hotel"></i>
              <h4>Hotels & Transport</h4>
              <p>Comfortable, premium stays and highly reliable transfers across Sri Lanka.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-leaf"></i>
              <h4>Adventure & Nature</h4>
              <p>From misty hill-country treks to thrilling deep-ocean safaris.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-vihara"></i>
              <h4>Culture & Heritage</h4>
              <p>Explore the rich traditions, ancient temples, and vibrant festivals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR PROMISE SECTION (Elegant Timeline/Cards) ===== */}
      <section id="our-promise" className="luxe-promise-section">
        <div className="luxe-container">
          <div className="promise-wrapper">
            <div className="promise-content">
              <span className="luxe-subtitle">Commitment to Excellence</span>
              <h2 className="luxe-heading">Our Promise</h2>
              <p className="lead-text">To deliver journeys filled with trust, comfort, and inspiration.</p>
              <p>We believe every traveler deserves more than a tour; they deserve an experience that feels personal, meaningful, and perfectly planned.</p>
              
              <ul className="luxe-check-list mt-4">
                <li><i className="fas fa-check-circle"></i> Listen carefully to your needs and expectations.</li>
                <li><i className="fas fa-check-circle"></i> Provide transparent pricing and honest guidance.</li>
                <li><i className="fas fa-check-circle"></i> Ensure safety, comfort, and responsible travel.</li>
                <li><i className="fas fa-check-circle"></i> Available 24/7 for dedicated support.</li>
              </ul>
            </div>
            <div className="promise-image" style={{ backgroundImage: "url('/images/AboutUs/Aourpromiseback/Apromiseback.jpg')" }}>
              <div className="gold-border-frame"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALVERA MEANING SECTION (Creative Acronym) ===== */}
      <section className="luxe-meaning-section" style={{ backgroundImage: "url('/images/AboutUs/Awhychose/AWCCT.jpg')" }}>
        <div className="dark-glass-overlay"></div>
        <div className="luxe-container relative-z">
          <div className="section-header-center text-white">
            <span className="luxe-subtitle-gold">The Essence of Our Brand</span>
            <h2 className="luxe-heading text-white">Meaning of CALVERA</h2>
          </div>
          
          <div className="acronym-grid">
            <div className="acronym-box"><span>C</span><div className="ac-text"><strong>Culture & Connection</strong>Celebrating heritage and traditions.</div></div>
            <div className="acronym-box"><span>A</span><div className="ac-text"><strong>Adventure</strong>Exploring new places with wonder.</div></div>
            <div className="acronym-box"><span>L</span><div className="ac-text"><strong>Luxury & Leisure</strong>Offering premium comfort in every journey.</div></div>
            <div className="acronym-box"><span>V</span><div className="ac-text"><strong>Vision</strong>Shaping the future of tourism.</div></div>
            <div className="acronym-box"><span>E</span><div className="ac-text"><strong>Experience</strong>Creating moments that last a lifetime.</div></div>
            <div className="acronym-box"><span>R</span><div className="ac-text"><strong>Reliability</strong>Trusted service for all travelers.</div></div>
            <div className="acronym-box"><span>A</span><div className="ac-text"><strong>Authenticity</strong>Genuine experiences rooted in real stories.</div></div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE SECTION (Premium Icon Grid) ===== */}
      <section className="luxe-why-choose-section">
        <div className="luxe-container">
          <div className="section-header-center">
            <h2 className="luxe-heading">Why Choose Calvera</h2>
            <p className="header-desc">We don’t just take you places — we help you experience them in ways you’ll never forget.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="f-icon"><i className="fas fa-user-tie"></i></div>
              <h5>Expert Planners</h5>
              <p>Professional, highly experienced travel curators.</p>
            </div>
            <div className="feature-item">
              <div className="f-icon"><i className="fas fa-route"></i></div>
              <h5>Personalized</h5>
              <p>Tailored itineraries for every type of traveler.</p>
            </div>
            <div className="feature-item">
              <div className="f-icon"><i className="fas fa-handshake"></i></div>
              <h5>Trusted Partners</h5>
              <p>Strong partnerships with premium hotels.</p>
            </div>
            <div className="feature-item">
              <div className="f-icon"><i className="fas fa-headset"></i></div>
              <h5>24/7 Support</h5>
              <p>Round-the-clock on-ground assistance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
