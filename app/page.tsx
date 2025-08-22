"use client"
import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download, Globe, ExternalLink, Code2, Cpu, Database, Wrench, Sparkles, Link as LinkIcon, GraduationCap } from "lucide-react";

const PROFILE = {
  name: "Ritik Prajapat",
  role: "Emerging Full‑Stack & AI Developer",
  email: "ritikprajapati084@gmail.com",
  phone: "+91 9754892367",
  location: "India",
  resumeUrl: "https://ritikprajapat-portfolio.vercel.app/Ritik_Prajapat_Resume.pdf", // TODO: replace with a hosted PDF URL
  github: "https://github.com/ritikprajapat21",
  linkedin: "https://www.linkedin.com/in/ritik-prajapat/",
  portfolio: "https://ritikprajapat-portfolio.vercel.app/",
  leetcode: "https://leetcode.com/u/ritikprajapati084/",
  summary:
    "Motivated and detail‑oriented Computer Science graduate skilled in building full‑stack web apps, AI‑powered tools, and automation workflows. I love crafting intuitive UIs with clean architecture and bringing ideas to life end‑to‑end.",
};

const SKILLS = {
  Frontend: ["React.js", "Next.js", "Angular", "HTML", "CSS", "JavaScript", "TailwindCSS"],
  Backend: ["Node.js", "Express.js", "Django", "Python", "Java", "Spring Boot"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Firebase", "Supabase"],
  Languages: ["Java", "Python", "JavaScript", "Go", "PHP", "C"],
  Tools: ["Git", "GitHub", "Docker", "Vercel", "Render", "VS Code"],
  Emerging: ["AI/ML", "Automation", "Blockchain", "Data Science"],
};

const PROJECTS = [
  {
    title: "Podcast Generator",
    tagline: "AI‑powered platform to create, voice, and publish podcasts",
    description:
      "Generate scripts, realistic voiceovers, and thumbnails with an intuitive creator UI.",
    tech: ["Next.js", "TailwindCSS", "OpenAI LLM", "Clerk", "Convex"],
    features: [
      "AI script generation + voice synthesis",
      "Auto thumbnail creation",
      "Auth with Clerk and real‑time data via Convex",
      "Live preview & smooth UX",
    ],
    challenges: [
      "Maintained low‑latency previews while streaming AI output",
      "Designed reusable UI building blocks",
    ],
    links: {
      demo: "", // TODO add live demo URL if hosted
      code: "https://github.com/ritikprajapat21/tune-in",
    },
  },
  {
    title: "Email Summarizer",
    tagline: "Summarize Gmail threads and auto‑label with AI",
    description:
      "Team project that securely connects to Gmail, fetches context, and produces concise AI summaries.",
    tech: ["Next.js", "TailwindCSS", "Google OAuth 2.0", "Gmail API", "Gemini LLM"],
    features: [
      "Secure OAuth sign‑in",
      "Per‑thread summaries + smart labels",
      "Clean, responsive Inbox UI",
      "Custom filters for quick triage",
    ],
    challenges: [
      "Ensured privacy‑safe access with OAuth scopes",
      "Debounced API calls for responsiveness",
    ],
    links: {
      demo: "", // TODO add live demo URL if hosted
      code: "https://github.com/ritikprajapat21/email-summarizer",
    },
  },
  {
    title: "Socially",
    tagline: "Full‑stack social media app for sharing and liking posts",
    description:
      "Built end‑to‑end with Django and Tailwind; supports post CRUD, likes, and session auth.",
    tech: ["Django", "SQLite", "TailwindCSS", "HTML", "CSS", "JS"],
    features: [
      "Create, edit, delete posts",
      "Like interactions with counters",
      "Django session‑based authentication",
      "Minimal, clean UI",
    ],
    challenges: [
      "Modeled relational data with SQLite",
      "Hardened auth views against common threats",
    ],
    links: {
      demo: "", // TODO add live demo URL if hosted
      code: "https://github.com/ritikprajapat21/socially",
    },
  },
  {
    title: "SurfSense – Open Source PRs",
    tagline: "UX improvements and backend refactors to an audio app",
    description:
      "Contributed volume slider, close control, and FastAPI refactors; multiple PRs merged.",
    tech: ["Next.js", "Python", "FastAPI"],
    features: [
      "Added volume slider and close button",
      "Refactored FastAPI backend modules",
      "Improved accessibility and responsiveness",
    ],
    challenges: [
      "Coordinated changes across frontend and backend",
      "Kept PRs small and review‑friendly",
    ],
    links: {
      demo: "https://github.com/MODSetter/SurfSense",
      code: "https://github.com/MODSetter/SurfSense/pull/183",
    },
  },
  // {
  //   title: "Decentralized Voting DApp (Mini)",
  //   tagline: "Blockchain demo: verifiable on‑chain voting",
  //   description:
  //     "Concept + starter code to showcase blockchain interest; replace with your live link later.",
  //   tech: ["Solidity", "Hardhat", "Ethers.js", "Next.js"],
  //   features: [
  //     "Create election, register candidates",
  //     "One‑address‑one‑vote enforcement",
  //     "Results query from contract",
  //   ],
  //   challenges: [
  //     "Handling chain events & UI state",
  //     "Gas‑aware reads/writes",
  //   ],
  //   links: {
  //     demo: "", // TODO add live demo when deployed (e.g., Vercel + testnet)
  //     code: "#", // TODO link repo when ready
  //   },
  //   badge: "Blockchain",
  // },
];

const EDUCATION = {
  degree: "B.Tech. in Computer Science & Engineering",
  school: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
  cgpa: "7.75 CGPA",
};

const CERTS = [
  "OCI AI Foundations Associate (2025)",
  "Programming in Java",
  "Database Management System",
];

const EXPERIENCE = [
  {
    company: "RezuWizard",
    role: "Web Developer Intern",
    period: "Mar 2025 – Jun 2025",
    bullets: [
      "Built a responsive, modular dashboard UI with React + Tailwind",
      "Implemented secure auth & authorization flows with backend APIs (onboarding ↑ ~40%)",
      "State management with Zustand and React Query",
      "Created reusable UI components to minimize duplication",
    ],
  },
];

// ---------- UI Helpers ----------
const Section = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="scroll-mt-24 py-14">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-6 w-6" />
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm leading-6">
    {children}
  </span>
);

