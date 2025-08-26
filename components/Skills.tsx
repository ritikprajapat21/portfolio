import { Wrench } from "lucide-react";
import { SKILLS } from "@/app/data";
import Pill from "./Pill";
import Section from "./Section";

const Skills = () => {
  return (
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
  );
};

export default Skills;
