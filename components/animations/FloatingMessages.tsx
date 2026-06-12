"use client"

import { motion } from "framer-motion"
import { staggerChildren, fadeUp } from "@/lib/animations"

type Message = {
  side: string
  text: string
}

export default function FloatingMessages({ messages }: { messages: readonly Message[] }) {
  return (
    <motion.div
      className="floating-messages"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {messages.map((message, index) => (
        <motion.div
          className={`message-bubble ${message.side === "her" ? "from-her" : "from-him"}`}
          variants={fadeUp}
          key={`${message.text}-${index}`}
          style={{ animationDelay: `${index * 0.18}s` }}
        >
          <span className="typing-dot" aria-hidden="true" />
          {message.text}
        </motion.div>
      ))}
    </motion.div>
  )
}
