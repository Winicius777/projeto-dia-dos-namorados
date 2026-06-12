"use client"

import Image from "next/image"
import { Camera } from "lucide-react"
import { motion } from "framer-motion"
import ChapterFrame from "@/components/chapters/ChapterFrame"
import { CHAPTERS } from "@/lib/content"
import { getPhoto, isPlaceholderPhoto } from "@/lib/photos"
import { fadeUp, scaleIn, staggerChildren } from "@/lib/animations"

function PolaroidCard({
  title,
  location,
  description,
  photoKey,
  rotation
}: {
  title: string
  location?: string
  description: string
  photoKey: string
  rotation: string
}) {
  const placeholder = isPlaceholderPhoto(photoKey)

  return (
    <motion.article className="polaroid-card" variants={scaleIn} style={{ rotate: rotation }}>
      <div className="polaroid-image">
        <Image src={getPhoto(photoKey)} alt={title} width={900} height={1100} sizes="(max-width: 720px) 90vw, 30vw" />
        {placeholder ? (
          <span className="photo-placeholder-label">
            <Camera size={18} />
            adicionar foto
          </span>
        ) : null}
      </div>
      <h3>{title}</h3>
      {location ? <p className="polaroid-location">{location}</p> : null}
      <p>{description}</p>
    </motion.article>
  )
}

export default function Chapter05() {
  const chapter = CHAPTERS.ch05
  const rotations = ["-2deg", "0deg", "2deg"]

  return (
    <ChapterFrame id="ch05" number={chapter.number} title={chapter.title} subtitle={chapter.subtitle} className="chapter-five-real">
      <motion.div
        className="realization-grid"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {chapter.paragraphs.map((paragraph) => (
          <motion.p className="section-copy" variants={fadeUp} key={paragraph}>
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
      <motion.div
        className="polaroid-grid"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {chapter.milestones.map((milestone, index) => (
          <PolaroidCard key={milestone.title} {...milestone} rotation={rotations[index]} />
        ))}
      </motion.div>
    </ChapterFrame>
  )
}
