"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import CustomCursor from "@/components/ui/CustomCursor"
import SoundToggle from "@/components/ui/SoundToggle"
import ChapterIndicator from "@/components/ui/ChapterIndicator"
import OpeningScreen from "@/components/chapters/OpeningScreen"
import Chapter01 from "@/components/chapters/Chapter01"
import Chapter02 from "@/components/chapters/Chapter02"
import Chapter03 from "@/components/chapters/Chapter03"
import Chapter04 from "@/components/chapters/Chapter04"
import Chapter05 from "@/components/chapters/Chapter05"
import Chapter06 from "@/components/chapters/Chapter06"
import Chapter07 from "@/components/chapters/Chapter07"
import Chapter08 from "@/components/chapters/Chapter08"
import Chapter09 from "@/components/chapters/Chapter09"
import Chapter10 from "@/components/chapters/Chapter10"
import Chapter11 from "@/components/chapters/Chapter11"
import Chapter12 from "@/components/chapters/Chapter12"
import FinalChapter from "@/components/chapters/FinalChapter"
import FinalLetter from "@/components/chapters/FinalLetter"
import FinalSurprise from "@/components/chapters/FinalSurprise"

export default function HomePage() {
  const [started, setStarted] = useState(false)

  return (
    <main className="story-shell">
      <CustomCursor />
      <SoundToggle />
      <AnimatePresence mode="wait">
        {!started ? (
          <OpeningScreen key="opening" onStart={() => setStarted(true)} />
        ) : (
          <motion.div
            key="story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ChapterIndicator />
            <Chapter01 />
            <Chapter02 />
            <Chapter03 />
            <Chapter04 />
            <Chapter05 />
            <Chapter06 />
            <Chapter07 />
            <Chapter08 />
            <Chapter09 />
            <Chapter10 />
            <Chapter11 />
            <Chapter12 />
            <FinalChapter />
            <FinalLetter />
            <FinalSurprise />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
