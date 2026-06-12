"use client"

import { motion } from "framer-motion"
import ChapterFrame from "@/components/chapters/ChapterFrame"
import { CHAPTERS } from "@/lib/content"
import { fadeUp, staggerChildren } from "@/lib/animations"

export default function Chapter08() {
  const chapter = CHAPTERS.ch08

  return (
    <ChapterFrame id="ch08" number={chapter.number} title={chapter.title} subtitle={chapter.subtitle} className="chapter-eight">
      <motion.div
        className="moments-mural"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
      >
        {chapter.moments.map((moment) => (
          <motion.article variants={fadeUp} key={moment.content}>
            <span>{moment.type}</span>
            <h3>{moment.content}</h3>
            <p>{moment.desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </ChapterFrame>
  )
}
