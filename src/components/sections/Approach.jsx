import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    label: "Observe",
    short: "Watch before you build.",
    detail:
      "I start by watching how people actually work — not how they describe their work. The gap between the two is where the real problem lives.",
  },
  {
    step: "02",
    label: "Research",
    short: "Understand the problem space.",
    detail:
      "I look at what exists, what fails, and why. I talk to people, read competitor reviews, and understand the constraints before touching a code editor.",
  },
  {
    step: "03",
    label: "Design",
    short: "Shape the solution before coding it.",
    detail:
      "A rough Figma flow or whiteboard sketch before writing code saves hours. I try to make mistakes on paper, not in production.",
  },
  {
    step: "04",
    label: "Build",
    short: "Write code with clear intent.",
    detail:
      "By the time I write code, I know what I'm building and why. That clarity shows in the architecture — clean separations, predictable APIs, reusable components.",
  },
  {
    step: "05",
    label: "Improve",
    short: "Ship, learn, iterate.",
    detail:
      "The first version is never the final version. I ship early to learn from real feedback, not imagined requirements.",
  },
];

export default function Approach() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id="approach" className="section-padding border-t border-border">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">How I Work</p>
          <h2 className="text-heading-1 text-text-primary mb-4 max-w-xl">
            Research first. Code second.
          </h2>
          <p className="text-body text-text-secondary max-w-xl mb-16">
            This is how I approach every project I build — from spotting a problem to shipping something real. A process I've developed and believe in, and intend to bring to every team I join.
          </p>
        </motion.div>

        {/* Horizontal step flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-border z-0" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className={`relative z-10 cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
                activeStep === i
                  ? "bg-text-primary border-text-primary shadow-card-hover"
                  : "bg-surface border-border hover:border-accent/40 hover:shadow-card"
              }`}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: activeStep === i ? 0 : -2 }}
            >
              <span
                className={`text-label font-semibold tracking-widest block mb-3 ${
                  activeStep === i ? "text-white/50" : "text-text-muted"
                }`}
              >
                {s.step}
              </span>
              <h3
                className={`text-small font-semibold mb-1 ${
                  activeStep === i ? "text-white" : "text-text-primary"
                }`}
              >
                {s.label}
              </h3>
              <p
                className={`text-label leading-relaxed ${
                  activeStep === i ? "text-white/70" : "text-text-muted"
                }`}
              >
                {s.short}
              </p>

              {/* Expanded detail */}
              <motion.div
                initial={false}
                animate={{
                  height: activeStep === i ? "auto" : 0,
                  opacity: activeStep === i ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="text-label text-white/60 leading-relaxed mt-3 pt-3 border-t border-white/10">
                  {s.detail}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <p className="text-label text-text-muted mt-6 text-center">
          Click any step to expand
        </p>
      </div>
    </section>
  );
}
