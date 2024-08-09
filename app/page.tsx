import MaxWidthContainer from "@/components/MaxWidthContainer";
import Type from "@/components/Type";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthContainer>
      <div className="w-full flex flex-col sm:flex-row items-center justify-center mx-auto">
        <div className="text-3xl grow">
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
            I'M{" "}
            <span className="font-extrabold text-[#cd5ff8]">
              RITIK PRAJAPAT
            </span>
          </h1>
          <div className="font-extrabold pt-12 text-[#cd5ff8]">
            <Type />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            height={386}
            width={386}
            alt="Home image"
            src="home-main.svg"
            priority={false}
          />
        </div>
      </div>
    </MaxWidthContainer>
  );
}
