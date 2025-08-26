import { Sparkles } from "lucide-react";
import { PROFILE } from "@/app/data";
import Section from "./Section";

const Summary = () => {
  return (
    <Section id="summary" icon={Sparkles} title="Professional Summary">
      <p className="max-w-3xl text-neutral-700 dark:text-neutral-300">
        {PROFILE.summary}
      </p>
    </Section>
  );
};

export default Summary;
