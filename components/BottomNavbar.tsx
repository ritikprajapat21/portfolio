"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const BottomNavbar = () => {
  const bottomNavbarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom 90%",
        scrub: true,
      },
    });

    timeline.from(".appear", {
      width: 0,
      opacity: 0,
      duration: 0.5,
    });

    timeline.to(
      ".will-fade",
      {
        width: 0,
        opacity: 0,
        scale: 0,
        duration: 0.2,
      },
      "-=0.4",
    );
  }, []);

  return (
    <div
      ref={bottomNavbarRef}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-fit rounded-3xl px-4 z-50 backdrop-blur border-b border-neutral-200/60 dark:border-neutral-800/60 bg-white/60 dark:bg-black/40"
    >
      <div className="max-w-fit px-2 h-14 flex items-center justify-center">
        <nav className="hidden md:flex items-center gap-5 text-sm">
          <a href="#summary" className="hover:opacity-70 appear">
            About
          </a>
          <a href="#skills" className="hover:opacity-70 appear">
            Skills
          </a>
          <ArrowDown className="will-fade absolute left-1/2 -translate-x-1/2 -z-10" />
          <a href="#projects" className="hover:opacity-70 appear">
            Projects
          </a>
          <a href="#education" className="hover:opacity-70 appear">
            Education
          </a>
          <a href="#contact" className="hover:opacity-70 appear">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default BottomNavbar;
