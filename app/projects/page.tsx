import MaxWidthContainer from "@/components/MaxWidthContainer";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <section>
      <MaxWidthContainer>
        <div className="text-center">
          <h1>
            My Recent{" "}
            <span className="bg-clip-text font-bold text-transparent bg-gradient-to-t from-purple-900 to-purple-400">
              Works
            </span>
          </h1>
          <h6 className="text-xl pt-2">
            Here are a few projects that I&apos;ve worked on recently
          </h6>
        </div>
        <Projects />
      </MaxWidthContainer>
    </section>
  );
}
