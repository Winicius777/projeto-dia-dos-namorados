"use client"

import { useMemo, type CSSProperties } from "react"

export default function HeartExplosion({ active }: { active: boolean }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 54 }, (_, index) => ({
        id: index,
        x: Math.cos(index * 1.7) * (90 + (index % 9) * 18),
        y: Math.sin(index * 1.7) * (80 + (index % 7) * 16),
        delay: (index % 12) * 0.035
      })),
    []
  )

  if (!active) return null

  return (
    <div className="heart-explosion" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          style={
            {
              "--x": `${particle.x}px`,
              "--y": `${particle.y}px`,
              "--delay": `${particle.delay}s`
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
