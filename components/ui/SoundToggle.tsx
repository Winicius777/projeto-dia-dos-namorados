"use client"

import { useEffect, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { isPlaylistPlaying, subscribePlaylist, togglePlaylist } from "@/lib/playlist"

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(isPlaylistPlaying())
    return subscribePlaylist(setEnabled)
  }, [])

  return (
    <button
      className="icon-button sound-toggle"
      type="button"
      onClick={togglePlaylist}
      aria-label={enabled ? "Pausar música" : "Tocar música"}
      title={enabled ? "Pausar música" : "Tocar música"}
    >
      {enabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  )
}
