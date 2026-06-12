"use client"

import { useEffect, useRef } from "react"

type Spark = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  color: string
}

export default function Fireworks({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    let tick = 0
    const sparks: Spark[] = []
    const colors = ["#c9a96e", "#e8b4b8", "#f9f6f0", "#6b2d3e"]

    function resize() {
      const ratio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * ratio
      canvas.height = rect.height * ratio
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    function burst() {
      const rect = canvas.getBoundingClientRect()
      const x = rect.width * (0.18 + Math.random() * 0.64)
      const y = rect.height * (0.18 + Math.random() * 0.42)
      for (let i = 0; i < 52; i += 1) {
        const angle = (Math.PI * 2 * i) / 52
        const speed = 1.3 + Math.random() * 3
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          color: colors[i % colors.length]
        })
      }
    }

    function draw() {
      const rect = canvas.getBoundingClientRect()
      ctx.fillStyle = "rgba(0, 0, 0, 0.22)"
      ctx.fillRect(0, 0, rect.width, rect.height)

      if (tick % 38 === 0) burst()

      for (let i = sparks.length - 1; i >= 0; i -= 1) {
        const spark = sparks[i]
        spark.x += spark.vx
        spark.y += spark.vy
        spark.vy += 0.018
        spark.life -= 0.012

        ctx.globalAlpha = Math.max(0, spark.life)
        ctx.fillStyle = spark.color
        ctx.shadowColor = spark.color
        ctx.shadowBlur = 18
        ctx.beginPath()
        ctx.arc(spark.x, spark.y, 2.2, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1

        if (spark.life <= 0) sparks.splice(i, 1)
      }

      tick += 1
      raf = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [active])

  return <canvas ref={canvasRef} className="fireworks-canvas" aria-hidden="true" />
}
