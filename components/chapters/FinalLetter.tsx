"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { STORY } from "@/lib/content"

export default function FinalLetter() {
  const fullText = useMemo(() => STORY.letter.body.join("\n\n"), [])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      setCount(fullText.length)
      return
    }

    const interval = window.setInterval(() => {
      setCount((value) => Math.min(value + 3, fullText.length))
    }, 24)

    return () => window.clearInterval(interval)
  }, [fullText])

  return (
    <section className="chapter-section final-letter" aria-label="Carta para Mariana">
      <div className="paper-texture" aria-hidden="true" />
      <motion.article
        className="letter-paper"
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="wax-seal" aria-hidden="true" />
        <p className="letter-opening">{STORY.letter.opening}</p>
        <p className="letter-body">{fullText.slice(0, count)}</p>
        <p className="letter-closing">{STORY.letter.closing}</p>
        <p className="letter-signature">{STORY.letter.signature}</p>
      </motion.article>
    </section>
  )
}
