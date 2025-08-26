import { Download } from "lucide-react";
import { PROFILE } from "@/app/data";
import ButtonLink from "./ButtonLink";

const Navbar = () => {
  return (
    <header className="z-50 backdrop-blur border-b border-neutral-200/60 dark:border-neutral-800/60 bg-white/60 dark:bg-black/40">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#hero" className="font-semibold">
          {PROFILE.name}
        </a>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          <a href="#summary" className="hover:opacity-70">
            About
          </a>
          <a href="#skills" className="hover:opacity-70">
            Skills
          </a>
          <a href="#projects" className="hover:opacity-70">
            Projects
          </a>
          <a href="#education" className="hover:opacity-70">
            Education
          </a>
          <a href="#contact" className="hover:opacity-70">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href={PROFILE.resumeUrl} icon={Download}>
            Resume
          </ButtonLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
