"use client"

import { motion } from "framer-motion"
import { CHAPTERS } from "@/lib/content"
import { fadeUp, staggerChildren } from "@/lib/animations"

export default function FinalChapter() {
  const chapter = CHAPTERS.ch13

  return (
    <section id="ch13" data-chapter="ch13" className="chapter-section final-chapter">
      <motion.div
        className="final-lines"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <p className="chapter-kicker">Capitulo {chapter.number}</p>
        <h2>{chapter.title}</h2>
        {chapter.lines.map((line) => (
          <motion.p variants={fadeUp} key={line}>
            {line}
          </motion.p>
        ))}
      </motion.div>
    </section>
  )
}
