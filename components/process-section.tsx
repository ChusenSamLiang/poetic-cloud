"use client"

import { motion } from "framer-motion"
import { PROCESS_CONTENT } from "@/lib/constants"

export function ProcessSection() {
  return (
    <section id="process" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm uppercase tracking-[0.2em] text-primary">
            {PROCESS_CONTENT.badge}
          </span>
          <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
            {PROCESS_CONTENT.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {PROCESS_CONTENT.description}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {PROCESS_CONTENT.steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Connector Line */}
              {index < PROCESS_CONTENT.steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-border md:block" aria-hidden="true" />
              )}

              <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
                <step.icon className="h-10 w-10 text-primary" strokeWidth={1.5} aria-hidden="true" />
              </div>

              <span className="mb-2 block font-serif text-sm text-primary">
                Step {step.id}
              </span>
              <h3 className="font-serif text-xl tracking-wide text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
