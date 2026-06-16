import React from 'react'
import './FeaturesSection.css'
import { FeaturesSectionCards } from '..'
import type { FeatureItem } from '../FeaturesSectionCard/FeaturesSectionCard'

interface FeaturesSectionProps {
  features?: FeatureItem[]
}

function FeaturesSection({ features }: FeaturesSectionProps) : React.ReactNode {
  return (
    <section className="py-section-gap container mx-auto px-container-margin w-full">
      <FeaturesSectionCards features={features} />
    </section>
  )
}

export default FeaturesSection
