"use client"

import { motion } from "framer-motion"

export default function TransitionOverlay() {
  return (
    <motion.div
      className="transition-overlay"
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{ clipPath: "circle(145% at 50% 50%)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
    />
  )
}
