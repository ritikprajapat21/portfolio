import MaxWidthContainer from "@/components/MaxWidthContainer";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
const Resume = dynamic(() => import("@/components/Resume"), {
  loading: () => (
    <Image src="pre.svg" alt="Loading..." height={100} width={100} />
  ),
});

const Page = () => {
  return (
    <MaxWidthContainer className="text-center">
      <div className="w-full grid grid-rows-[50px_1fr] place-items-center gap-4">
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
      </div>
    </MaxWidthContainer>
  );
};

export default Page;
