"use client"
import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight)
      setProgress(Math.max(0, Math.min(1, scrolled)))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      <div
        className="h-full"
        style={{ width: `${progress * 100}%`, backgroundColor: "#6C63FF", transition: "width 120ms linear" }}
        aria-hidden="true"
      />
    </div>
  )
}

export default ScrollProgress
