import { useEffect } from 'react'
import { FiMapPin, FiPhone, FiClock, FiMessageCircle } from 'react-icons/fi'
import './Contact.css'

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleWhatsApp = () => {
    const phoneNumber = '918113945385'
    const message = 'Hi FAZORA Trading Co.! I have a question.'
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Reach out to us anytime!</p>
        </div>
      </section>

      <div className="contact-content container">
        <div className="contact-grid">
          {/* Contact Cards */}
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-card-icon">
                <FiMapPin />
              </div>
              <h3>Visit Our Store</h3>
              <p>Al Balad, Qabil Street</p>
              <p>Gold Market, Jeddah</p>
              <p>Saudi Arabia</p>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon whatsapp-icon">
                <FiMessageCircle />
              </div>
              <h3>WhatsApp</h3>
              <p>+91 811 394 5385</p>
              <button className="contact-wa-btn" onClick={handleWhatsApp}>
                Chat Now
              </button>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <FiClock />
              </div>
              <h3>Business Hours</h3>
              <p>Saturday - Thursday</p>
              <p>9:00 AM - 10:00 PM</p>
              <p className="contact-note">Friday: 4:00 PM - 10:00 PM</p>
            </div>
          </div>

          {/* Contact Form / WhatsApp CTA */}
          <div className="contact-cta-section">
            <div className="contact-cta-card">
              <div className="cta-logo">
                <img src="/logo.png" alt="FAZORA" />
              </div>
              <h2>Order Through WhatsApp</h2>
              <p>
                For the fastest response and seamless ordering experience, reach out to us directly on WhatsApp. Simply browse our products, add to cart, and checkout — your order goes straight to our WhatsApp!
              </p>
              <div className="cta-features">
                <div className="cta-feature">
                  <span className="cta-check">✓</span>
                  <span>Instant order confirmation</span>
                </div>
                <div className="cta-feature">
                  <span className="cta-check">✓</span>
                  <span>Real-time product availability</span>
                </div>
                <div className="cta-feature">
                  <span className="cta-check">✓</span>
                  <span>Personalized assistance</span>
                </div>
                <div className="cta-feature">
                  <span className="cta-check">✓</span>
                  <span>Quick delivery updates</span>
                </div>
              </div>
              <button className="btn-wa-large" onClick={handleWhatsApp} id="contact-whatsapp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Start a Conversation
              </button>
              <p className="cta-slogan">"Your Satisfaction, Our Priority"</p>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.9176!2d39.185!3d21.485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI5JzA2LjAiTiAzOcKwMTEnMDYuMCJF!5e0!3m2!1sen!2ssa!4v1"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
            allowFullScreen=""
            loading="lazy"
            title="FAZORA Trading Co. Location"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
