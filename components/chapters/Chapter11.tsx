"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import ChapterFrame from "@/components/chapters/ChapterFrame"
import { CHAPTERS } from "@/lib/content"
import { getPhoto } from "@/lib/photos"
import { fadeUp, scaleIn, staggerChildren } from "@/lib/animations"

export default function Chapter11() {
  const chapter = CHAPTERS.ch11

  return (
    <ChapterFrame id="ch11" number={chapter.number} title={chapter.title} subtitle={chapter.subtitle} className="chapter-eleven">
      <motion.div
        className="attempt-cards"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {chapter.cards.map((card) => (
          <motion.article className={`attempt-card ${card.color}`} variants={scaleIn} key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.article>
        ))}
      </motion.div>
      <motion.p className="attempt-closing" variants={fadeUp} initial="hidden" whileInView="visible">
        {chapter.closing}
      </motion.p>
      <motion.div
        className="memory-gallery"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        {chapter.gallery.map((memory) => (
          <motion.article className="memory-photo-card" variants={scaleIn} key={memory.title}>
            <div className="memory-photo-frame">
              <Image
                src={getPhoto(memory.photoKey)}
                alt={memory.title}
                width={900}
                height={1200}
                sizes="(max-width: 720px) 92vw, (max-width: 1100px) 45vw, 28vw"
              />
            </div>
            <div>
              <span>{memory.date}</span>
              <h3>{memory.title}</h3>
              <p>{memory.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </ChapterFrame>
  )
}
