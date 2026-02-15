import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiAward, FiHeart, FiUsers, FiGlobe } from 'react-icons/fi'
import './About.css'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-page">
      {/* Header */}
      <section className="about-header">
        <div className="container">
          <h1>About <span>FAZORA</span> Trading Co.</h1>
          <p className="about-slogan">"Your Satisfaction, Our Priority"</p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                FAZORA Trading Co. was founded with a simple yet powerful vision — to bring premium quality products to every household at affordable prices. Located in the heart of <strong>Jeddah's historic Al Balad district</strong>, at the iconic Qabil Street near the Gold Market, we've been serving our valued customers with the finest selection of fashion, kitchen wares, and electronics.
              </p>
              <p>
                What started as a small trading venture has grown into a trusted name in the market, known for our commitment to quality, authenticity, and exceptional customer service. Every product in our collection is carefully curated to meet the highest standards.
              </p>
              <p>
                We believe that shopping should be a delightful experience, and we strive to make every interaction memorable. Whether you visit our store in person or shop through WhatsApp, you'll always receive the same level of care and attention.
              </p>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" alt="FAZORA Store" loading="lazy" />
              <div className="story-badge">
                <img src="/logo.png" alt="FAZORA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">What We Stand For</h2>
          <p className="section-subtitle">Core values that <span className="accent">drive everything we do</span></p>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><FiAward /></div>
              <h3>Premium Quality</h3>
              <p>Every product is carefully selected and inspected to ensure it meets our high quality standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FiHeart /></div>
              <h3>Customer First</h3>
              <p>Your satisfaction is our top priority. We go above and beyond to ensure every customer is happy.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FiUsers /></div>
              <h3>Trust & Integrity</h3>
              <p>We build lasting relationships through honest business practices and transparent pricing.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FiGlobe /></div>
              <h3>Global Selection</h3>
              <p>We source the best products from around the world to bring you a diverse and exciting collection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="about-stat">
              <span className="about-stat-number">500+</span>
              <span className="about-stat-label">Products</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">10K+</span>
              <span className="about-stat-label">Happy Customers</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">3</span>
              <span className="about-stat-label">Categories</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">4.9</span>
              <span className="about-stat-label">Avg. Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Come Visit Us!</h2>
          <p>Find us at <strong>Al Balad, Qabil Street, Gold Market, Jeddah, Saudi Arabia</strong></p>
          <div className="cta-actions">
            <Link to="/shop" className="btn-primary">
              Explore Products <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn-outline-dark">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
