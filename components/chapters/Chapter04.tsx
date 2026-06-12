"use client"

import { motion } from "framer-motion"
import FloatingMessages from "@/components/animations/FloatingMessages"
import ChapterFrame from "@/components/chapters/ChapterFrame"
import ParticleBackground from "@/components/ui/ParticleBackground"
import { CHAPTERS } from "@/lib/content"
import { fadeUp } from "@/lib/animations"

export default function Chapter04() {
  const chapter = CHAPTERS.ch04

  return (
    <ChapterFrame id="ch04" number={chapter.number} title={chapter.title} subtitle={chapter.subtitle} className="chapter-four">
      <ParticleBackground density={42} variant="stars" />
      <FloatingMessages messages={chapter.messages} />
      <motion.p className="section-copy chat-closing" variants={fadeUp} initial="hidden" whileInView="visible">
        {chapter.closing}
      </motion.p>
    </ChapterFrame>
  )
}
