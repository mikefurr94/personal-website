"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xplaceholder";
  const [state, handleSubmit] = useForm(formId);

  return (
    <SectionWrapper id="contact" className="bg-surface-sunken">
      <h2 className="mb-4 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
        Get in Touch
      </h2>
      <p className="mb-10 max-w-lg text-lg text-secondary">
        Interested in discussing healthcare AI, product strategy, or potential
        collaboration? I&apos;d love to hear from you.
      </p>

      <div className="grid gap-12 md:grid-cols-[1fr_auto]">
        {state.succeeded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center rounded-lg border border-accent/30 bg-accent-light/40 p-8"
          >
            <p className="text-lg font-medium text-accent">
              Thanks for reaching out! I&apos;ll get back to you soon.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-primary"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full rounded-sm border border-border-strong bg-surface px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Your name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="mt-1 text-xs text-danger"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-primary"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full rounded-sm border border-border-strong bg-surface px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="you@email.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-1 text-xs text-danger"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-primary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-sm border border-border-strong bg-surface px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="What would you like to discuss?"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-1 text-xs text-danger"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-inverse transition-all duration-150 ease-out hover:bg-accent-hover active:scale-[0.98] disabled:opacity-50"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        <div className="flex flex-col items-start gap-4">
          <a
            href="https://www.linkedin.com/in/mike-furr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <p className="text-sm text-tertiary">Philadelphia, PA</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
