"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import ChapterFrame from "@/components/chapters/ChapterFrame"
import ParticleBackground from "@/components/ui/ParticleBackground"
import { CHAPTERS } from "@/lib/content"
import { fadeUp, staggerChildren } from "@/lib/animations"

export default function Chapter01() {
  const chapter = CHAPTERS.ch01
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"])

  return (
    <section ref={ref} id="ch01" data-chapter="ch01" className="chapter-section chapter-one">
      <ParticleBackground density={34} variant="rose" />
      <motion.div className="chapter-one-orb" style={{ y }} aria-hidden="true" />
      <div className="chapter-inner">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="chapter-kicker">Capitulo {chapter.number}</p>
          <h2 className="chapter-title">{chapter.title}</h2>
          <p className="chapter-subtitle">{chapter.subtitle}</p>
        </motion.div>
        <motion.div
          className="parallax-copy"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {chapter.paragraphs.map((paragraph) => (
            <motion.p variants={fadeUp} key={paragraph}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
