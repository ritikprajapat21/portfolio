"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Code2, Github, Globe } from "lucide-react";
import { PROJECTS } from "@/app/data";
import ButtonLink from "./ButtonLink";
import Pill from "./Pill";
import Section from "./Section";
import clsx from "clsx";

const Projects = () => {
  useGSAP(() => {
    const projects = gsap.utils.toArray(".fade-in");

    gsap.from(projects, {
      scrollTrigger: {
        trigger: "#projects",
        start: "top 60%",
      },
      yPercent: 100,
      opacity: 0,
      stagger: 0.3,
    });
  });

  return (
    <Section id="projects" icon={Code2} title="Featured Projects">
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
        A mix of full‑stack, AI/automation, and blockchain work. Each card
        includes tech, features, challenges, and links.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <div
            key={p.title}
            className={clsx(
              "rounded-2xl border p-5 flex flex-col fade-in",
              i === PROJECTS.length - 1 && "justify-self-center md:col-span-2",
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{p.title}</h3>
            </div>
            <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
              {p.tagline}
            </p>
            <p className="mt-3 text-sm">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
            {/* <div className="mt-4 grid grid-cols-2 gap-4 text-sm"> */}
            {/*   <div> */}
            {/*     <h4 className="font-medium mb-1">Key features</h4> */}
            {/*     <ul className="list-disc ml-5 space-y-1"> */}
            {/*       {p.features.map((f) => ( */}
            {/*         <li key={f}>{f}</li> */}
            {/*       ))} */}
            {/*     </ul> */}
            {/*   </div> */}
            {/*   <div> */}
            {/*     <h4 className="font-medium mb-1">Challenges & solutions</h4> */}
            {/*     <ul className="list-disc ml-5 space-y-1"> */}
            {/*       {p.challenges.map((c) => ( */}
            {/*         <li key={c}>{c}</li> */}
            {/*       ))} */}
            {/*     </ul> */}
            {/*   </div> */}
            {/* </div> */}
            <div className="mt-4 flex items-center gap-3">
              <ButtonLink
                href={p.links.demo || "#"}
                icon={Globe}
                disabled={!p.links.demo}
              >
                Live Demo
              </ButtonLink>
              <ButtonLink href={p.links.code} icon={Github}>
                Source
              </ButtonLink>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
