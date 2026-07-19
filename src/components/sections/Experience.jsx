import { motion } from "framer-motion";

const experiences = [
  {
    title: "Junior Web Developer",
    company: "AptechUK",
    type: "On-site",
    duration: "July 2026 – Present",
    current: true,
    cards: [
      {
        title: "Web Development",
        detail:
          "Developing and maintaining web pages and UI components as part of a professional engineering team. Translating design specifications into semantic, responsive HTML, CSS, and JavaScript across multiple client projects.",
      },
      {
        title: "Collaboration & Delivery",
        detail:
          "Working alongside senior developers to ship client-facing features on schedule. Following Git version control workflows and contributing to quality assurance through testing and code reviews.",
      },
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "ScholarHat",
    type: "Remote",
    duration: "May 2026 – July 2026",
    current: false,
    cards: [
      {
        title: "Full Stack Development",
        detail:
          "Built and maintained full-stack features using React, Node.js, Express.js, and PostgreSQL. Wrote modular React components, designed RESTful API endpoints, and participated in code review cycles.",
      },
      {
        title: "Engineering Practices",
        detail:
          "Contributed to a production codebase following modern software engineering practices, including component-driven UI architecture, RESTful API design, and collaborative development workflows.",
      },
    ],
  },
  {
    title: "UI/UX Design Intern",
    company: "ScholarHat",
    type: "Remote",
    duration: "June 2025 – August 2025",
    current: false,
    cards: [
      {
        title: "Component Translation",
        detail:
          "Translated high-fidelity Figma designs into modular, production-ready React components and responsive web pages, ensuring pixel-accurate implementation of the design system.",
      },
      {
        title: "Design System & Assets",
        detail:
          "Designed and delivered over 80 brand-consistent marketing assets using Figma and Canva, maintaining design system consistency across a high-volume EdTech platform.",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-border bg-surface">
      <div className="container-max max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label">Experience</span>
          <h2 className="text-heading-1 text-text-primary tracking-tight font-bold">
            Where I've worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-border pl-7 ml-1 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
            >
              {/* Timeline dot */}
              <div
                aria-hidden="true"
                className={`absolute -left-[30px] top-1.5 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                  exp.current
                    ? "bg-accent border-accent shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
                    : "bg-surface border-border"
                }`}
              />

              {/* Header */}
              <div className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-small font-semibold text-text-primary">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[11px] font-mono text-text-muted">{exp.duration}</span>
                    {exp.current && (
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-accent/8 text-accent border border-accent/15 tracking-wider"
                        aria-label="Current position"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                        Current
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-text-muted font-medium">
                  {exp.company}
                  <span className="mx-1.5 text-border" aria-hidden="true">·</span>
                  {exp.type}
                </p>
              </div>

              {/* Detail cards */}
              <div className="grid sm:grid-cols-2 gap-3">
                {exp.cards.map((card, cardIdx) => (
                  <div
                    key={cardIdx}
                    className={`card p-4 ${
                      exp.current
                        ? "border-accent/10 bg-accent/[0.02]"
                        : ""
                    }`}
                  >
                    <h4
                      className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${
                        exp.current ? "text-accent" : "text-text-muted"
                      }`}
                    >
                      {card.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {card.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
