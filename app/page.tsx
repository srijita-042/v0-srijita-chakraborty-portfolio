"use client"

import Link from "next/link"
import { Github, Linkedin, Phone, ArrowUpRight } from "lucide-react"
import Hobbies from "../components/hobbies"
import { ExperienceTimeline } from "../components/experience-timeline"
import { AchievementsGrid } from "../components/achievements-grid"
import { ContactSection } from "../components/contact-section"
import ThemeToggle from "../components/theme-toggle"
import ScrollProgress from "../components/scroll-progress"

import Navbar from "../components/navbar"
import Section from "../components/section"
import SkillsGrid from "../components/skills-grid"
import ProjectsGrid from "../components/projects-grid"
import BackToTop from "../components/back-to-top"
import Footer from "../components/footer"

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <div className="fixed right-4 top-4 z-50">
        <ThemeToggle />
      </div>
      <Navbar />

      <header className="mx-auto max-w-5xl px-6 pt-24 pb-10 md:pt-28">
        <div className="flex flex-col gap-6">
          <p className="text-sm text-slate-600">Portfolio</p>

          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Srijita.jpg-Q330qyfjtpTgS2gb1Cx6xL6BJwN6ia.jpeg"
              alt="Srijita Chakraborty sitting by a mountain stream"
              className="h-24 w-24 rounded-full border border-slate-900/10 object-cover shadow-sm md:h-28 md:w-28"
            />
          </div>

          <h1 className="text-balance text-3xl font-semibold md:text-4xl">
            {"Hi, I’m "}
            <span className="text-[color:#6C63FF]">Srijita Chakraborty</span> {"👋"}
          </h1>

          <p className="max-w-2xl text-pretty leading-relaxed text-slate-600">
            2nd-year B.Tech CSE (AI & ML) student at MCKV Institute of Engineering. Passionate about software
            development & AI/ML.
          </p>
          <p className="text-sm text-slate-600 italic">Exploring AI one project at a time 🚀</p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[color:#6C63FF] px-4 py-2 text-white transition hover:opacity-90"
            >
              View My Projects
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
            <a
              href="/Srijita_Chakraborty_CV.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-900/10 bg-white px-4 py-2 text-slate-900 transition hover:shadow-md"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>

            {/* social icons remain the same */}
            <div className="ml-2 flex items-center gap-3">
              <a
                href="https://github.com/srijita-042"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-md border border-slate-900/10 bg-white p-2 transition hover:shadow-md"
              >
                <Github className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/srijita-chakraborty-9a583b379/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-md border border-slate-900/10 bg-white p-2 transition hover:shadow-md"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="tel:6291033688"
                aria-label="Call Srijita at 6291033688"
                className="rounded-md border border-slate-900/10 bg-white p-2 transition hover:shadow-md"
                title="Call: 6291033688"
              >
                <Phone className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <Section id="about" title="About Me">
        <div>
          <p className="text-slate-600">
            I&apos;m currently pursuing my B.Tech in CSE (AI & ML) at MCKV Institute of Engineering. I&apos;m passionate
            about software development and applying AI/ML to meaningful projects. I&apos;m eager to learn, collaborate,
            and contribute to impactful products.
          </p>
          <ul className="mt-4 list-disc pl-5 text-slate-600">
            <li>Institution: MCKV Institute of Engineering</li>
            <li>Passions: Software Development, AI/ML</li>
            <li>Hobbies: Singing, Drawing, Hand crafts</li>
            <li>
              Email:{" "}
              <a className="link" href="mailto:srijitachakraborty223@gmail.com">
                srijitachakraborty223@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a className="link" href="tel:6291033688">
                6291033688
              </a>
            </li>
          </ul>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <SkillsGrid />
      </Section>

      <Section id="projects" title="Projects">
        <ProjectsGrid />
      </Section>

      <Section id="experience" title="Experience">
        <ExperienceTimeline />
      </Section>

      <Section id="achievements" title="Achievements">
        <AchievementsGrid />
      </Section>

      <Section id="hobbies" title="Fun Facts / Hobbies">
        <Hobbies />
      </Section>

      <Section id="contact" title="Contact">
        <ContactSection />
      </Section>

      <BackToTop />
      <Footer />
    </main>
  )
}
