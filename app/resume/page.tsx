import MaxWidthContainer from "@/components/MaxWidthContainer";
import dynamic from "next/dynamic";
const Resume = dynamic(() => import("@/components/Resume"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Page = () => {
  return (
    <MaxWidthContainer className="text-center">
      <Resume />
    </MaxWidthContainer>
  );
};

export default Page;
