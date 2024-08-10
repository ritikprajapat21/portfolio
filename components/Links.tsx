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
        <span
          className={`${className} p-3 rounded-full justify-self-center`}
          key={link.name}
        >
          <Link href={link.href}>
            <link.icon className="w-8 h-8" />
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Links;
