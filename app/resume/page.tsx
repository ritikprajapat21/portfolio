import * as motion from "framer-motion/client";
import Image from "next/image";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import dynamic from "next/dynamic";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";
const Resume = dynamic(() => import("@/components/Resume"), {
  loading: () => (
    <Image src="pre.svg" alt="Loading..." height={100} width={100} />
  ),
});

const Page = () => {
  return (
    <MaxWidthContainer className="text-center">
      <motion.div initial={{ opacity: 0, x: "-50%" }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, type: "spring", damping: 10, stiffness: 100 }} className="w-full grid grid-rows-[50px_1fr] place-items-center gap-4">
        <a
          href="https://drive.google.com/file/d/1axu9esY396e3kQDl8amUmJTn-NOiYp6R/view"
          target="_blank"
        >
          <Button className="w-fit flex items-center justify-center gap-2">
            <ArrowDownToLine />
            Download Resume
          </Button>
        </a>
        <div className="w-full h-full">
          <Resume />
        </div>
      </motion.div>
    </MaxWidthContainer>
  );
};

export default Page;
