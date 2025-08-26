"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Wrench } from "lucide-react";
import { EXPERIENCE } from "@/app/data";
import Section from "./Section";

const Experience = () => {
  useGSAP(() => {
    const linesText = new SplitText("#experience p, #experience li", {
      type: "lines",
    });

    gsap.from(linesText.lines, {
      scrollTrigger: {
        trigger: "#experience",
        start: "top 70%",
      },
      yPercent: 100,
      opacity: 0,
      stagger: 0.2,
    });
  });

  return (
    <Section id="experience" icon={Wrench} title="Experience">
      <div className="grid gap-4">
        {EXPERIENCE.map((e) => (
          <div key={e.company} className="rounded-2xl border p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold">
                {e.role} · {e.company}
              </p>
              <p className="text-sm text-neutral-500">{e.period}</p>
            </div>
            <ul className="mt-3 list-disc ml-5 space-y-1 text-sm">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
