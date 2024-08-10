const Resume = () => {
  return (
    <div className="w-full h-full">
      <object
        type="application/pdf"
        data="Ritik_Prajapat_Resume.pdf"
        width="100%"
        className="min-h-screen"
      >
        <p className="text-3xl md:text-4xl lg:text-5xl">
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
    </div>
  );
};

export default Resume;
