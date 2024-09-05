import Links from "./Links";

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-purple-400/20 backdrop-blur-md p-2 md:px-6">
      <div className="leading-loose text-balance">
        <p>Designed by Ritik Prajapat</p>
        <p>Copyright &copy; {new Date().getFullYear()} RP</p>
      </div>
      <Links />
    </div>
  );
};

export default Footer;
