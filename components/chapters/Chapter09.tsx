"use client"

import { motion } from "framer-motion"
import ChapterFrame from "@/components/chapters/ChapterFrame"
import { CHAPTERS } from "@/lib/content"
import { fadeUp, staggerChildren } from "@/lib/animations"

export default function Chapter09() {
  const chapter = CHAPTERS.ch09

  return (
    <ChapterFrame id="ch09" number={chapter.number} title={chapter.title} subtitle={chapter.subtitle} className="chapter-nine">
      <motion.div
        className="hardship-list"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {chapter.hardships.map((hardship, index) => (
          <motion.article variants={fadeUp} key={hardship}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{hardship}</p>
          </motion.article>
        ))}
      </motion.div>
      <motion.p className="hardship-closing" variants={fadeUp} initial="hidden" whileInView="visible">
        {chapter.closing}
      </motion.p>
    </ChapterFrame>
  )
}
