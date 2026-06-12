"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import ParticleBackground from "@/components/ui/ParticleBackground"
import TransitionOverlay from "@/components/ui/TransitionOverlay"
import { STORY } from "@/lib/content"
import { OG_IMAGE } from "@/lib/photos"

export default function OpeningScreen({ onStart }: { onStart: () => void }) {
  const [launching, setLaunching] = useState(false)

  function start() {
    setLaunching(true)
    window.setTimeout(onStart, 980)
  }

  return (
    <section className="opening-screen" aria-label="Abertura">
      <ParticleBackground density={88} />
      <Image
        src={OG_IMAGE}
        alt="Capa do livro Que os Caminhos se Cruzem"
        width={647}
        height={1000}
        priority
        className="opening-cover"
      />
      <div className="opening-vignette" aria-hidden="true" />
      <motion.div
        className="opening-content"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="opening-author">{STORY.author}</p>
        <h1>{STORY.title}</h1>
        <p>{STORY.subtitle}</p>
        <button className="primary-button" type="button" onClick={start}>
          {STORY.openingButton}
          <ArrowRight size={17} />
        </button>
      </motion.div>
      {launching ? <TransitionOverlay /> : null}
    </section>
  )
}
