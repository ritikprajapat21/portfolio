import { Wrench } from "lucide-react";
import { EXPERIENCE } from "@/app/data";
import Section from "./Section";

const Experience = () => {
  return (
    <Section id="experience" icon={Wrench} title="Experience">
      <div className="grid gap-4">
        {EXPERIENCE.map((e) => (
          <div key={e.company} className="rounded-2xl border p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="font-semibold">
                {e.role} · {e.company}
              </div>
              <div className="text-sm text-neutral-500">{e.period}</div>
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
