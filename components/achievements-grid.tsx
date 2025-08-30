const items = ["Completed Google AI/ML Certification (2024)", "Hackathon Finalist", "100 Days of Code"]

export function AchievementsGrid() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((t) => (
        <div
          key={t}
          className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-[color:#6C63FF] hover:text-white"
        >
          {t}
        </div>
      ))}
    </div>
  )
}
