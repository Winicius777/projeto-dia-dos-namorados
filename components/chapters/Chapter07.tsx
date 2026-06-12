"use client"

import Image from "next/image"
import { useState } from "react"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"
import ChapterFrame from "@/components/chapters/ChapterFrame"
import { CHAPTERS, type Place } from "@/lib/content"
import { getPhoto, isPlaceholderPhoto } from "@/lib/photos"
import { fadeUp, staggerChildren } from "@/lib/animations"

export default function Chapter07() {
  const chapter = CHAPTERS.ch07
  const [active, setActive] = useState<Place>(chapter.places[0])

  return (
    <ChapterFrame id="ch07" number={chapter.number} title={chapter.title} subtitle={chapter.subtitle} className="chapter-seven">
      <motion.p className="section-copy place-intro" variants={fadeUp} initial="hidden" whileInView="visible">
        {chapter.intro}
      </motion.p>
      <div className="map-layout">
        <div className="memory-map glass-panel" aria-label="Mapa emocional de Congonhas">
          <div className="map-grid-lines" aria-hidden="true" />
          {chapter.places.map((place, index) => (
            <button
              type="button"
              key={place.id}
              className={`map-marker marker-${index + 1} ${active.id === place.id ? "is-active" : ""}`}
              onClick={() => setActive(place)}
              aria-label={place.name}
            >
              <MapPin size={24} />
            </button>
          ))}
        </div>
        <motion.aside
          className="place-drawer glass-panel"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className="place-photo" variants={fadeUp}>
            <Image
              src={getPhoto(active.photoKey)}
              alt={active.name}
              width={900}
              height={700}
              sizes="(max-width: 900px) 92vw, 34vw"
            />
            {isPlaceholderPhoto(active.photoKey) ? <span>adicionar foto</span> : null}
          </motion.div>
          <motion.p className="place-city" variants={fadeUp}>
            {active.city} · {active.lat.toFixed(4)}, {active.lng.toFixed(4)}
          </motion.p>
          <motion.h3 variants={fadeUp}>{active.name}</motion.h3>
          <motion.p variants={fadeUp}>{active.memory}</motion.p>
        </motion.aside>
      </div>
    </ChapterFrame>
  )
}
