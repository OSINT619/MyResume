"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface TypingAnimationProps {
  text: string
  speed?: number
  onComplete?: () => void
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 20, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (!isComplete) {
      setIsComplete(true)
      onComplete?.()
    }
  }, [currentIndex, text, speed, onComplete, isComplete])

  return (
    <div className="whitespace-pre-wrap">
      {displayedText}
      {currentIndex < text.length && <span className="animate-pulse">▋</span>}
    </div>
  )
}

