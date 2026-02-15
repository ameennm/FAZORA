import { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiShoppingCart, FiMenu, FiX, FiSearch } from 'react-icons/fi'
import { CartContext } from '../App'
import './Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useContext(CartContext)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="FAZORA Trading Co." className="navbar-logo" />
          <div className="brand-text">
            <span className="brand-name">FAZORA</span>
            <span className="brand-tagline">Trading Co.</span>
          </div>
        </Link>

        <div className={`navbar-links ${isMobileOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/shop" className={`nav-link ${location.pathname.startsWith('/shop') ? 'active' : ''}`}>Shop</Link>
          <Link to="/shop/fashion" className={`nav-link ${location.pathname === '/shop/fashion' ? 'active' : ''}`}>Fashion</Link>
          <Link to="/shop/kitchen" className={`nav-link ${location.pathname === '/shop/kitchen' ? 'active' : ''}`}>Kitchen</Link>
          <Link to="/shop/electronics" className={`nav-link ${location.pathname === '/shop/electronics' ? 'active' : ''}`}>Electronics</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        </div>

        <div className="navbar-actions">
          <button className="cart-btn" onClick={() => setIsCartOpen(true)} id="cart-button" aria-label="Open Cart">
            <FiShoppingCart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button className="mobile-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label="Toggle Menu">
            {isMobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isMobileOpen && <div className="mobile-overlay" onClick={() => setIsMobileOpen(false)} />}
    </nav>
  )
}

export default Navbar
