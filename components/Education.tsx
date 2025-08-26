import { GraduationCap } from "lucide-react";
import { CERTS, EDUCATION } from "@/app/data";
import Section from "./Section";

const Education = () => {
  return (
    <Section
      id="education"
      icon={GraduationCap}
      title="Education & Certifications"
    >
      <div className="rounded-2xl border p-5">
        <div className="font-medium">{EDUCATION.degree}</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          {EDUCATION.school} · {EDUCATION.cgpa}
        </div>
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
  );
};

export default Education;
