"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 rounded-full bg-[color:#6C63FF] p-3 text-white shadow-md transition hover:opacity-90 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:#22c55e]"
      aria-label="Back to top"
    >
      <ArrowUp className="size-5" />
    </button>
  )
}
