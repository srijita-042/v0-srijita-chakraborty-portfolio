const achievements: string[] = [
  "Achievement 1: Won Hackathon",
  "Achievement 2: Completed Certification",
  "Achievement 3: Secured Scholarship",
]

export default function Achievements() {
  return (
    <div className="card p-5">
      <ul className="list-disc space-y-2 pl-5">
        {achievements.map((a, i) => (
          <li key={i} className="text-sm leading-relaxed text-slate-600">
            {a}
          </li>
        ))}
      </ul>
    </div>
  )
}
