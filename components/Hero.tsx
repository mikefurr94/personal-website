"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Animated blob */}
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] opacity-[0.15] blur-[2px] md:right-[5%] md:h-[600px] md:w-[600px] dark:opacity-[0.12]">
        <div className="blob h-full w-full bg-gradient-to-br from-accent via-accent/60 to-accent-light" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
          >
            Technical Product Manager
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="mb-6 text-5xl font-bold tracking-tight text-primary md:text-7xl"
          >
            Mike Furr
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-secondary md:text-xl"
          >
            Building AI-powered healthcare products that transform complex
            clinical workflows into simple, human-centered experiences.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-inverse transition-all duration-150 ease-out hover:bg-accent-hover active:scale-[0.98]"
            >
              View my work
            </button>
            <a
              href="https://www.linkedin.com/in/mike-furr/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-primary transition-all duration-150 ease-out hover:border-accent hover:text-accent active:scale-[0.98]"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
