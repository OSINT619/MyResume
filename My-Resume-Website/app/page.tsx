"use client"

import { useEffect, useState } from "react"
import Terminal from "@/components/terminal"
import config from "@/config.json"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="h-full w-full bg-gradient-to-b from-gray-900 to-black text-white">
      {loading ? (
        <div className="flex h-full items-center justify-center">
          <div className="animate-pulse text-2xl font-mono">Loading terminal...</div>
        </div>
      ) : (
        <Terminal config={config} />
      )}
    </main>
  )
}

