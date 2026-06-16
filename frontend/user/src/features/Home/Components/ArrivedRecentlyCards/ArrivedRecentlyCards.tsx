import React from 'react'
import './ArrivedRecentlyCards.css'
import { ArrivedRecentlyCard } from '..'
import type { Product } from '../../../../services/storeContext'
import { useStore } from '../../../../services/storeContext'

interface ArrivedRecentlyCardsProps {
  products?: Product[]
}

function ArrivedRecentlyCards({ products }: ArrivedRecentlyCardsProps) : React.ReactNode {
  let activeProducts: Product[] = [];
  
  try {
    const store = useStore();
    activeProducts = products || store.products.slice(0, 4);
  } catch (e) {
    activeProducts = products || [];
  }

  const totalItems = activeProducts.length

  const getCardWidthClass = () => {
    const mobileWidth = totalItems === 1 ? 'w-full' : 'w-[calc(50%-16px)]';
    let smWidth = 'sm:w-[calc(25%-24px)]';
    if (totalItems === 1) {
      smWidth = 'sm:w-[350px]';
    } else if (totalItems === 2) {
      smWidth = 'sm:w-[calc(50%-16px)]';
    } else if (totalItems === 3) {
      smWidth = 'sm:w-[calc(33.333%-22px)]';
    }
    return `${mobileWidth} ${smWidth}`;
  }

  const cardWidthClass = getCardWidthClass()

  return (
    <div className="flex flex-wrap justify-center gap-8 w-full">
      {activeProducts.map((product) => (
        <ArrivedRecentlyCard 
          key={product.id} 
          product={product} 
          className={cardWidthClass}
        />
      ))}
    </div>
  )
}

export default ArrivedRecentlyCards
