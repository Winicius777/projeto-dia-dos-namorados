"use client"

import { motion } from "framer-motion"
import TimelineLines from "@/components/animations/TimelineLines"
import ChapterFrame from "@/components/chapters/ChapterFrame"
import { CHAPTERS } from "@/lib/content"
import { fadeUp } from "@/lib/animations"

export default function Chapter02() {
  const chapter = CHAPTERS.ch02

  return (
    <ChapterFrame id="ch02" number={chapter.number} title={chapter.title} subtitle={chapter.subtitle} className="chapter-two">
      <motion.p className="section-copy chapter-opening" variants={fadeUp} initial="hidden" whileInView="visible">
        {chapter.opening}
      </motion.p>
      <TimelineLines
        left={chapter.him.milestones}
        right={chapter.her.milestones}
        leftLabel={chapter.him.label}
        rightLabel={chapter.her.label}
      />
      <motion.p className="timeline-closing" variants={fadeUp} initial="hidden" whileInView="visible">
        {chapter.closing}
      </motion.p>
    </ChapterFrame>
  )
}
