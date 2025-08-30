type ExperienceItem = {
  role: string
  org: string
  period: string
  details?: string
}

const items: ExperienceItem[] = [
  {
    role: "Open to internships",
    org: "Software Development / AI & ML",
    period: "Currently seeking",
    details: "Looking to contribute to real-world projects, learn from mentors, and build impactful solutions.",
  },
]

export default function Experience() {
  return (
    <ul className="space-y-4">
      {items.map((e, i) => (
        <li key={i} className="card p-5">
          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
            <div>
              <h3 className="font-semibold text-slate-900">{e.role}</h3>
              <p className="text-sm text-slate-600">{e.org}</p>
            </div>
            <p className="text-sm text-slate-600">{e.period}</p>
          </div>
          {e.details ? <p className="mt-3 text-sm leading-relaxed text-slate-600">{e.details}</p> : null}
        </li>
      ))}
    </ul>
  )
}
