import MaxWidthContainer from "./MaxWidthContainer";

const Resume = () => {
  return (
    <MaxWidthContainer>
      <object
        type="application/pdf"
        data="Ritik_Prajapat_Resume.pdf"
        width="100%"
        className="min-h-screen"
      >
        <p>
          Error:{" "}
          <a
            className="text-purple-900 underline hover:text-purple-400"
            href="https://drive.google.com/file/d/1axu9esY396e3kQDl8amUmJTn-NOiYp6R/view"
          >
            Click Here
          </a>{" "}
          for resume
        </p>
      </object>
    </MaxWidthContainer>
  );
};

export default Resume;
