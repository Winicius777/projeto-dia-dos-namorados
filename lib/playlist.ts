"use client"

export const playlistTracks = [
  { src: "/track-01-quando-bate-a-saudade.m4a", title: "Quando Bate Aquela Saudade — Rubel" },
  { src: "/track-02-velha-infancia.m4a", title: "Velha Infância — Tribalistas" },
  { src: "/track-03-meu-numero.m4a", title: "Meu Número — Hugo e Guilherme" }
]

type Listener = (playing: boolean) => void

let audio: HTMLAudioElement | null = null
let trackIndex = 0
const listeners = new Set<Listener>()

function emit(playing: boolean) {
  listeners.forEach((listener) => listener(playing))
}

function ensureAudio() {
  if (audio) return audio
  audio = new Audio(playlistTracks[trackIndex].src)
  audio.preload = "auto"
  audio.volume = 0.85
  audio.addEventListener("ended", () => {
    trackIndex = (trackIndex + 1) % playlistTracks.length
    if (!audio) return
    audio.src = playlistTracks[trackIndex].src
    void audio.play().catch(() => emit(false))
  })
  audio.addEventListener("play", () => emit(true))
  audio.addEventListener("pause", () => emit(false))
  return audio
}

export function startPlaylist() {
  const element = ensureAudio()
  if (element.paused) {
    void element.play().catch(() => emit(false))
  }
}

export function togglePlaylist() {
  const element = ensureAudio()
  if (element.paused) {
    void element.play().catch(() => emit(false))
  } else {
    element.pause()
  }
}

export function isPlaylistPlaying() {
  return Boolean(audio && !audio.paused)
}

export function subscribePlaylist(listener: Listener) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}
