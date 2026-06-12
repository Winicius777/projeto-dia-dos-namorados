"use client"

import { useEffect, useState } from "react"
import { CHAPTERS, CHAPTER_SEQUENCE } from "@/lib/content"

type IndicatorItem = {
  id: string
  number: string
  title: string
}

const defaultItems: IndicatorItem[] = CHAPTER_SEQUENCE.map((id) => ({
  id,
  number: CHAPTERS[id].number,
  title: CHAPTERS[id].title
}))

export default function ChapterIndicator({ items = defaultItems }: { items?: IndicatorItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "ch01")

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        const id = visible?.target.getAttribute("data-chapter")
        if (id) setActive(id)
      },
      { threshold: [0.28, 0.45, 0.62] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [items])

  return (
    <nav className="chapter-indicator" aria-label="Capitulos">
      {items.map((chapter) => {
        return (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className={active === chapter.id ? "is-active" : ""}
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
