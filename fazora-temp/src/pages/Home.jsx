import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiTruck, FiShield, FiHeadphones, FiStar } from 'react-icons/fi'
import { CartContext } from '../App'
import ProductCard from '../components/ProductCard'
import { products, categories, testimonials } from '../data/products'
import './Home.css'

function Home() {
  const [activeCategory, setActiveCategory] = useState('all')
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const featuredProducts = products.filter(p => p.badge === 'Best Seller' || p.badge === 'Trending' || p.badge === 'New').slice(0, 8)
  const dealProducts = products.filter(p => {
    const disc = ((p.originalPrice - p.price) / p.originalPrice) * 100
    return disc >= 25
  }).slice(0, 4)

  return (
    <div className="home-page">
      {/* ============ HERO SECTION ============ */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-gradient" />
          <div className="hero-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }} />
            ))}
          </div>
        </div>

        <div className="hero-content container">
          <div className="hero-text">
            <div className="hero-badge animate-fadeInUp">
              <span className="badge-dot" />
              Welcome to FAZORA Trading Co.
            </div>
            <h1 className="hero-title animate-fadeInUp animate-delay-1">
              Discover <span className="highlight">Premium</span> Products for Every Lifestyle
            </h1>
            <p className="hero-subtitle animate-fadeInUp animate-delay-2">
              Your Satisfaction, Our Priority — Shop the finest collection of fashion, kitchen wares, and electronics at Jeddah's Gold Market.
            </p>
            <div className="hero-actions animate-fadeInUp animate-delay-3">
              <Link to="/shop" className="btn-primary" id="shop-now-hero">
                Shop Now <FiArrowRight />
              </Link>
              <Link to="/about" className="btn-outline">
                Our Story
              </Link>
            </div>
            <div className="hero-stats animate-fadeInUp animate-delay-4">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Products</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number">4.9★</span>
                <span className="stat-label">Average Rating</span>
              </div>
            </div>
          </div>

          <div className="hero-visual animate-fadeInUp animate-delay-2">
            <div className="hero-image-stack">
              <div className="hero-card hero-card-1">
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80" alt="Fashion" />
                <span>Fashion</span>
              </div>
              <div className="hero-card hero-card-2">
                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80" alt="Kitchen" />
                <span>Kitchen</span>
              </div>
              <div className="hero-card hero-card-3">
                <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80" alt="Electronics" />
                <span>Electronics</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-line" />
        </div>
      </section>

      {/* ============ FEATURES BAR ============ */}
      <section className="features-bar">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <FiTruck className="feature-icon" />
              <div>
                <h4>Fast Delivery</h4>
                <p>Quick & reliable shipping</p>
              </div>
            </div>
            <div className="feature-item">
              <FiShield className="feature-icon" />
              <div>
                <h4>Genuine Products</h4>
                <p>100% authentic items</p>
              </div>
            </div>
            <div className="feature-item">
              <FiHeadphones className="feature-icon" />
              <div>
                <h4>24/7 Support</h4>
                <p>Always here for you</p>
              </div>
            </div>
            <div className="feature-item">
              <FiStar className="feature-icon" />
              <div>
                <h4>Premium Quality</h4>
                <p>Curated collections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="categories-section" id="categories">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Explore our curated collections across <span className="accent">three premium categories</span></p>

          <div className="categories-grid">
            {categories.map((cat, index) => (
              <Link
                to={`/shop/${cat.id}`}
                className="category-card"
                key={cat.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="category-image-wrapper">
                  <img src={cat.image} alt={cat.name} className="category-image" loading="lazy" />
                  <div className="category-overlay" />
                </div>
                <div className="category-content">
                  <span className="category-icon">{cat.icon}</span>
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>
                  <span className="category-link">
                    Explore <FiArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="featured-section" id="featured">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Hand-picked favorites from our <span className="accent">best-selling collection</span></p>

          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="section-cta">
            <Link to="/shop" className="btn-primary" id="view-all-products">
              View All Products <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PROMOTIONAL BANNER ============ */}
      <section className="promo-banner">
        <div className="container">
          <div className="promo-content">
            <div className="promo-text">
              <span className="promo-label">Special Offer</span>
              <h2>Up to <span>50% OFF</span> on Selected Items</h2>
              <p>Don't miss out on incredible deals. Shop now and save big on premium products at FAZORA Trading Co.</p>
              <Link to="/shop" className="btn-primary">
                Shop the Sale <FiArrowRight />
              </Link>
            </div>
            <div className="promo-visual">
              <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80" alt="Sale" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOT DEALS ============ */}
      {dealProducts.length > 0 && (
        <section className="deals-section">
          <div className="container">
            <h2 className="section-title">Hot Deals 🔥</h2>
            <p className="section-subtitle">Grab these amazing deals <span className="accent">before they're gone</span></p>
            <div className="products-grid">
              {dealProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ TESTIMONIALS ============ */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Trusted by thousands of <span className="accent">happy customers</span></p>

          <div className="testimonials-grid">
            {testimonials.map((t, index) => (
              <div className="testimonial-card" key={t.id} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="star filled">★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" loading="lazy" />
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Shop?</h2>
            <p>Visit our store at <strong>Al Balad, Qabil Street, Gold Market, Jeddah</strong> or shop online and order via WhatsApp!</p>
            <div className="cta-actions">
              <Link to="/shop" className="btn-primary">
                Browse Products <FiArrowRight />
              </Link>
              <a href="https://wa.me/918113945385?text=Hi%20FAZORA!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" className="btn-whatsapp-cta">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
