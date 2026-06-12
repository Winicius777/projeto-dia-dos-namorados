"use client"

import { motion } from "framer-motion"
import TransformationCard from "@/components/animations/TransformationCard"
import ChapterFrame from "@/components/chapters/ChapterFrame"
import { CHAPTERS } from "@/lib/content"
import { fadeUp } from "@/lib/animations"

export default function Chapter12() {
  const chapter = CHAPTERS.ch12

  return (
    <ChapterFrame id="ch12" number={chapter.number} title={chapter.title} subtitle={chapter.subtitle} className="chapter-twelve">
      <TransformationCard before={chapter.before} after={chapter.after} />
      <motion.p className="transformation-closing" variants={fadeUp} initial="hidden" whileInView="visible">
        {chapter.closingText}
      </motion.p>
    </ChapterFrame>
  )
}
