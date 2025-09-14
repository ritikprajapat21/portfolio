"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Code2, Download, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/app/data";
import ButtonLink from "./ButtonLink";
import Section from "./Section";

const Contact = () => {
  useGSAP(() => {
    const text = new SplitText("#contact p, #contact li", {
      type: "lines",
    });

    gsap.from(text.lines, {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
      },
      yPercent: 100,
      stagger: 0.08,
      opacity: 0,
    });
  });

  return (
    <Section id="contact" icon={Mail} title="Contact & Links">
      <div className="rounded-2xl border p-5 grid md:grid-cols-2 gap-5 items-start">
        <div>
          <p className="text-lg font-semibold">Let’s build something great</p>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            I’m actively looking for entry‑level roles and internships. Email me
            or reach out on LinkedIn.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 items-center justify-center md:justify-start">
            <ButtonLink href={`mailto:${PROFILE.email}`} icon={Mail}>
              Email
            </ButtonLink>
            <ButtonLink href={PROFILE.linkedin} icon={Linkedin}>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={PROFILE.github} icon={Github}>
              GitHub
            </ButtonLink>
            <ButtonLink href={PROFILE.resumeUrl} icon={Download}>
              Resume
            </ButtonLink>
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
              <li>
                <a
                  className="inline-flex items-center gap-2 hover:underline"
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 hover:underline"
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 hover:underline"
                  href={PROFILE.leetcode}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Code2 className="h-4 w-4" />
                  LeetCode
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
