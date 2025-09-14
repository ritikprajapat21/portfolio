"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { GraduationCap } from "lucide-react";
import { CERTS, EDUCATION } from "@/app/data";
import Section from "./Section";

const Education = () => {
  useGSAP(() => {
    const educationText = new SplitText("#education p, #education li", {
      type: "lines",
    });

    gsap.from(educationText.lines, {
      scrollTrigger: {
        trigger: "#education",
        start: "top 60%",
      },
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
    });
  });

  return (
    <Section
      id="education"
      icon={GraduationCap}
      title="Education & Certifications"
    >
      <div className="rounded-2xl border p-5 flex flex-col md:flex-row justify-around">
        <div className="flex flex-col items-start justify-center pb-3 md:pb-0">
          <p className="font-medium">{EDUCATION.degree}</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {EDUCATION.school}
          </p>
        </div>
        <div className="border " />
        <div className="mt-4">
          <div className="text-sm font-medium mb-2">Certifications</div>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            {CERTS.map((c) => (
              <li key={c.name}>
                <a href={c.link} className="hover:underline" target="_blank">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Education;
