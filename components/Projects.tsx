"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { projects } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-surface-sunken">
      <h2 className="mb-12 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
        Projects
      </h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={fadeUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
