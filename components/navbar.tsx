"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-40 w-full border-b border-slate-900/10 bg-white/90 backdrop-blur ${
        scrolled ? "shadow-sm" : ""
      }`}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="#" className="font-semibold text-slate-900">
          Srijita
        </Link>
        <ul className="hidden gap-5 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-slate-600 transition hover:text-teal-600">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-lg bg-teal-600 px-3 py-2 text-sm text-white transition hover:opacity-90 md:inline-block"
        >
          Let&apos;s talk
        </a>
      </div>
    </nav>
  )
}
