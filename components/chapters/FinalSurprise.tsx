"use client"

import { useState } from "react"
import { Heart, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Fireworks from "@/components/animations/Fireworks"
import HeartExplosion from "@/components/animations/HeartExplosion"
import ParticleBackground from "@/components/ui/ParticleBackground"
import { STORY } from "@/lib/content"

export default function FinalSurprise() {
  const [opened, setOpened] = useState(false)
  const [final, setFinal] = useState(false)

  return (
    <section className="chapter-section final-surprise" aria-label="Surpresa final">
      <ParticleBackground density={70} variant="gold" />
      <HeartExplosion active={opened && !final} />
      <Fireworks active={final} />
      <div className="surprise-content">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.button
              key="open"
              className="surprise-open"
              type="button"
              onClick={() => setOpened(true)}
              initial={{ opacity: 0, scale: 0.86 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              viewport={{ once: true }}
            >
              <Sparkles size={20} />
              {STORY.surprise.buttonText}
            </motion.button>
          ) : final ? (
            <motion.div
              key="final"
              className="surprise-final"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>{STORY.surprise.finalMessage}</h2>
              <p>{STORY.surprise.finalSub}</p>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              className="surprise-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
            >
              <h2>{STORY.surprise.mainLine}</h2>
              <p>{STORY.surprise.secondLine}</p>
              <button className="primary-button" type="button" onClick={() => setFinal(true)}>
                <Heart size={18} />
                {STORY.surprise.actionButton}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
