const categories = [
  {
    title: "Programming",
    items: ["Python", "C/C++", "Java", "JavaScript"],
  },
  {
    title: "AI/ML",
    items: ["TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    title: "Web Dev",
    items: ["HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Linux"],
  },
]

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
      {categories.map((cat) => (
        <div
          key={cat.title}
          className="card p-5 transition-transform hover:-translate-y-1"
          aria-label={`${cat.title} skills`}
        >
          <h3 className="text-base font-semibold text-slate-900">{cat.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {cat.items.map((it) => (
              <span
                key={it}
                className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs text-slate-700 hover:bg-[color:#6C63FF] hover:text-white transition-colors"
              >
                {it}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
