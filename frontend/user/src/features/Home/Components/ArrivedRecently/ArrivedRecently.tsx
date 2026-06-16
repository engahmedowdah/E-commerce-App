import React from 'react'
import './ArrivedRecently.css'
import { ArrivedRecentlyCards } from '..'
import type { Product } from '../../../../services/storeContext'

interface ArrivedRecentlyProps {
  products?: Product[]
}

function ArrivedRecently({ products }: ArrivedRecentlyProps) : React.ReactNode {
  return (
    <section className="py-section-gap bg-surface-container-low w-full">
      <div className="container mx-auto px-container-margin flex flex-col items-center">
        <div className="w-full flex justify-end items-center mb-10">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">وصلنا حديثاً</h2>
        </div>
        <ArrivedRecentlyCards products={products} />
      </div>
    </section>
  )
}

export default ArrivedRecently
