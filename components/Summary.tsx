"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Sparkles } from "lucide-react";
import { PROFILE } from "@/app/data";
import Section from "./Section";

const Summary = () => {
  useGSAP(() => {
    const paraText = new SplitText("#summary p", { type: "lines" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#summary",
        start: "top 70%",
      },
    });

    tl.from(paraText.lines, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.08,
    });
  });

  return (
    <Section id="summary" icon={Sparkles} title="Professional Summary">
      <p className="max-w-3xl text-neutral-700 dark:text-neutral-300">
        {PROFILE.summary}
      </p>
    </Section>
  );
};

export default Summary;
