"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

// const gradients = [
//   "radial-gradient(ellipse at center, rgba(255,200,150,0.25) 0%, transparent 50%)",
//   "radial-gradient(ellipse at center, rgba(250,214,145,0.25) 0%, transparent 50%)",
//   "radial-gradient(ellipse at center, rgba(237,119,90,0.25) 0%, transparent 50%)",
//   "radial-gradient(ellipse at center, rgba(228,0,75,0.20) 0%, transparent 50%)",
// ];

export default function Background() {
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const updateGradient = (e: MouseEvent) => {
      if (!bgRef.current) return;

      // Get mouse % relative to viewport
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      // Animate gradient center smoothly
      gsap.to(bgRef.current, {
        backgroundImage: `radial-gradient(circle at ${x}% ${y}%, rgba(237,119,90,0.25) 0%, transparent 20%)`,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", updateGradient);

    return () => window.removeEventListener("mousemove", updateGradient);
  }, []);

  return (
    <div
      ref={bgRef}
      className="w-full max-h-screen fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at center, rgba(255,200,150,0.25) 0%, transparent 70%)",
      }}
    />
  );
}
