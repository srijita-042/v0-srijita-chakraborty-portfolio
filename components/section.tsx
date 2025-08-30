import type { ReactNode } from "react"

export default function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 id={`${id}-title`} className="text-balance text-2xl font-semibold text-slate-900 md:text-3xl">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}
