import * as motion from "framer-motion/client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Links = ({ className }: { className?: string }) => {
  const links = [
    {
      name: "Github",
      icon: Github,
      href: "https://github.com/ritikprajapat21",
    },
    { name: "Twitter", icon: Twitter, href: "https://x.com/RitikPrajapat02" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ritik-prajapat/",
    },
  ];

  return (
    <div className="flex items-center justify-evenly">
      {links.map((link) => (
        <motion.span
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={`${className} p-3 rounded-full justify-self-center`}
          key={link.name}
        >
          <Link href={link.href} target="_blank">
            <link.icon className="w-8 h-8" />
          </Link>
        </motion.span>
      ))}
    </div>
  );
};

export default Links;
