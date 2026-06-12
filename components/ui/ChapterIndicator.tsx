"use client"

import { useEffect, useState } from "react"
import { CHAPTERS, CHAPTER_SEQUENCE, type ChapterId } from "@/lib/content"

export default function ChapterIndicator() {
  const [active, setActive] = useState<ChapterId>("ch01")

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        const id = visible?.target.getAttribute("data-chapter") as ChapterId | null
        if (id) setActive(id)
      },
      { threshold: [0.28, 0.45, 0.62] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="chapter-indicator" aria-label="Capitulos">
      {CHAPTER_SEQUENCE.map((id) => {
        const chapter = CHAPTERS[id]
        return (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "is-active" : ""}
            aria-label={`Capitulo ${chapter.number}: ${chapter.title}`}
            title={chapter.title}
          >
            {chapter.number}
          </a>
        )
      })}
    </nav>
  )
}
