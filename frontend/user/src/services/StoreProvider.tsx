import React, { useState, useEffect } from 'react';
import { StoreContext, type User, type Product, type CartItem, type Order, type Address } from './storeContext';

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme State
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Auth State
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('kutuku_user');
    return stored ? JSON.parse(stored) : null;
  });

  // Cart State
  const [cart, setCart] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem('kutuku_cart');
    return stored ? JSON.parse(stored) : [];
  });

  // Orders State
  const [orders, setOrders] = useState<Order[]>(() => {
    const stored = localStorage.getItem('kutuku_orders');
    if (stored) return JSON.parse(stored);
    
    // Default mock order to display timeline immediately
    return [
      {
        id: 'KTK-89241',
        items: [
          {
            product: {
              id: 'p2',
              name: 'Oversized Wool Cardigan',
              price: 189,
              rating: 4.8,
              reviewsCount: 34,
              image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=80',
              category: "Women's Fashion",
              subcategory: 'Knitwear',
              collection: 'Cozy Autumn Essentials',
              sizes: ['S', 'M', 'L'],
              colors: ['Warm Beige', 'Charcoal'],
              description: 'A cozy cardigan crafted from premium wool blend, perfect for layering.',
              reviews: []
            },
            quantity: 1,
            selectedSize: 'M',
            selectedColor: 'Warm Beige'
          }
        ],
        subtotal: 189,
        shipping: 10,
        total: 199,
        address: {
          country: 'Saudi Arabia',
          city: 'Riyadh',
          street: 'King Fahd Road, Olaya District',
          zipCode: '12211'
        },
        paymentMethod: 'Credit Card',
        status: 'Shipped',
        createdAt: new Date(Date.now() - 24 * 3600 * 1000).toLocaleString() // 1 day ago
      }
    ];
  });

  // Save to local storage on changes
  useEffect(() => {
    localStorage.setItem('kutuku_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('kutuku_orders', JSON.stringify(orders));
  }, [orders]);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      document.body.setAttribute('data-theme', next);
      return next;
    });
  };

  // Auth operations
  const login = (email: string, name = 'Ahmed Al-Ghamdi') => {
    const loggedUser = { name, email, phone: '+966 50 123 4567', token: 'mock-jwt-token' };
    setUser(loggedUser);
    localStorage.setItem('kutuku_user', JSON.stringify(loggedUser));
    return true;
  };

  const register = (name: string, email: string, phone: string) => {
    const loggedUser = { name, email, phone, token: 'mock-jwt-token' };
    setUser(loggedUser);
    localStorage.setItem('kutuku_user', JSON.stringify(loggedUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kutuku_user');
  };

  // Static Mock Data
  const categories = ["Men's Fashion", "Women's Fashion", "Accessories", "Footwear", "Home Decor"];
  
  const subcategories: Record<string, string[]> = {
    "Men's Fashion": ["Shirts", "Jackets", "Pants"],
    "Women's Fashion": ["Dresses", "Knitwear", "Skirts"],
    "Accessories": ["Watches", "Sunglasses", "Bags"],
    "Footwear": ["Sneakers", "Boots", "Loafers"],
    "Home Decor": ["Vases", "Mugs", "Cushions"]
  };

  const collections = ["Summer Minimalist", "Cozy Autumn Essentials", "Activewear Collection", "Timeless Classics"];

  const countries: Record<string, string[]> = {
    "Saudi Arabia": ["Riyadh", "Jeddah", "Dammam", "Mecca", "Medina"],
    "United Arab Emirates": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
    "Kuwait": ["Kuwait City", "Hawally", "Salmiya", "Jahra"],
    "Bahrain": ["Manama", "Riffa", "Muharraq"],
    "Oman": ["Muscat", "Salalah", "Sohar"]
  };

  const products: Product[] = [
    {
      id: 'p1',
      name: 'Organic Linen Shirt',
      price: 120,
      rating: 4.6,
      reviewsCount: 18,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=80',
      category: "Men's Fashion",
      subcategory: 'Shirts',
      collection: 'Summer Minimalist',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Sage Green', 'Warm Beige', 'Sand'],
      description: 'Crafted from 100% certified organic linen, this shirt features a breathable weave and a clean casual collar, ideal for warm climates.',
      reviews: [
        { id: 'r1', userName: 'Khalid A.', rating: 5, date: '2026-05-12', comment: 'Extremely comfortable shirt! Keeps me cool in the hot weather.' },
        { id: 'r2', userName: 'Sarah F.', rating: 4, date: '2026-05-18', comment: 'Great quality linen, though it wrinkles easily (as linen does). Fits well.' }
      ]
    },
    {
      id: 'p2',
      name: 'Oversized Wool Cardigan',
      price: 189,
      rating: 4.8,
      reviewsCount: 34,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=80',
      category: "Women's Fashion",
      subcategory: 'Knitwear',
      collection: 'Cozy Autumn Essentials',
      sizes: ['S', 'M', 'L'],
      colors: ['Warm Beige', 'Charcoal'],
      description: 'A cozy cardigan crafted from a premium wool blend, perfect for layering during chilly evenings. Features tortoiseshell buttons and drop shoulders.',
      reviews: [
        { id: 'r3', userName: 'Deema M.', rating: 5, date: '2026-05-20', comment: 'Feels so soft and premium! My go-to outer layer now.' }
      ]
    },
    {
      id: 'p3',
      name: 'Classic Leather Chronograph',
      price: 299,
      rating: 4.9,
      reviewsCount: 42,
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop&q=80',
      category: "Accessories",
      subcategory: 'Watches',
      collection: 'Timeless Classics',
      sizes: ['One Size'],
      colors: ['Warm Beige', 'Charcoal'],
      description: 'A striking minimalist chronograph watch featuring a genuine Italian leather strap, sapphire crystal glass, and Japanese quartz movement.',
      reviews: [
        { id: 'r4', userName: 'Yazeed S.', rating: 5, date: '2026-05-01', comment: 'Absolutely gorgeous watch. Looks twice as expensive as it is.' }
      ]
    },
    {
      id: 'p4',
      name: 'Minimalist Canvas Tote Bag',
      price: 65,
      rating: 4.5,
      reviewsCount: 15,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80',
      category: "Accessories",
      subcategory: 'Bags',
      collection: 'Summer Minimalist',
      sizes: ['One Size'],
      colors: ['Sand', 'Sage Green'],
      description: 'Durable heavy-duty organic canvas tote with reinforced handles and interior zip pockets. Perfect for daily shopping or beach days.',
      reviews: []
    },
    {
      id: 'p5',
      name: 'Retro Jogger Sneakers',
      price: 145,
      rating: 4.7,
      reviewsCount: 29,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=80',
      category: "Footwear",
      subcategory: 'Sneakers',
      collection: 'Activewear Collection',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['Sage Green', 'Charcoal', 'Sand'],
      description: 'Retro-inspired running shoes featuring modern cushioned soles and lightweight suede panels. Unbelievably soft step.',
      reviews: []
    },
    {
      id: 'p6',
      name: 'Luxe Leather Chelsea Boots',
      price: 240,
      rating: 4.8,
      reviewsCount: 22,
      image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&auto=format&fit=crop&q=80',
      category: "Footwear",
      subcategory: 'Boots',
      collection: 'Timeless Classics',
      sizes: ['41', '42', '43', '44'],
      colors: ['Charcoal', 'Warm Beige'],
      description: 'Genuine calfskin leather Chelsea boots with elasticated side gussets and pull tabs. Handcrafted with a durable Goodyear welt.',
      reviews: []
    },
    {
      id: 'p7',
      name: 'A-Line Cotton Midi Dress',
      price: 175,
      rating: 4.4,
      reviewsCount: 12,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=80',
      category: "Women's Fashion",
      subcategory: 'Dresses',
      collection: 'Summer Minimalist',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Warm Beige', 'Sage Green'],
      description: 'A breeze to wear, this dress is made from dynamic cotton-poplin with a flared A-line silhouette and adjustable tie shoulder straps.',
      reviews: []
    },
    {
      id: 'p8',
      name: 'Structured Utility Jacket',
      price: 210,
      rating: 4.7,
      reviewsCount: 19,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=80',
      category: "Men's Fashion",
      subcategory: 'Jackets',
      collection: 'Cozy Autumn Essentials',
      sizes: ['M', 'L', 'XL'],
      colors: ['Charcoal', 'Sage Green'],
      description: 'A rugged utility jacket made from durable cotton twill. Features four spacious cargo pockets and a hidden drawstring waist.',
      reviews: []
    },
    {
      id: 'p9',
      name: 'Ceramic Handcrafted Vase',
      price: 85,
      rating: 4.9,
      reviewsCount: 9,
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&auto=format&fit=crop&q=80',
      category: "Home Decor",
      subcategory: 'Vases',
      collection: 'Timeless Classics',
      sizes: ['Medium', 'Large'],
      colors: ['Sand', 'Warm Beige'],
      description: 'Wabi-sabi inspired earthen ceramic vase with a textured matte glaze, hand-thrown by local artisans.',
      reviews: []
    }
  ];

  // Cart Operations
  const addToCart = (product: Product, quantity: number, size: string, color: string) => {
    setCart(prev => {
      const existingIdx = prev.findIndex(item => 
        item.product.id === product.id && 
        item.selectedSize === size && 
        item.selectedColor === color
      );

      if (existingIdx > -1) {
        const nextCart = [...prev];
        nextCart[existingIdx].quantity += quantity;
        return nextCart;
      } else {
        return [...prev, { product, quantity, selectedSize: size, selectedColor: color }];
      }
    });
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setCart(prev => prev.filter(item => 
      !(item.product.id === productId && item.selectedSize === size && item.selectedColor === color)
    ));
  };

  const updateCartQty = (productId: string, size: string, color: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId, size, color);
      return;
    }
    setCart(prev => prev.map(item => 
      (item.product.id === productId && item.selectedSize === size && item.selectedColor === color)
        ? { ...item, quantity: qty }
        : item
    ));
  };

  const clearCart = () => setCart([]);

  // Create Order
  const createOrder = (address: Address, paymentMethod: string): Order => {
    const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const shipping = 10;
    const total = subtotal + shipping;

    const newOrder: Order = {
      id: `KTK-${Math.floor(10000 + Math.random() * 90000)}`,
      items: [...cart],
      subtotal,
      shipping,
      total,
      address,
      paymentMethod,
      status: 'Pending',
      createdAt: new Date().toLocaleString()
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  return (
    <StoreContext.Provider value={{
      user,
      login,
      register,
      logout,
      products,
      categories,
      subcategories,
      collections,
      cart,
      addToCart,
      removeFromCart,
      updateCartQty,
      clearCart,
      countries,
      orders,
      createOrder,
      theme,
      toggleTheme
    }}>
      {children}
    </StoreContext.Provider>
  );
};
