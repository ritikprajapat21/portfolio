'use client'
import { motion } from "motion/react"
import { useEffect, useState } from "react";

const gradients = [
  "radial-gradient(ellipse at center, rgba(255,200,150,0.25) 0%, transparent 70%)",
  "radial-gradient(ellipse at center, rgba(250,214,145,0.25) 0%, transparent 70%)",
  "radial-gradient(ellipse at center, rgba(237,119,90,0.25) 0%, transparent 70%)",
  "radial-gradient(ellipse at center, rgba(228,0,75,0.20) 0%, transparent 70%)",
];

export default function Background() {
  const [index, setIndex] = useState(0);
  const nextIndex = (index + 1) % gradients.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % gradients.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-h-screen fixed inset-0 -z-10">
      <motion.div
        key={index}
        className="absolute inset-0"
        style={{ background: gradients[index] }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        key={nextIndex}
        className="absolute inset-0"
        style={{ background: gradients[nextIndex] }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </div>

  )
}
