"use client"

import { motion } from "framer-motion"
import StarlightEffect from "@/components/animations/StarlightEffect"
import ChapterFrame from "@/components/chapters/ChapterFrame"
import { CHAPTERS } from "@/lib/content"
import { fadeUp, staggerChildren } from "@/lib/animations"

export default function Chapter03() {
  const chapter = CHAPTERS.ch03

  return (
    <ChapterFrame id="ch03" number={chapter.number} title={chapter.title} subtitle={chapter.subtitle} className="chapter-three">
      <StarlightEffect />
      <motion.div
        className="constellation-list"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {chapter.moments.map((moment) => (
          <motion.article variants={fadeUp} key={moment.text}>
            <span>{moment.icon}</span>
            <p>{moment.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </ChapterFrame>
  )
}
