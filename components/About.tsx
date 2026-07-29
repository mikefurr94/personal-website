"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { focusAreas } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-surface-sunken">
      <h2 className="mb-8 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
        About
      </h2>
      <p className="mb-8 max-w-2xl text-lg leading-relaxed text-secondary">
        I&apos;m a product leader at the intersection of artificial intelligence
        and healthcare. With a background in bioengineering from Penn and years
        of hands-on experience shipping AI-powered clinical tools, I focus on
        turning complex technical capabilities into products that clinicians
        actually love using. From 0-1 startups to enterprise platforms, I bring
        a deep understanding of both the technology and the human workflows it
        needs to serve.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {focusAreas.map((area) => (
          <motion.span
            key={area}
            variants={fadeUp}
            className="rounded-full bg-accent-light px-4 py-2 text-sm font-medium text-accent"
          >
            {area}
          </motion.span>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
