import React from 'react'
import './SponsorsCards.css'
import { SponsorCard } from '..'
import type { SponsorItem } from '../SponsorCard/SponsorCard'

interface SponsorsCardsProps {
  sponsors?: SponsorItem[]
}

const DEFAULT_SPONSORS: SponsorItem[] = [
  { name: 'NIKE' },
  { name: 'ADIDAS' },
  { name: 'PUMA' },
  { name: 'REEBOK' },
  { name: 'CONVERSE' },
  { name: 'VANS' }
]

function SponsorsCards({ sponsors = DEFAULT_SPONSORS }: SponsorsCardsProps) : React.ReactNode {
  return (
    <div className="container mx-auto px-container-margin flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
      {sponsors.map((sponsor, index) => (
        <SponsorCard key={index} sponsor={sponsor} />
      ))}
    </div>
  )
}

export default SponsorsCards
