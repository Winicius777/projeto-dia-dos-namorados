"use client"

import { useState } from "react"

type Trait = {
  trait: string
  desc: string
}

export default function TransformationCard({
  before,
  after
}: {
  before: readonly Trait[]
  after: readonly Trait[]
}) {
  const [reveal, setReveal] = useState(58)

  return (
    <div className="transformation-card glass-panel">
      <div className="transformation-before">
        <h3>Antes</h3>
        {before.map((item) => (
          <p key={item.trait}>
            <strong>{item.trait}</strong>
            <span>{item.desc}</span>
          </p>
        ))}
      </div>
      <div className="transformation-after" style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}>
        <h3>Depois</h3>
        {after.map((item) => (
          <p key={item.trait}>
            <strong>{item.trait}</strong>
            <span>{item.desc}</span>
          </p>
        ))}
      </div>
      <div className="transformation-divider" style={{ left: `${reveal}%` }} aria-hidden="true" />
      <label className="transformation-slider">
        <span className="sr-only">Revelar transformacao</span>
        <input
          type="range"
          min="0"
          max="100"
          value={reveal}
          onChange={(event) => setReveal(Number(event.target.value))}
        />
      </label>
    </div>
  )
}
