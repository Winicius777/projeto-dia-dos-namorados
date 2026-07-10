"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Heart } from "lucide-react"
import ParticleBackground from "@/components/ui/ParticleBackground"
import { startPlaylist } from "@/lib/playlist"

const STORAGE_KEY = "mariwini-entry-quiz"

const questions = [
  "Você se lembra onde foi o nosso primeiro encontro?",
  "Você se lembra onde aconteceu o nosso primeiro beijo de verdade?",
  "Você se lembra de como nós nos conhecemos?",
  "Se foi você quem decidiu terminar, por que entrou nesta página?"
]

type QuizProps = {
  onComplete: () => void
}

export default function EntryQuiz({ onComplete }: QuizProps) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>(() => questions.map(() => ""))
  const [finished, setFinished] = useState(false)
  const [leaving, setLeaving] = useState(false)

  const progress = useMemo(() => {
    if (finished) return 100
    return Math.round((step / questions.length) * 100)
  }, [step, finished])

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved) as { answers?: string[] }
        if (Array.isArray(parsed.answers)) {
          setAnswers((current) => current.map((value, index) => parsed.answers?.[index] ?? value))
        }
      }
    } catch {
      // localStorage indisponível — segue sem respostas salvas
    }
  }, [])

  function persist(nextAnswers: string[], done: boolean) {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ answers: nextAnswers, completedAt: done ? new Date().toISOString() : null })
      )
    } catch {
      // localStorage indisponível — apenas não persiste
    }
  }

  function updateAnswer(value: string) {
    setAnswers((current) => {
      const next = [...current]
      next[step] = value
      return next
    })
  }

  function nextStep() {
    const done = step === questions.length - 1
    persist(answers, done)
    if (done) {
      setFinished(true)
    } else {
      setStep((current) => current + 1)
    }
  }

  function finish() {
    persist(answers, true)
    startPlaylist()
    setLeaving(true)
    window.setTimeout(onComplete, 720)
  }

  const canAdvance = answers[step]?.trim().length > 0

  return (
    <motion.section
      className="entry-quiz"
      aria-label="Questionário de entrada"
      initial={{ opacity: 0 }}
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <ParticleBackground density={58} variant="rose" />
      <div className="entry-quiz-vignette" aria-hidden="true" />
      <div className="entry-quiz-shell">
        <div className="entry-quiz-progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <motion.span
            className="entry-quiz-progress-fill"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={`question-${step}`}
              className="entry-quiz-card"
              initial={{ opacity: 0, x: 46, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -46, filter: "blur(6px)" }}
              transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="entry-quiz-kicker">
                Pergunta {step + 1} de {questions.length}
              </p>
              <h1 className="entry-quiz-question">{questions[step]}</h1>
              <textarea
                className="entry-quiz-input"
                value={answers[step]}
                onChange={(event) => updateAnswer(event.target.value)}
                placeholder="Escreva com o coração..."
                rows={3}
                autoFocus
              />
              <button className="primary-button entry-quiz-button" type="button" onClick={nextStep} disabled={!canAdvance}>
                {step === questions.length - 1 ? "Concluir" : "Próxima"}
                <ArrowRight size={17} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="quiz-final"
              className="entry-quiz-card entry-quiz-final"
              initial={{ opacity: 0, y: 34, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Heart className="entry-quiz-heart" size={26} aria-hidden="true" />
              <h1 className="entry-quiz-question">Obrigado por lembrar.</h1>
              <p className="entry-quiz-note">Agora, deixa eu te mostrar a nossa história.</p>
              <button className="primary-button entry-quiz-button" type="button" onClick={finish}>
                Continuar
                <ArrowRight size={17} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
