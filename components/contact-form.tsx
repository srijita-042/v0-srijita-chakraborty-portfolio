"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") || "")
    const email = String(formData.get("email") || "")
    const message = String(formData.get("message") || "")

    try {
      // Basic client-side validation
      if (!name || !email || !message) {
        setStatus("error")
        return
      }

      // In a real app, send to an API route. For now, open mail client:
      const mailto = `mailto:srijitachakraborty223@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
        name,
      )}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`
      window.location.href = mailto
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="card p-5">
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-md border border-slate-900/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-slate-900/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-1 w-full rounded-md border border-slate-900/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="How can I help?"
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="rounded-lg bg-teal-600 px-4 py-2 text-white transition hover:opacity-90">
            Send Message
          </button>
          <div aria-live="polite" className="text-sm">
            {status === "sent" && <span className="text-teal-600">Thanks! Opening your email client…</span>}
            {status === "error" && <span className="text-slate-900">Please fill all fields correctly.</span>}
          </div>
        </div>
      </form>
      <p className="mt-4 text-xs text-slate-600">
        Prefer calling?{" "}
        <a className="link" href="tel:6291033688">
          6291033688
        </a>
      </p>
    </div>
  )
}
