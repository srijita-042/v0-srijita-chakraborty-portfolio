import { ExternalLink } from "lucide-react"

type Project = {
  title: string
  description: string
  stack: string[]
  github?: string
}

const projects: Project[] = [
  {
    title: "AI Chatbot 🤖",
    description: "Answers queries with basic NLP; built to learn intent classification and response generation.",
    stack: ["Python", "TensorFlow"],
    github: undefined,
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal site showcasing skills, projects, and contact.",
    stack: ["Next.js", "Tailwind CSS"],
    github: undefined,
  },
  {
    title: "Notes App",
    description: "Simple CRUD app to manage notes with local persistence.",
    stack: ["React", "TypeScript"],
    github: undefined,
  },
]

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {projects.map((p) => (
        <article key={p.title} className="card p-5 transition-transform hover:-translate-y-1">
          <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <span key={t} className="rounded-full border px-2.5 py-1 text-xs text-slate-700">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4">
            {p.github ? (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[color:#6C63FF] hover:underline underline-offset-4"
              >
                View on GitHub
                <ExternalLink className="size-4" />
              </a>
            ) : (
              <span className="text-xs text-slate-600">Add a GitHub link when ready</span>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
