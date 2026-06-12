"use client"

import { useEffect, useState } from "react"

type Point = { x: number; y: number }

export default function CustomCursor() {
  const [point, setPoint] = useState<Point>({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches
    if (!finePointer) return

    function move(event: PointerEvent) {
      setPoint({ x: event.clientX, y: event.clientY })
      setVisible(true)
    }

    function leave() {
      setVisible(false)
    }

    window.addEventListener("pointermove", move)
    window.addEventListener("pointerleave", leave)
    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerleave", leave)
    }
  }, [])

  return (
    <div
      className="custom-cursor"
      style={{ transform: `translate3d(${point.x}px, ${point.y}px, 0)`, opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <span />
      <span />
    </div>
  )
}
