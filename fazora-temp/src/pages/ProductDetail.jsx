import { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft, FiShoppingCart, FiStar, FiTruck, FiShield, FiRefreshCw } from 'react-icons/fi'
import { CartContext } from '../App'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container" style={{ paddingTop: 160, textAlign: 'center' }}>
          <h2>Product not found</h2>
          <Link to="/shop" className="btn-primary" style={{ marginTop: 20, display: 'inline-flex' }}>Back to Shop</Link>
        </div>
      </div>
    )
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleOrderWhatsApp = () => {
    const phoneNumber = '918113945385'
    const message = `Hi! I'd like to order:\n\n▪ *${product.name}*\n💰 Price: ₹${product.price.toLocaleString()}\n\nPlease confirm availability. Thank you!`
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="product-detail-page">
      <div className="detail-header">
        <div className="container">
          <Link to="/shop" className="back-link">
            <FiArrowLeft /> Back to Shop
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="detail-grid">
          {/* Image */}
          <div className="detail-image-section">
            <div className="detail-image-wrapper">
              <img src={product.image} alt={product.name} className="detail-image" />
              {product.badge && <span className="detail-badge">{product.badge}</span>}
              {discount > 0 && <span className="detail-discount">-{discount}%</span>}
            </div>
          </div>

          {/* Info */}
          <div className="detail-info">
            <div className="detail-category">{product.category}</div>
            <h1 className="detail-name">{product.name}</h1>

            <div className="detail-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>★</span>
                ))}
              </div>
              <span>{product.rating} • {product.reviews} reviews</span>
            </div>

            <div className="detail-pricing">
              <span className="detail-current-price">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="detail-original-price">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="detail-save">Save ₹{(product.originalPrice - product.price).toLocaleString()}</span>
                </>
              )}
            </div>

            <p className="detail-description">{product.description}</p>

            <div className="detail-actions">
              <button className="btn-primary btn-large" onClick={() => addToCart(product)} id={`add-cart-detail-${product.id}`}>
                <FiShoppingCart /> Add to Cart
              </button>
              <button className="btn-wa-order" onClick={handleOrderWhatsApp}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order via WhatsApp
              </button>
            </div>

            <div className="detail-features">
              <div className="detail-feature">
                <FiTruck />
                <span>Fast Delivery Available</span>
              </div>
              <div className="detail-feature">
                <FiShield />
                <span>100% Genuine Product</span>
              </div>
              <div className="detail-feature">
                <FiRefreshCw />
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="related-section">
            <h2 className="section-title">You May Also Like</h2>
            <p className="section-subtitle">More products from <span className="accent">{product.category}</span></p>
            <div className="products-grid">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
