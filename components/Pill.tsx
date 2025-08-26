"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Pill = ({ children }: { children: React.ReactNode }) => {
  const spanRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(spanRef.current, {
        scrollTrigger: {
          trigger: spanRef.current,
          start: "top 80%",
        },
        xPercent: -100,
        opacity: 0,
        duration: 0.2,
      });
    },
    { scope: spanRef },
  );

  return (
    <span
      ref={spanRef}
      className="inline-flex items-center rounded-full border px-3 py-1 text-sm leading-6"
    >
      {children}
    </span>
  );
};

export default Pill;
