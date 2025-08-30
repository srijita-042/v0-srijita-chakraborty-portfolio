"use client"
import { useState } from "react"
import type React from "react"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${name || "Visitor"}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)
    window.location.href = `mailto:srijitachakraborty223@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
      <form onSubmit={onSubmit} className="rounded-lg border p-4">
        <div className="grid gap-3">
          <label className="text-sm" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:#6C63FF]"
            placeholder="Your name"
          />

          <label className="mt-2 text-sm" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:#6C63FF]"
            placeholder="you@example.com"
          />

          <label className="mt-2 text-sm" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:#6C63FF]"
            placeholder="How can I help?"
          />

          <button
            type="submit"
            className="mt-3 rounded-md bg-[color:#6C63FF] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Send
          </button>
        </div>
      </form>

      <div className="rounded-lg border p-4 text-sm">
        <p>Direct links:</p>
        <ul className="mt-2 space-y-2">
          <li>
            📧{" "}
            <a className="underline-offset-4 hover:underline" href="mailto:srijitachakraborty223@gmail.com">
              srijitachakraborty223@gmail.com
            </a>
          </li>
          <li>
            📞{" "}
            <a className="underline-offset-4 hover:underline" href="tel:+916291033688">
              6291033688
            </a>
          </li>
          <li>
            🌐{" "}
            <a
              className="underline-offset-4 hover:underline"
              href="https://github.com/srijita-042"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            &nbsp;|&nbsp;
            <a
              className="underline-offset-4 hover:underline"
              href="https://www.linkedin.com/in/srijita-chakraborty-9a583b379/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p className="mt-3 text-xs text-slate-500">I’ll get back to you as soon as possible.</p>
      </div>
    </div>
  )
}
