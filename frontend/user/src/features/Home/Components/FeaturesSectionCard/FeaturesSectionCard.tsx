import React from 'react'
import './FeaturesSectionCard.css'

export interface FeatureItem {
  icon: string
  title: string
  description: string
  iconColorClass: string
  iconBgClass: string
}

interface FeaturesSectionCardProps {
  feature: FeatureItem
  className?: string
}

function FeaturesSectionCard({ feature, className = '' }: FeaturesSectionCardProps) : React.ReactNode {
  return (
    <div className={`text-center group ${className}`}>
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform ${feature.iconBgClass}`}>
        <span className={`material-symbols-outlined text-4xl ${feature.iconColorClass}`}>{feature.icon}</span>
      </div>
      <h3 className="font-headline-md mb-3 text-on-surface">{feature.title}</h3>
      <p className="font-body-sm text-on-surface-variant max-w-xs mx-auto">{feature.description}</p>
    </div>
  )
}

export default FeaturesSectionCard
