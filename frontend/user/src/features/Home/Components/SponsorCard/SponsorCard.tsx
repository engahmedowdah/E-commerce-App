import React from 'react'
import './SponsorCard.css'

export interface SponsorItem {
  name: string
}

interface SponsorCardProps {
  sponsor: SponsorItem
  className?: string
}

function SponsorCard({ sponsor, className = '' }: SponsorCardProps) : React.ReactNode {
  return (
    <span className={`font-black text-2xl tracking-tighter text-on-surface ${className}`}>
      {sponsor.name}
    </span>
  )
}

export default SponsorCard
