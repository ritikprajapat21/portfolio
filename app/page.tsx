import * as motion from "framer-motion/client";
import Image from "next/image";
import Links from "@/components/Links";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import Tilt from "@/components/Tilt";
import Type from "@/components/Type";

export default function Home() {
  return (
    <MaxWidthContainer className="lg:pt-28">
      <motion.div initial={{ opacity: 0, x: "-50%" }} animate={{ opacity: [0, 1], x: 0 }} transition={{ duration: 0.5, type: "spring", damping: 10, stiffness: 80 }} className="!leading-tight text-balance grid grid-flow-row auto-rows-min gap-y-6 sm:grid-cols-2 pb-12 md:pb-20">
        <div>
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
            <span className="font-bold bg-gradient-to-t text-transparent bg-clip-text from-purple-900 to-purple-400">
              RITIK PRAJAPAT
            </span>
          </h1>
          <div className="font-bold pt-12 bg-gradient-to-t text-transparent bg-clip-text from-purple-900 to-purple-400">
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
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: "spring", damping: 10, stiffness: 100 }} className="text-pretty !leading-tight pb-16 md:mb-20 lg:mb-24">
        <div>
          <h1 className="text-center">
            LET ME{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-purple-400">
              INTRODUCE
            </span>{" "}
            MYSELF
          </h1>
          <div className="mt-12 md:mt-16 lg:mt-20 text-3xl leading-tight grid grid-flow-row auto-rows-min gap-x-6 md:gap-y-6 sm:grid-flow-col sm:auto-cols-auto">
            <p className="text-2xl">
              I am a tech enthusiast and a lifelong learner, always eager to
              explore new techologies and improve my skills.
              <br /> <br />I am fluent with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-purple-400">
                JavaScript and Python.
              </span>
              <br />
              <br />
              My field of interest are building{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-purple-400">
                Web technologies and products
              </span>{" "}
              and also interested in learning more about{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-purple-400">
                Blockchain.
              </span>{" "}
              Also like to know more interesting stuff about{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-purple-400">
                Linux.
              </span>
              <br />
              <br />I also like to apply my passion for developing products with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-purple-400">
                Node.js, Python
              </span>{" "}
              and{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-purple-400">
                Modern JavaScript Library and Framework
              </span>{" "}
              like{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-purple-400">
                React.js and Next.js.
              </span>
            </p>
            <Tilt>
              <Image
                src="avatar.svg"
                alt="Avatar"
                width={368}
                height={368}
                className="-z-10 w-60 h-60 md:w-full md:h-full"
              />
            </Tilt>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: "50%" }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, type: "spring", damping: 10, stiffness: 100 }} className="flex flex-col gap-4 justify-center">
        <div className="text-center pb-3">
          <h1 className="uppercase">Find me on</h1>
          <p className="text-2xl">
            Feel free to{" "}
            <span className=" bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-purple-400">
              connect
            </span>{" "}
            with me
          </p>
        </div>
        <div>
          <Links className="bg-gradient-to-tl from-blue-600 via-purple-600 to-indigo-600" />
        </div>
      </motion.div>
    </MaxWidthContainer>
  );
}
