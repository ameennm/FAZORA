import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiFilter, FiGrid, FiList } from 'react-icons/fi'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'
import './Shop.css'

function Shop() {
  const { category } = useParams()
  const [filterCat, setFilterCat] = useState(category || 'all')
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setFilterCat(category || 'all')
    window.scrollTo(0, 0)
  }, [category])

  let filtered = products.filter(p => {
    const matchesCat = filterCat === 'all' || p.category === filterCat
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  // Sort
  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price)
  if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price)
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating)
  if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name))

  const currentCategory = categories.find(c => c.id === filterCat)

  return (
    <div className="shop-page">
      {/* Header */}
      <div className="shop-header">
        <div className="container">
          <div className="shop-breadcrumb">
            <Link to="/">Home</Link> / <span>{currentCategory ? currentCategory.name : 'All Products'}</span>
          </div>
          <h1 className="shop-title">{currentCategory ? currentCategory.name : 'All Products'}</h1>
          <p className="shop-subtitle">
            {currentCategory ? currentCategory.description : 'Browse our complete collection of premium products'}
          </p>
        </div>
      </div>

      <div className="shop-content container">
        {/* Filters */}
        <div className="shop-filters">
          <div className="filter-categories">
            <button
              className={`filter-btn ${filterCat === 'all' ? 'active' : ''}`}
              onClick={() => setFilterCat('all')}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${filterCat === cat.id ? 'active' : ''}`}
                onClick={() => setFilterCat(cat.id)}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          <div className="filter-controls">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="product-search"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
              id="product-sort"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="shop-results">{filtered.length} product{filtered.length !== 1 ? 's' : ''} found</p>

        {/* Products */}
        {filtered.length > 0 ? (
          <div className="products-grid">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="shop-empty">
            <h3>No products found</h3>
            <p>Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Shop
