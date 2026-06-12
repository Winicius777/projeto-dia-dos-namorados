"use client"

import { useEffect, useRef } from "react"

type ParticleBackgroundProps = {
  density?: number
  variant?: "gold" | "stars" | "rose"
  className?: string
}

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
}

export default function ParticleBackground({
  density = 70,
  variant = "gold",
  className = ""
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const particles: Particle[] = []
    let frame = 0
    let raf = 0

    const color =
      variant === "rose" ? "232, 180, 184" : variant === "stars" ? "255, 248, 231" : "201, 169, 110"

    function resize() {
      const ratio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * ratio
      canvas.height = rect.height * ratio
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    function seed() {
      particles.length = 0
      const rect = canvas.getBoundingClientRect()
      const total = reduceMotion ? Math.max(18, Math.floor(density / 4)) : density
      for (let i = 0; i < total; i += 1) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          size: variant === "stars" ? Math.random() * 1.9 + 0.6 : Math.random() * 2.8 + 1,
          alpha: Math.random() * 0.5 + 0.28
        })
      }
    }

    function draw() {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      for (const particle of particles) {
        if (!reduceMotion) {
          particle.x += particle.vx
          particle.y += particle.vy
          particle.alpha += Math.sin(frame / 55 + particle.x) * 0.001
        }

        if (particle.x < -10) particle.x = rect.width + 10
        if (particle.x > rect.width + 10) particle.x = -10
        if (particle.y < -10) particle.y = rect.height + 10
        if (particle.y > rect.height + 10) particle.y = -10

        ctx.beginPath()
        ctx.fillStyle = `rgba(${color}, ${Math.max(0.16, Math.min(0.82, particle.alpha))})`
        ctx.shadowColor = `rgba(${color}, 0.55)`
        ctx.shadowBlur = variant === "stars" ? 12 : 8
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      }

      if (variant !== "stars") {
        ctx.shadowBlur = 0
        for (let i = 0; i < particles.length; i += 1) {
          for (let j = i + 1; j < particles.length; j += 1) {
            const a = particles[i]
            const b = particles[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < 120) {
              ctx.strokeStyle = `rgba(${color}, ${(1 - distance / 120) * 0.12})`
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.stroke()
            }
          }
        }
      }

      frame += 1
      raf = window.requestAnimationFrame(draw)
    }

    resize()
    seed()
    draw()
    window.addEventListener("resize", resize)

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [density, variant])

  return <canvas ref={canvasRef} className={`particle-canvas ${className}`} aria-hidden="true" />
}
