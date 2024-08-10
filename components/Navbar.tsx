import { ChartLine, FileText, Home, User } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { name: "Home", link: "/", icon: Home },
    { name: "About", link: "about", icon: User },
    { name: "Projects", link: "projects", icon: ChartLine },
    { name: "Resume", link: "resume", icon: FileText },
  ];

  return (
    <nav className="w-fit z-10 -translate-x-1/2 rounded-3xl bg-purple-400/20 backdrop-blur-md p-3 md:px-6">
      <div className="flex flex-row gap-6 vs:gap-4 md:gap-10 items-center justify-center">
        {links.map((link) => {
          return (
            <Link key={link.name} href={link.link}>
              <div className="cursor-pointer flex items-center justify-center gap-1 sm:gap-2 hover:transition-all hover:text-purple-800 hover:duration-400">
                <link.icon className="w-4 h-4 hidden vs:block" />
                <p>{link.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
