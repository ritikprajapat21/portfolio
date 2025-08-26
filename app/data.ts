export const PROFILE = {
  name: "Ritik Prajapat",
  role: "Emerging Full‑Stack & AI Developer",
  email: "ritikprajapati084@gmail.com",
  phone: "+91 9754892367",
  location: "India",
  resumeUrl:
    "https://drive.google.com/file/d/1axu9esY396e3kQDl8amUmJTn-NOiYp6R/view",
  github: "https://github.com/ritikprajapat21",
  linkedin: "https://www.linkedin.com/in/ritik-prajapat/",
  leetcode: "https://leetcode.com/u/ritikprajapati084/",
  summary:
    "Motivated and detail‑oriented Computer Science graduate skilled in building full‑stack web apps, AI‑powered tools, and automation workflows. I love crafting intuitive UIs with clean architecture and bringing ideas to life end‑to‑end.",
};

export const SKILLS = {
  Frontend: [
    "React.js",
    "Next.js",
    "Angular",
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
  ],
  Backend: ["Node.js", "Express.js", "Django", "Python", "Java", "Spring Boot"],
  Databases: [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "Firebase",
    "Supabase",
  ],
  Languages: ["Java", "Python", "JavaScript", "Go", "PHP", "C"],
  Tools: ["Git", "GitHub", "Docker", "Vercel", "Render", "VS Code"],
  Emerging: ["AI/ML", "Automation", "Blockchain", "Data Science"],
};

export const PROJECTS = [
  {
    title: "Podcast Generator",
    tagline: "AI‑powered platform to create, voice, and publish podcasts",
    description:
      "Generate scripts, realistic voiceovers, and thumbnails with an intuitive creator UI.",
    tech: ["Next.js", "TailwindCSS", "OpenAI LLM", "Clerk", "Convex", "DALL.E"],
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
    tagline: "Summarize Gmails and auto‑label them with AI",
    description:
      "Team project that securely connects to Gmail, fetches context, and produces concise AI summaries.",
    tech: [
      "Next.js",
      "TailwindCSS",
      "Google OAuth 2.0",
      "Gmail API",
      "Gemini LLM",
    ],
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
    challenges: ["Kept PRs small and review‑friendly"],
    links: {
      demo: "https://www.surfsense.net/",
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

export const EDUCATION = {
  degree: "B.Tech. in Computer Science & Engineering",
  school: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
  cgpa: "7.75 CGPA",
};

export const CERTS = [
  "OCI AI Foundations Associate (2025)",
  "Programming in Java",
  "Database Management System",
];

export const EXPERIENCE = [
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
