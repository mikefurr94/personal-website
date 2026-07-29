"use client";

import { motion } from "motion/react";
import { staggerContainer } from "@/lib/animations";
import { experiences } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";
import TimelineItem from "./TimelineItem";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="mb-16 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
        Experience
      </h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {experiences.map((exp, i) => (
          <TimelineItem
            key={exp.company}
            experience={exp}
            isLast={i === experiences.length - 1}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
