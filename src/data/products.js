export const categories = [
  {
    id: 'fashion',
    name: 'Fashion & Dress',
    description: 'Trending styles for every occasion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    icon: '👗'
  },
  {
    id: 'kitchen',
    name: 'Kitchen Wares',
    description: 'Premium tools for your kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    icon: '🍳'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets & devices',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
    icon: '📱'
  }
];

export const products = [
  // Fashion & Dress
  {
    id: 1,
    name: 'Elegant Silk Dress',
    category: 'fashion',
    price: 2499,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
    rating: 4.8,
    reviews: 124,
    badge: 'Best Seller',
    description: 'A stunning silk dress perfect for evening occasions. Features elegant draping and a flattering silhouette.'
  },
  {
    id: 2,
    name: 'Classic Men\'s Blazer',
    category: 'fashion',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    rating: 4.6,
    reviews: 89,
    badge: 'New',
    description: 'Premium quality blazer tailored for the modern gentleman. Perfect for formal and semi-formal occasions.'
  },
  {
    id: 3,
    name: 'Designer Handbag',
    category: 'fashion',
    price: 1899,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
    rating: 4.9,
    reviews: 256,
    badge: 'Trending',
    description: 'Chic and versatile designer handbag crafted from premium leather with gold-tone hardware.'
  },
  {
    id: 4,
    name: 'Running Sneakers',
    category: 'fashion',
    price: 1499,
    originalPrice: 2199,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    rating: 4.7,
    reviews: 312,
    badge: 'Hot Deal',
    description: 'Lightweight and comfortable running sneakers with premium cushioning and breathable mesh upper.'
  },
  {
    id: 5,
    name: 'Casual Summer Dress',
    category: 'fashion',
    price: 999,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
    rating: 4.5,
    reviews: 178,
    badge: '',
    description: 'Light and breezy summer dress made from 100% organic cotton. Perfect for casual outings.'
  },
  {
    id: 6,
    name: 'Premium Sunglasses',
    category: 'fashion',
    price: 799,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80',
    rating: 4.4,
    reviews: 95,
    badge: 'Sale',
    description: 'UV400 protection polarized sunglasses with premium acetate frame and scratch-resistant lenses.'
  },

  // Kitchen Wares
  {
    id: 7,
    name: 'Professional Knife Set',
    category: 'kitchen',
    price: 3499,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&q=80',
    rating: 4.9,
    reviews: 203,
    badge: 'Best Seller',
    description: 'Professional grade 8-piece knife set with ergonomic handles and razor-sharp German steel blades.'
  },
  {
    id: 8,
    name: 'Cast Iron Cookware Set',
    category: 'kitchen',
    price: 4999,
    originalPrice: 7499,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&q=80',
    rating: 4.8,
    reviews: 167,
    badge: 'Premium',
    description: 'Hand-crafted cast iron cookware set including Dutch oven, skillet, and griddle. Built to last generations.'
  },
  {
    id: 9,
    name: 'Smart Blender Pro',
    category: 'kitchen',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&q=80',
    rating: 4.7,
    reviews: 134,
    badge: 'New',
    description: 'High-performance smart blender with 10 speed settings, pulse function, and auto-clean technology.'
  },
  {
    id: 10,
    name: 'Ceramic Dinner Set',
    category: 'kitchen',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=600&q=80',
    rating: 4.6,
    reviews: 89,
    badge: 'Elegant',
    description: 'Exquisite 24-piece ceramic dinner set with hand-painted designs. Microwave and dishwasher safe.'
  },
  {
    id: 11,
    name: 'Coffee Maker Deluxe',
    category: 'kitchen',
    price: 1999,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&q=80',
    rating: 4.5,
    reviews: 221,
    badge: 'Hot Deal',
    description: 'Brew barista-quality coffee at home with this programmable coffee maker featuring built-in grinder.'
  },
  {
    id: 12,
    name: 'Bamboo Cutting Board Set',
    category: 'kitchen',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=600&q=80',
    rating: 4.3,
    reviews: 76,
    badge: '',
    description: 'Eco-friendly bamboo cutting board set of 3 sizes. Anti-bacterial, knife-friendly, and easy to clean.'
  },

  // Electronics
  {
    id: 13,
    name: 'Wireless Headphones Pro',
    category: 'electronics',
    price: 4999,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    rating: 4.9,
    reviews: 456,
    badge: 'Best Seller',
    description: 'Premium noise-cancelling wireless headphones with 40-hour battery life and Hi-Res Audio support.'
  },
  {
    id: 14,
    name: 'Smart Watch Ultra',
    category: 'electronics',
    price: 7999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600&q=80',
    rating: 4.8,
    reviews: 334,
    badge: 'New',
    description: 'Advanced smartwatch with health monitoring, GPS, and 5-day battery life. Water resistant to 100m.'
  },
  {
    id: 15,
    name: 'Portable Speaker X',
    category: 'electronics',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
    rating: 4.7,
    reviews: 189,
    badge: 'Trending',
    description: '360° surround sound portable Bluetooth speaker with 20-hour battery and waterproof design.'
  },
  {
    id: 16,
    name: '4K Action Camera',
    category: 'electronics',
    price: 5999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80',
    rating: 4.6,
    reviews: 145,
    badge: 'Premium',
    description: 'Ultra HD 4K action camera with image stabilization, waterproof housing, and wide-angle lens.'
  },
  {
    id: 17,
    name: 'Wireless Earbuds Elite',
    category: 'electronics',
    price: 3499,
    originalPrice: 4499,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=600&q=80',
    rating: 4.8,
    reviews: 278,
    badge: 'Hot Deal',
    description: 'True wireless earbuds with active noise cancellation, spatial audio, and 30-hour total battery.'
  },
  {
    id: 18,
    name: 'LED Gaming Monitor',
    category: 'electronics',
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80',
    rating: 4.7,
    reviews: 112,
    badge: 'Sale',
    description: '27-inch QHD gaming monitor with 165Hz refresh rate, 1ms response time, and HDR support.'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Ahmed',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80',
    rating: 5,
    text: 'Absolutely love shopping at FAZORA! The quality of their fashion collection is outstanding. Will definitely come back for more.',
    location: 'Dubai, UAE'
  },
  {
    id: 2,
    name: 'Mohammed Khan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    text: 'The kitchen wares I purchased exceeded my expectations. Premium quality at reasonable prices. Highly recommended!',
    location: 'Mumbai, India'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
    text: 'Fast delivery and excellent customer service. The electronics quality is top-notch. FAZORA is now my go-to shopping destination.',
    location: 'Delhi, India'
  }
];
