"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const next = theme === "dark" ? "light" : "dark"
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label="Toggle dark mode"
      className="rounded-md border px-3 py-1.5 text-sm hover:bg-[color:#6C63FF] hover:text-white transition-colors"
      title="Toggle dark mode"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  )
}

export default ThemeToggle
