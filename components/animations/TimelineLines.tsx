"use client"

import { motion } from "framer-motion"
import { slideLeft, slideRight, staggerChildren } from "@/lib/animations"

export default function TimelineLines({
  left,
  right,
  leftLabel,
  rightLabel
}: {
  left: readonly string[]
  right: readonly string[]
  leftLabel: string
  rightLabel: string
}) {
  return (
    <div className="timeline-grid">
      <motion.div
        className="timeline-column"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3>{leftLabel}</h3>
        {left.map((item) => (
          <motion.p variants={slideLeft} key={item}>
            {item}
          </motion.p>
        ))}
      </motion.div>
      <div className="timeline-convergence" aria-hidden="true">
        <span />
      </div>
      <motion.div
        className="timeline-column"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3>{rightLabel}</h3>
        {right.map((item) => (
          <motion.p variants={slideRight} key={item}>
            {item}
          </motion.p>
        ))}
      </motion.div>
    </div>
  )
}
