"use client"

import { useEffect, useRef } from "react"

export const useTypingSound = (isTyping: boolean, volume = 0.2) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/typing-sound.mp3")
      audioRef.current.volume = volume

      return () => {
        if (audioRef.current) {
          audioRef.current.pause()
          audioRef.current = null
        }
      }
    }
  }, [volume])

  useEffect(() => {
    if (!audioRef.current) return

    if (isTyping) {
      const playSound = () => {
        if (audioRef.current) {
          audioRef.current.currentTime = 0
          audioRef.current.play().catch(() => {
            // Ignore autoplay errors
          })
        }
      }

      const interval = setInterval(playSound, 100)
      return () => clearInterval(interval)
    } else {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [isTyping])
}

