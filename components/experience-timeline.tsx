type Item = {
  role: string
  org: string
  period: string
  desc: string
}

const items: Item[] = [
  {
    role: "Open-source Contributor",
    org: "Community",
    period: "2024 — Present",
    desc: "Contributed small fixes and docs to OSS projects.",
  },
  {
    role: "Freelance Developer",
    org: "Self-employed",
    period: "2024",
    desc: "Built small web apps and prototypes for learning and clients.",
  },
]

export function ExperienceTimeline() {
  return (
    <ol className="relative mt-4 border-l pl-6">
      {items.map((it) => (
        <li key={it.role + it.period} className="mb-8">
          <span className="absolute -left-[6px] mt-1 h-3 w-3 rounded-full" style={{ backgroundColor: "#22c55e" }} />
          <h3 className="text-base font-semibold">
            {it.role} • <span className="text-slate-600 dark:text-slate-300">{it.org}</span>
          </h3>
          <p className="text-xs text-slate-500">{it.period}</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{it.desc}</p>
        </li>
      ))}
    </ol>
  )
}
