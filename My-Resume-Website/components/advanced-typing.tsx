"use client"

import React, { useState, useEffect, type ReactNode } from "react"

interface AdvancedTypingProps {
  children: ReactNode
  speed?: number
  startDelay?: number
  onComplete?: () => void
  className?: string
}

export const AdvancedTyping: React.FC<AdvancedTypingProps> = ({
  children,
  speed = 30,
  startDelay = 0,
  onComplete,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [childrenArray, setChildrenArray] = useState<ReactNode[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Convert children to array on mount
  useEffect(() => {
    const childArray = React.Children.toArray(children)
    setChildrenArray(childArray)
  }, [children])

  // Handle start delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setIsTyping(true)
    }, startDelay)

    return () => clearTimeout(timer)
  }, [startDelay])

  // Handle typing animation
  useEffect(() => {
    if (!isTyping || currentIndex >= childrenArray.length) return

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)

      if (currentIndex + 1 >= childrenArray.length) {
        setIsTyping(false)
        onComplete?.()
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [childrenArray, currentIndex, isTyping, onComplete, speed])

  if (!isVisible) return null

  return (
    <div className={className}>
      {childrenArray.slice(0, currentIndex).map((child, index) => (
        <React.Fragment key={index}>{child}</React.Fragment>
      ))}
      {isTyping && <span className="animate-pulse">▋</span>}
    </div>
  )
}

