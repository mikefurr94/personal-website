"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";
import type { Experience } from "@/lib/constants";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeUp}
      className="relative grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-8"
    >
      {/* Left side (content for even, empty for odd) */}
      <div
        className={`${
          isEven ? "md:text-right" : "md:order-3"
        } hidden md:block`}
      >
        {isEven && <TimelineContent experience={experience} align="right" />}
        {!isEven && <TimelineContent experience={experience} align="left" />}
      </div>

      {/* Center line + dot */}
      <div className="relative flex flex-col items-center">
        <div
          className={`h-4 w-4 rounded-full border-2 border-accent ${
            experience.current ? "bg-accent" : "bg-bg"
          }`}
        />
        <div className="w-px flex-1 bg-border" />
      </div>

      {/* Right side (empty for even, content for odd) */}
      <div className={`${isEven ? "md:order-3" : ""} hidden md:block`}>
        {isEven && <div />}
        {!isEven && <div />}
      </div>

      {/* Mobile layout (always shows) */}
      <div className="col-span-1 -mt-3 ml-2 md:hidden">
        <TimelineContent experience={experience} align="left" />
      </div>
    </motion.div>
  );
}

function TimelineContent({
  experience,
  align,
}: {
  experience: Experience;
  align: "left" | "right";
}) {
  return (
    <div className={`pb-10 ${align === "right" ? "md:pr-4" : "md:pl-4"}`}>
      <p className="mb-1 text-sm font-medium text-accent">
        {experience.dateRange}
      </p>
      <h3 className="mb-1 text-xl font-semibold text-primary">
        {experience.company}
      </h3>
      <p className="mb-3 text-sm text-secondary">{experience.title}</p>
      <ul className={`mb-4 space-y-2 ${align === "right" ? "md:ml-auto" : ""}`}>
        {experience.description.map((desc, i) => (
          <li
            key={i}
            className={`text-sm leading-relaxed text-secondary ${
              align === "right" ? "md:text-right" : ""
            }`}
          >
            {desc}
          </li>
        ))}
      </ul>
      <div
        className={`flex flex-wrap gap-2 ${
          align === "right" ? "md:justify-end" : ""
        }`}
      >
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
  );
}
