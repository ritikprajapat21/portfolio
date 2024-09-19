import Links from "./Links";
import * as motion from "framer-motion/client";

const Footer = () => {
  return (
    <motion.div initial={{ opacity: 0, y: "50%" }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, type: "spring", damping: 10, stiffness: 100 }} className="flex justify-between items-center bg-purple-400/20 backdrop-blur-md p-2 md:px-6">
      <div className="leading-loose text-balance">
        <p>Designed by Ritik Prajapat</p>
        <p>Copyright &copy; {new Date().getFullYear()} RP</p>
      </div>
      <Links />
    </motion.div>
  );
};

export default Footer;
