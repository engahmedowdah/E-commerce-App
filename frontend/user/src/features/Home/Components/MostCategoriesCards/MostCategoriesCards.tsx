import React from 'react'
import './MostCategoriesCards.css'
import { MostCategoriesCard } from '..'

export interface CategoryItem {
  name: string
  image: string
  category: string
}

interface MostCategoriesCardsProps {
  categories: CategoryItem[]
}
function MostCategoriesCards({ categories }: MostCategoriesCardsProps): React.ReactNode {
  const totalItems = categories.length;

  const getCardWidthClass = () => {
    const mobileWidth = totalItems === 1 ? 'w-full' : 'w-[calc(50%-16px)]';
    let smWidth = 'sm:w-[calc(33.333%-22px)]';
    if (totalItems === 1) {
      smWidth = 'sm:w-[calc(50%-16px)]';
    } else if (totalItems === 2) {
      smWidth = 'sm:w-[calc(50%-16px)]';
    }
    return `${mobileWidth} ${smWidth}`;
  };

  const cardWidthClass = getCardWidthClass();

  return (
    <div className="flex flex-wrap justify-center gap-8 w-full">
      {categories.map((cat) => (
        <MostCategoriesCard
          key={cat.category}
          name={cat.name}
          image={cat.image}
          category={cat.category}
          className={cardWidthClass}
        />
      ))}
    </div>
  )
}

export default MostCategoriesCards
