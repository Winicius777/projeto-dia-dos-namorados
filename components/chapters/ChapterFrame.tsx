"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import type { ChapterId } from "@/lib/content"
import { cx } from "@/lib/utils"

type ChapterFrameProps = {
  id: ChapterId
  number: string
  title: string
  subtitle: string
  children: ReactNode
  className?: string
}

export default function ChapterFrame({ id, number, title, subtitle, children, className }: ChapterFrameProps) {
  return (
    <section id={id} data-chapter={id} className={cx("chapter-section", className)}>
      <div className="chapter-inner">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
          <p className="chapter-kicker">Capitulo {number}</p>
          <h2 className="chapter-title">{title}</h2>
          <p className="chapter-subtitle">{subtitle}</p>
        </motion.div>
        {children}
      </div>
    </section>
  )
}
