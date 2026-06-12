"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(false)
  const contextRef = useRef<AudioContext | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  const oscillatorsRef = useRef<OscillatorNode[]>([])

  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((oscillator) => oscillator.stop())
      contextRef.current?.close()
    }
  }, [])

  async function toggleSound() {
    if (enabled) {
      gainRef.current?.gain.setTargetAtTime(0, contextRef.current?.currentTime ?? 0, 0.18)
      setEnabled(false)
      return
    }

    if (!contextRef.current) {
      const audioWindow = window as Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext }
      const AudioCtor = audioWindow.AudioContext || audioWindow.webkitAudioContext
      if (!AudioCtor) return
      const context = new AudioCtor()
      const gain = context.createGain()
      gain.gain.value = 0
      gain.connect(context.destination)

      const notes = [196, 246.94, 329.63]
      oscillatorsRef.current = notes.map((frequency, index) => {
        const oscillator = context.createOscillator()
        const filter = context.createBiquadFilter()
        oscillator.type = "sine"
        oscillator.frequency.value = frequency
        filter.type = "lowpass"
        filter.frequency.value = 580 + index * 90
        oscillator.connect(filter)
        filter.connect(gain)
        oscillator.start()
        return oscillator
      })

      contextRef.current = context
      gainRef.current = gain
    }

    await contextRef.current.resume()
    gainRef.current?.gain.setTargetAtTime(0.018, contextRef.current.currentTime, 0.28)
    setEnabled(true)
  }

  return (
    <button
      className="icon-button sound-toggle"
      type="button"
      onClick={toggleSound}
      aria-label={enabled ? "Desligar ambiente sonoro" : "Ligar ambiente sonoro"}
      title={enabled ? "Desligar som" : "Ligar som"}
    >
      {enabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  )
}
