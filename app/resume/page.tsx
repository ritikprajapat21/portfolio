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
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <Button className="w-fit flex items-center justify-center gap-2">
          <ArrowDownToLine />
          Download Resume
        </Button>
        <Resume />
      </div>
    </MaxWidthContainer>
  );
};

export default Page;
