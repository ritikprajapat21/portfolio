import * as motion from "framer-motion/client";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects",
}

export default function Page() {
  return (
    <section>
      <MaxWidthContainer>
        <div className="text-center">
          <motion.h1 initial={{ opacity: 0, y: "50%" }} animate={{ opacity: [0, 1], y: 0 }} transition={{ duration: 0.5, type: "spring", damping: 10, stiffness: 100 }}>
            My Recent{" "}
            <span className="bg-clip-text font-bold text-transparent bg-gradient-to-t from-purple-900 to-purple-400">
              Works
            </span>
          </motion.h1>
          <motion.h6 initial={{ opacity: 0, y: "50%" }} animate={{ opacity: [0, 1], y: 0 }} transition={{ duration: 0.5, type: "spring", damping: 10, stiffness: 100 }} className="text-xl pt-2">
            Here are a few projects that I&apos;ve worked on recently
          </motion.h6>
        </div>
        <Projects />
      </MaxWidthContainer>
    </section>
  );
}
