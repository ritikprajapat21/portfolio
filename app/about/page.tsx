import MaxWidthContainer from "@/components/MaxWidthContainer";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <section>
      <MaxWidthContainer>
        <div>
          <h1 className="pb-12 md:pb-16 lg:pb-18 text-center">
            Know Who{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-purple-400">
              I&apos;M
            </span>
          </h1>
          <div className="mx-2 md:mx-12">
            <p className="!leading-normal text-balance text-2xl">
              Hi everyone, I am{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-purple-400">
                Ritik Prajapat
              </span>{" "}
              from Ujjain, India, a final year student. I am currently pursuing
              B.Tech. in Computer Science and Engineering.
              <br />
              Apart from coding, some other activities that I love to do:
            </p>
            <ul className="!leading-normal text-balance text-xl pl-12 list-disc pt-2 lg:pt-4">
              <li>Playing Games</li>
              <li>Reading novel</li>
              <li>Twiching around in Linux</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 md:mt-16">
          <h1 className="text-center font-bold bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-purple-400">
            Skills
          </h1>
          <Skills />
        </div>
      </MaxWidthContainer>
    </section>
  );
}
