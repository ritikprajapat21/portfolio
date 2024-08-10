import MaxWidthContainer from "@/components/MaxWidthContainer";
import Type from "@/components/Type";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthContainer className="lg:pt-28">
      <div className="!leading-tight text-balance grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
        <div className="h-fit">
          <h1 className="pb-4">
            Hi There!&nbsp;
            <span
              className="animate-wave inline-block"
              role="img"
              aria-labelledby="wave"
            >
              👋🏻
            </span>
          </h1>
          <h1>
            I&apos;M{" "}
            <span className="font-extrabold bg-gradient-to-t text-transparent bg-clip-text from-purple-900 to-purple-400">
              RITIK PRAJAPAT
            </span>
          </h1>
          <div className="font-extrabold pt-12 bg-gradient-to-t text-transparent bg-clip-text from-purple-900 to-purple-400">
            <Type />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            height={386}
            width={386}
            alt="Home image"
            src="home-main.svg"
            className="h-full w-full"
            priority={false}
          />
        </div>
      </div>
    </MaxWidthContainer>
  );
}