const ButtonLink = ({ href, children, icon: Icon, target = "_blank", variant = "primary", disabled }) => (
  <a
    href={disabled ? undefined : href}
    target={target}
    rel="noreferrer noopener"
    className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium shadow transition ${
      variant === "primary"
        ? "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black"
        : "bg-white text-black hover:bg-neutral-100 border dark:bg-neutral-900 dark:text-white dark:border-neutral-800"
    } ${disabled ? "opacity-50 pointer-events-none" : ""}`}
  >
    {Icon && <Icon className="h-4 w-4" />}
    {children}
  </a>
);

// ---------- MAIN PAGE ----------
export default function Portfolio() {
  return (
    <div className="relative min-h-screen text-neutral-900 dark:text-neutral-100">

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-neutral-200/60 dark:border-neutral-800/60 bg-white/60 dark:bg-black/40">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#hero" className="font-semibold">{PROFILE.name}</a>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a href="#summary" className="hover:opacity-70">About</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#education" className="hover:opacity-70">Education</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <ButtonLink href={PROFILE.resumeUrl} icon={Download}>Resume</ButtonLink>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 py-24 md:py-28 grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-4">
              <Sparkles className="h-4 w-4" />
              Emerging Developer
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Building the Future with Code
            </h1>
            <p className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-300">
              Hi, I’m {PROFILE.name} — {PROFILE.role}. I craft web apps, automate workflows, and explore AI & blockchain.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="#projects" icon={ExternalLink} variant="primary">View My Work</ButtonLink>
              <ButtonLink href={PROFILE.github} icon={Github}>GitHub</ButtonLink>
              <ButtonLink href={PROFILE.linkedin} icon={Linkedin}>LinkedIn</ButtonLink>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 -z-10 bg-gradient-to-tr from-indigo-200/50 via-violet-200/40 to-fuchsia-200/40 dark:from-indigo-500/10 dark:via-violet-500/10 dark:to-fuchsia-500/10 rounded-[3rem] blur-3xl"/>
            <div className="rounded-3xl border bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6 md:p-8 shadow">
              <ul className="grid grid-cols-2 gap-4 text-sm">
                <li className="flex items-center gap-2"><Code2 className="h-4 w-4"/> Web Development</li>
                <li className="flex items-center gap-2"><Cpu className="h-4 w-4"/> AI & Automation</li>
                <li className="flex items-center gap-2"><Database className="h-4 w-4"/> Full‑Stack</li>
                <li className="flex items-center gap-2"><Wrench className="h-4 w-4"/> Open Source</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Summary */}
      <Section id="summary" icon={Sparkles} title="Professional Summary">
        <p className="max-w-3xl text-neutral-700 dark:text-neutral-300">
          {PROFILE.summary}
        </p>
      </Section>

      {/* Skills */}
      <Section id="skills" icon={Wrench} title="Technical Skills">
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group} className="rounded-2xl border p-5">
              <h3 className="font-medium mb-3">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" icon={Code2} title="Featured Projects">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">A mix of full‑stack, AI/automation, and blockchain work. Each card includes tech, features, challenges, and links.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border p-5 flex flex-col">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                {p.badge && <span className="text-xs border rounded-full px-2 py-0.5">{p.badge}</span>}
              </div>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{p.tagline}</p>
              <p className="mt-3 text-sm">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-1">Key features</h4>
                  <ul className="list-disc ml-5 space-y-1">
                    {p.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Challenges & solutions</h4>
                  <ul className="list-disc ml-5 space-y-1">
                    {p.challenges.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <ButtonLink href={p.links.demo || "#"} icon={Globe} disabled={!p.links.demo}>Live Demo</ButtonLink>
                <ButtonLink href={p.links.code} icon={Github}>Source</ButtonLink>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience (optional for freshers but keeps your strong internship) */}
      <Section id="experience" icon={Wrench} title="Experience">
        <div className="grid gap-4">
          {EXPERIENCE.map((e) => (
            <div key={e.company} className="rounded-2xl border p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-semibold">{e.role} · {e.company}</div>
                <div className="text-sm text-neutral-500">{e.period}</div>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-sm">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education & Certifications */}
      <Section id="education" icon={GraduationCap} title="Education & Certifications">
        <div className="rounded-2xl border p-5">
          <div className="font-medium">{EDUCATION.degree}</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">{EDUCATION.school} · {EDUCATION.cgpa}</div>
          <div className="mt-4">
            <div className="text-sm font-medium mb-2">Certifications</div>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              {CERTS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" icon={Mail} title="Contact & Links">
        <div className="rounded-2xl border p-5 grid md:grid-cols-2 gap-5 items-start">
          <div>
            <div className="text-lg font-semibold">Let’s build something great</div>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              I’m actively looking for entry‑level roles and internships. Email me or reach out on LinkedIn.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${PROFILE.email}`} icon={Mail}>Email</ButtonLink>
              <ButtonLink href={PROFILE.linkedin} icon={Linkedin}>LinkedIn</ButtonLink>
              <ButtonLink href={PROFILE.github} icon={Github}>GitHub</ButtonLink>
              <ButtonLink href={PROFILE.portfolio} icon={LinkIcon}>Portfolio</ButtonLink>
              <ButtonLink href={PROFILE.resumeUrl} icon={Download}>Resume</ButtonLink>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-2xl border p-4">
              <div className="font-medium mb-1">Quick Facts</div>
              <ul className="space-y-1 list-disc ml-5">
                <li>Based in {PROFILE.location}</li>
                <li>Open to Remote/On‑site</li>
                <li>Open Source contributor</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="font-medium mb-1">Links</div>
              <ul className="space-y-2">
                <li><a className="inline-flex items-center gap-2 hover:underline" href={PROFILE.github} target="_blank" rel="noreferrer noopener"><Github className="h-4 w-4"/>GitHub</a></li>
                <li><a className="inline-flex items-center gap-2 hover:underline" href={PROFILE.linkedin} target="_blank" rel="noreferrer noopener"><Linkedin className="h-4 w-4"/>LinkedIn</a></li>
                <li><a className="inline-flex items-center gap-2 hover:underline" href={PROFILE.leetcode} target="_blank" rel="noreferrer noopener"><Code2 className="h-4 w-4"/>LeetCode</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind & Framer Motion.
      </footer>
    </div>
  );
}

