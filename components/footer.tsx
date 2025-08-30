export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-900/10">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <p className="text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Srijita Chakraborty. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
