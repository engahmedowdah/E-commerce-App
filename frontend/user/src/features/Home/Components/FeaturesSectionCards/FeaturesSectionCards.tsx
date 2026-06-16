import React from 'react'
import './FeaturesSectionCards.css'
import { FeaturesSectionCard } from '..'
import type { FeatureItem } from '../FeaturesSectionCard/FeaturesSectionCard'

interface FeaturesSectionCardsProps {
  features?: FeatureItem[]
}

const DEFAULT_FEATURES: FeatureItem[] = [
  {
    icon: 'local_shipping',
    title: 'شحن مجاني',
    description: 'شحن مجاني لجميع الطلبات التي تزيد عن 200 ريال لجميع مناطق المملكة.',
    iconColorClass: 'text-primary',
    iconBgClass: 'bg-primary-container/20',
  },
  {
    icon: 'verified',
    title: 'جودة متميزة',
    description: 'نحن نضمن أصالة وجودة كل منتج في متجرنا من خلال تعاوننا مع أفضل الماركات العالمية.',
    iconColorClass: 'text-secondary',
    iconBgClass: 'bg-secondary-container/20',
  },
  {
    icon: 'support_agent',
    title: 'دعم 24/7',
    description: 'فريق خدمة العملاء لدينا جاهز لمساعدتك في أي وقت عبر الدردشة المباشرة أو الهاتف.',
    iconColorClass: 'text-on-surface',
    iconBgClass: 'bg-surface-container-high',
  },
]

function FeaturesSectionCards({ features = DEFAULT_FEATURES }: FeaturesSectionCardsProps) : React.ReactNode {
  const totalItems = features.length
  console.log("totalItems", totalItems)
  const getCardWidthClass = () => {
    const mobileWidth = totalItems === 1 ? 'w-full' : 'w-[calc(50%-16px)]';
    let smWidth = 'sm:w-[calc(33.333%-12px)]';
    if (totalItems === 1) {
      smWidth = 'sm:w-[calc(50%-16px)]';
    } else if (totalItems === 2) {
      smWidth = 'sm:w-[calc(50%-16px)]';
    } else if (totalItems >= 3) {
      smWidth = 'sm:w-[calc(33.333%-12px)]';
    }
    return `${mobileWidth} ${smWidth} lg:w-[calc(25%-12px)]`;
  };

  const cardWidthClass = getCardWidthClass()

  return (
    <div className="flex flex-wrap justify-center gap-12 w-full">
      {features.map((feature, index) => (
        <FeaturesSectionCard 
          key={index} 
          feature={feature} 
          className={cardWidthClass}
        />
      ))}
    </div>
  )
}

export default FeaturesSectionCards
