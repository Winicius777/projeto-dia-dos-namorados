"use client"

import { motion } from "framer-motion"
import BreathingEffect from "@/components/animations/BreathingEffect"
import ChapterFrame from "@/components/chapters/ChapterFrame"
import ParticleBackground from "@/components/ui/ParticleBackground"
import { CHAPTERS } from "@/lib/content"
import { letterReveal, staggerChildren, fadeUp } from "@/lib/animations"
import { splitWords } from "@/lib/utils"

export default function Chapter10() {
  const chapter = CHAPTERS.ch10

  return (
    <ChapterFrame id="ch10" number={chapter.number} title={chapter.title} subtitle={chapter.subtitle} className="chapter-ten">
      <ParticleBackground density={130} variant="stars" />
      <BreathingEffect>
        <motion.div
          className="stayed-panel"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="word-reveal">
            {splitWords(chapter.mainText).map((word, index) => (
              <motion.span variants={letterReveal} key={`${word}-${index}`}>
                {word}
              </motion.span>
            ))}
          </p>
          <div className="gold-line" />
          {chapter.lines.map((line) => (
            <motion.p className="stayed-line" variants={fadeUp} key={line}>
              {line}
            </motion.p>
          ))}
          <motion.p className="section-copy stayed-context" variants={fadeUp}>
            {chapter.context}
          </motion.p>
        </motion.div>
      </BreathingEffect>
    </ChapterFrame>
  )
}
