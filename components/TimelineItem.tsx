"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";
import type { Experience } from "@/lib/constants";

interface TimelineItemProps {
  experience: Experience;
  isLast?: boolean;
}

export default function TimelineItem({ experience, isLast }: TimelineItemProps) {
  return (
    <motion.div variants={fadeUp} className="flex gap-6">
      <div className="flex flex-col items-center">
        <div
          className={`mt-1.5 h-4 w-4 flex-shrink-0 rounded-full border-2 border-accent ${
            experience.current ? "bg-accent" : "bg-bg"
          }`}
        />
        {!isLast && <div className="mt-1 w-px flex-1 bg-border" />}
      </div>

      <div className={`flex-1 ${isLast ? "" : "pb-10"}`}>
        <p className="mb-1 text-sm font-medium text-accent">
          {experience.dateRange}
        </p>
        <h3 className="mb-1 text-xl font-semibold text-primary">
          {experience.company}
        </h3>
        <p className="mb-3 text-sm text-secondary">{experience.title}</p>
        <ul className="mb-4 space-y-2">
          {experience.description.map((desc, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm leading-relaxed text-secondary"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              {desc}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent-light/60 px-3 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
