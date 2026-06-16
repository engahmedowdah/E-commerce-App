import React from 'react'
import './Sponsors.css'
import { SponsorsCards } from '..'
import type { SponsorItem } from '../SponsorCard/SponsorCard'

interface SponsorsProps {
  sponsors?: SponsorItem[]
}

function Sponsors({ sponsors }: SponsorsProps) : React.ReactNode {
  return (
    <section className="py-16 border-t border-b border-outline-variant bg-surface-bright w-full">
      <SponsorsCards sponsors={sponsors} />
    </section>
  )
}

export default Sponsors
