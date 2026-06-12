"use client"

import { useEffect, useRef } from "react"

export default function StarlightEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let raf = 0
    let frame = 0
    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.8 + 0.4,
      a: Math.random() * 0.8 + 0.2
    }))

    function resize() {
      const ratio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * ratio
      canvas.height = rect.height * ratio
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    function draw() {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)
      for (const star of stars) {
        const alpha = reduceMotion ? star.a : star.a + Math.sin(frame / 38 + star.x * 10) * 0.18
        ctx.fillStyle = `rgba(255, 248, 231, ${Math.max(0.15, alpha)})`
        ctx.beginPath()
        ctx.arc(star.x * rect.width, star.y * rect.height, star.r, 0, Math.PI * 2)
        ctx.fill()
      }

      const progress = reduceMotion ? 0.5 : (Math.sin(frame / 110) + 1) / 2
      const leftX = rect.width * (0.16 + progress * 0.27)
      const rightX = rect.width * (0.84 - progress * 0.27)
      const y = rect.height * 0.42

      ctx.strokeStyle = "rgba(201, 169, 110, 0.25)"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(leftX, y)
      ctx.lineTo(rightX, y + rect.height * 0.08)
      ctx.stroke()

      for (const [x, yy] of [
        [leftX, y],
        [rightX, y + rect.height * 0.08]
      ] as const) {
        ctx.fillStyle = "rgba(232, 213, 176, 0.95)"
        ctx.shadowColor = "rgba(232, 213, 176, 0.75)"
        ctx.shadowBlur = 28
        ctx.beginPath()
        ctx.arc(x, yy, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      frame += 1
      raf = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="starlight-canvas" aria-hidden="true" />
}
