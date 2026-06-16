import React from 'react'
import './MostCategoriesCard.css'
import { useNavigate } from 'react-router-dom'

interface MostCategoriesCardProps {
  name: string
  image: string
  category: string
  className?: string
}

function MostCategoriesCard({ name, image, category, className = '' }: MostCategoriesCardProps) : React.ReactNode {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/products?category=${category}`)} className={`group relative overflow-hidden rounded-xl bg-primary-fixed-dim cursor-pointer ${className}`}>
      <img src={image} alt={name} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'/>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
      <h2 className="absolute bottom-6 right-6 text-right text-white font-headline-md">{name}</h2>
    </div>
  )
}

export default MostCategoriesCard
