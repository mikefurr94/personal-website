"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Project } from "@/lib/constants";

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="cursor-pointer overflow-hidden rounded-lg border border-border bg-surface"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-6 md:p-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">
          {project.company}
        </p>
        <h3 className="mb-3 text-xl font-semibold text-primary">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-secondary">
          {project.summary}
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mb-4 text-sm leading-relaxed text-secondary">
                {project.details}
              </p>
              <h4 className="mb-2 text-sm font-semibold text-primary">
                Key Outcomes
              </h4>
              <ul className="mb-4 space-y-1">
                {project.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent-light/60 px-3 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 text-xs text-tertiary">
          {expanded ? "Click to collapse" : "Click to expand"}
        </p>
      </div>
    </motion.div>
  );
}
