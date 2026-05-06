'use client'
import { useRef } from 'react'

const items = [
  'Ad Strategy',
  'Creative Production',
  'Performance Tracking',
  'Landing Pages',
  'Meta Ads',
  'Hyper-local Targeting',
  'Lead Generation',
  'ROAS Optimization',
]

function Track() {
  return (
    <span className="marquee-track" aria-hidden>
      {items.map((item, i) => (
        <span key={i} className="marquee-item">
          <span className="marquee-dot">●</span>
          {item}
        </span>
      ))}
    </span>
  )
}

export default function Marquee() {
  return (
    <div className="marquee-wrapper">
      <Track />
      <Track />
    </div>
  )
}
