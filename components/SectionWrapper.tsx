"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className={`py-20 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6">{children}</div>
    </motion.section>
  );
}
