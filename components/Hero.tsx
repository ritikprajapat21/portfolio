"use client";
import { useGSAP } from "@gsap/react";
import {
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Sparkles,
  Wrench,
} from "lucide-react";
import { PROFILE } from "@/app/data";
import Border from "./Border";
import ButtonLink from "./ButtonLink";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      const titleText = new SplitText("h1", { type: "words" });
      const paraText = new SplitText("p", { type: "lines" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top center",
        },
      });

      tl.from(titleText.words, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "power1.inOut",
      });

      tl.from(paraText.lines, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "power1.inOut",
      });

      tl.from(
        "li",
        {
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "power1.inOut",
        },
        "-=0.2",
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} id="hero" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-24 md:py-28 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Border>
            <div className="inline-flex bg-neutral-900 items-center gap-2 rounded-full border border-neutral-900/80 px-3 py-1 text-xs">
              <Sparkles className="h-4 w-4" />
              Emerging Developer
            </div>
          </Border>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Building the Future with Code
          </h1>
          <p className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-300">
            Hi, I’m {PROFILE.name} — {PROFILE.role}. I craft web apps, automate
            workflows, and explore AI & blockchain.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink
              href="#projects"
              target=""
              icon={ExternalLink}
              variant="primary"
            >
              View My Work
            </ButtonLink>
            <ButtonLink href={PROFILE.github} icon={Github}>
              GitHub
            </ButtonLink>
            <ButtonLink href={PROFILE.linkedin} icon={Linkedin}>
              LinkedIn
            </ButtonLink>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 -z-10 bg-gradient-to-tr from-indigo-200/50 via-violet-200/40 to-fuchsia-200/40 dark:from-indigo-500/10 dark:via-violet-500/10 dark:to-fuchsia-500/10 rounded-[3rem] blur-3xl" />
          <div className="rounded-3xl border bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6 md:p-8 shadow">
            <ul className="grid grid-cols-2 gap-4 text-sm">
              <li className="flex items-center gap-2">
                <Code2 className="h-4 w-4" /> Web Development
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="h-4 w-4" /> AI & Automation
              </li>
              <li className="flex items-center gap-2">
                <Database className="h-4 w-4" /> Full‑Stack
              </li>
              <li className="flex items-center gap-2">
                <Wrench className="h-4 w-4" /> Open Source
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
