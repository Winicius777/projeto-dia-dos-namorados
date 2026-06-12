"use client"

import { motion } from "framer-motion"
import ChapterFrame from "@/components/chapters/ChapterFrame"
import ParticleBackground from "@/components/ui/ParticleBackground"
import { CHAPTERS } from "@/lib/content"
import { fadeUp, staggerChildren } from "@/lib/animations"

export default function Chapter06() {
  const chapter = CHAPTERS.ch06

  return (
    <ChapterFrame id="ch06" number={chapter.number} title={chapter.title} subtitle={chapter.subtitle} className="chapter-six">
      <ParticleBackground density={38} variant="rose" />
      <motion.div
        className="presence-panel glass-panel"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        {chapter.paragraphs.map((paragraph) => (
          <motion.p variants={fadeUp} key={paragraph}>
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </ChapterFrame>
  )
}
