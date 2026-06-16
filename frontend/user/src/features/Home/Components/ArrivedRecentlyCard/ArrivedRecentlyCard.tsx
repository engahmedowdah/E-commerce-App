import React from 'react'
import './ArrivedRecentlyCard.css'
import { useNavigate } from 'react-router-dom'
import type { Product } from '../../../../services/storeContext'

interface ArrivedRecentlyCardProps {
  product: Product
  className?: string
}

function ArrivedRecentlyCard({ product, className = '' }: ArrivedRecentlyCardProps) : React.ReactNode {
  const navigate = useNavigate()
  
  // Choose background based on product name/id hash
  const bgColors = ['#E3F2FD', '#FCE4EC', '#E8F5E9', '#FFF3E0']
  const bg = bgColors[parseInt(product.id.replace('p', '')) % bgColors.length] || '#F5F5F7'

  return (
    <div 
      onClick={() => navigate(`/products/${product.id}`)}
      className={`group cursor-pointer ${className}`}
    >
      <div 
        className="relative rounded-2xl p-8 mb-4 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all"
        style={{ backgroundColor: bg }}
      >
        {product.price < 150 && (
          <span className="absolute top-4 left-4 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase z-10 bg-primary">
            New
          </span>
        )}
        <img 
          className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110" 
          alt={product.name} 
          src={product.image} 
        />
        <button className="absolute bottom-4 right-4 w-12 h-12 bg-on-background text-white rounded-full flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all border-none cursor-pointer">
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
      <div className="text-right px-2">
        <h4 className="font-headline-md text-on-surface mb-1">{product.name}</h4>
        <p className="font-price-display text-primary">
          {product.price} ر.س
        </p>
      </div>
    </div>
  )
}

export default ArrivedRecentlyCard
