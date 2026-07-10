"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"
import type { ReactNode } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Heart, Sparkles } from "lucide-react"
import BreathingEffect from "@/components/animations/BreathingEffect"
import Fireworks from "@/components/animations/Fireworks"
import HeartExplosion from "@/components/animations/HeartExplosion"
import StarlightEffect from "@/components/animations/StarlightEffect"
import CustomCursor from "@/components/ui/CustomCursor"
import EntryQuiz from "@/components/EntryQuiz"
import ChapterIndicator from "@/components/ui/ChapterIndicator"
import ParticleBackground from "@/components/ui/ParticleBackground"
import SoundToggle from "@/components/ui/SoundToggle"
import TransitionOverlay from "@/components/ui/TransitionOverlay"
import { fadeUp, scaleIn, staggerChildren } from "@/lib/animations"
import { chapters, coverImage, finalLines, galleryPhotos } from "@/lib/bookData"

function paragraphs(body: string) {
  return body
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

function roman(value: number) {
  return ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"][value - 1] ?? String(value)
}

const chapterClasses = [
  "chapter-one",
  "chapter-two",
  "chapter-three",
  "chapter-four",
  "chapter-five-real",
  "chapter-six",
  "chapter-seven",
  "chapter-eight",
  "chapter-nine",
  "chapter-ten",
  "chapter-eleven"
]

const particleVariants = {
  1: "rose",
  4: "stars",
  6: "gold",
  8: "rose",
  11: "gold"
} as const

type BookChapter = (typeof chapters)[number]

function OpeningExperience({ onStart }: { onStart: () => void }) {
  const [launching, setLaunching] = useState(false)

  function start() {
    setLaunching(true)
    window.setTimeout(onStart, 980)
  }

  return (
    <section className="opening-screen cinematic-opening" aria-label="Capa">
      <ParticleBackground density={92} variant="gold" />
      <Image
        src={coverImage}
        alt="Winicius de terno ao lado de Mariana"
        width={960}
        height={1280}
        priority
        className="opening-cover cinematic-opening-cover"
      />
      <div className="opening-vignette" aria-hidden="true" />
      <motion.div
        className="opening-content cinematic-opening-content"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="opening-author">WINICIUS</p>
        <h1>Toda mudança tem um começo.</h1>
        <p>Um presente mais do que especial para mim.</p>
        <p>
          Não é apenas um site, mas sim uma demonstração de amor e carinho na qual eu quero te proporcionar toda vez
          que você sentir ou duvidar do meu amor por você.
        </p>
        <button className="primary-button" type="button" onClick={start}>
          WINICIUS
          <ArrowRight size={17} />
        </button>
      </motion.div>
      {launching ? <TransitionOverlay /> : null}
    </section>
  )
}

function ChapterAtmosphere({ number }: { number: number }) {
  if (number === 3) return <StarlightEffect />
  if (number === 1) {
    return (
      <motion.div
        className="chapter-one-orb"
        aria-hidden="true"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    )
  }

  const variant = particleVariants[number as keyof typeof particleVariants]
  if (!variant) return null
  return <ParticleBackground density={number === 11 ? 74 : 44} variant={variant} />
}

function ChapterText({ chapter }: { chapter: BookChapter }) {
  const content = (
    <motion.div
      className="cinematic-prose"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
    >
      {paragraphs(chapter.body).map((paragraph, index) => (
        <motion.p variants={fadeUp} key={`${chapter.number}-${index}`}>
          {paragraph}
        </motion.p>
      ))}
    </motion.div>
  )

  if (chapter.number === 10) {
    return <BreathingEffect>{content}</BreathingEffect>
  }

  return content
}

function Gallery() {
  return (
    <motion.div
      className="memory-gallery cinematic-gallery"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      aria-label="Álbum de fotos"
    >
      {galleryPhotos.map((photo) => (
        <motion.article className="memory-photo-card cinematic-photo-card" variants={scaleIn} key={photo.src}>
          <div className="memory-photo-frame">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={900}
              height={1200}
              sizes="(max-width: 720px) 92vw, (max-width: 1100px) 45vw, 28vw"
            />
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}

function CameraFrame({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [lightMode, setLightMode] = useState(false)

  useEffect(() => {
    setLightMode(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 820)
  }, [])

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.72, 1], [0.93, 1, 1, 0.965])
  const y = useTransform(scrollYProgress, [0, 1], [90, -90])
  const opacity = useTransform(scrollYProgress, [0, 0.16, 0.86, 1], [0.25, 1, 1, 0.3])
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.75, 1], [4.5, 0, 0, -3])

  return (
    <motion.div
      ref={ref}
      className="camera-frame"
      style={lightMode ? undefined : { scale, y, opacity, rotateX }}
    >
      {children}
    </motion.div>
  )
}

function CinematicChapter({ chapter }: { chapter: BookChapter }) {
  const visualClass = chapterClasses[chapter.number - 1] ?? "chapter-section"
  const id = `ch${String(chapter.number).padStart(2, "0")}`

  return (
    <section id={id} data-chapter={id} className={`chapter-section cinematic-chapter ${visualClass}`}>
      <ChapterAtmosphere number={chapter.number} />
      <CameraFrame>
      <div className="chapter-inner">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="chapter-kicker">Capitulo {roman(chapter.number)}</p>
          <h2 className="chapter-title">{chapter.title}</h2>
        </motion.div>
        <ChapterText chapter={chapter} />
        {chapter.number === 5 ? <Gallery /> : null}
      </div>
      </CameraFrame>
    </section>
  )
}

function FinalExperience() {
  const [opened, setOpened] = useState(false)
  const [fireworks, setFireworks] = useState(false)

  return (
    <section
      id="final"
      data-chapter="final"
      className="chapter-section final-surprise cinematic-final"
      aria-label="Final"
    >
      <ParticleBackground density={82} variant="gold" />
      <HeartExplosion active={opened && !fireworks} />
      <Fireworks active={fireworks} />
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
              Abrir mensagem final
            </motion.button>
          ) : (
            <motion.div
              key="message"
              className="surprise-message cinematic-final-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              onAnimationComplete={() => setFireworks(true)}
            >
              <h2>{finalLines[0]}</h2>
              {finalLines.slice(1).map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                Com todo o meu amor,
                <br />
                Winicius ❤️
              </p>
              <Heart className="cinematic-final-heart" size={22} aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default function HomePage() {
  const [entered, setEntered] = useState(false)
  const [started, setStarted] = useState(false)
  const indicatorItems = useMemo(
    () => [
      ...chapters.map((chapter) => ({
        id: `ch${String(chapter.number).padStart(2, "0")}`,
        number: roman(chapter.number),
        title: chapter.title
      })),
      { id: "final", number: "F", title: "Mensagem final" }
    ],
    []
  )

  return (
    <main className="story-shell">
      <CustomCursor />
      <SoundToggle />
      {!entered ? (
        <EntryQuiz onComplete={() => setEntered(true)} />
      ) : (
      <AnimatePresence mode="wait">
        {!started ? (
          <OpeningExperience key="opening" onStart={() => setStarted(true)} />
        ) : (
          <motion.div
            key="story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ChapterIndicator items={indicatorItems} />
            {chapters.map((chapter) => (
              <CinematicChapter key={chapter.number} chapter={chapter} />
            ))}
            <FinalExperience />
          </motion.div>
        )}
      </AnimatePresence>
      )}
    </main>
  )
}
