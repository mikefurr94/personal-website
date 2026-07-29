"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { caseStudies } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudies() {
  return (
    <SectionWrapper id="case-studies">
      <h2 className="mb-4 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
        Case Studies
      </h2>
      <p className="mb-12 max-w-2xl text-sm leading-relaxed text-secondary">
        A closer look at specific problems I&apos;ve diagnosed and solved, in
        Situation / Task / Action / Result form.
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {caseStudies.map((study) => (
          <motion.div key={study.title} variants={fadeUp}>
            <CaseStudyCard study={study} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
