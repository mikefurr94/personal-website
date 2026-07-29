"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { education } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="mb-12 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
        Education
      </h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2"
      >
        {education.map((edu) => (
          <motion.div
            key={edu.school}
            variants={fadeUp}
            className="rounded-lg border border-border bg-surface p-6 md:p-8"
          >
            <h3 className="mb-1 text-xl font-semibold text-primary">
              {edu.school}
            </h3>
            <p className="mb-1 text-sm font-medium text-accent">
              {edu.degree}
            </p>
            <p className="mb-4 text-sm text-tertiary">{edu.dateRange}</p>
            <ul className="space-y-2">
              {edu.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
