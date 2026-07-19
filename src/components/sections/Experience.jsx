import { motion } from "framer-motion";

const experiences = [
  {
    title: "Junior Web Developer",
    company: "AptechUK",
    type: "Remote",
    duration: "Jul 2026 – Present",
    current: true,
    bullets: [
      "Built responsive, client-facing web applications using React, JavaScript, and Tailwind CSS.",
      "Developed and deployed backend services with Node.js, Express, and PostgreSQL on Vercel and Neon.",
      "Debugged and shipped feature improvements across live client projects, supporting website optimization."
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "ScholarHat",
    type: "Remote",
    duration: "May 2026 – Jul 2026",
    current: false,
    bullets: [
      "Built full-stack features end-to-end using React on the front end and Node.js/Express on the back end.",
      "Collaborated with senior engineers to design and integrate REST APIs with production databases.",
      "Contributed to code reviews and agile sprints, delivering scalable, maintainable code."
    ],
  },
  {
    title: "UI/UX Design Intern",
    company: "ScholarHat",
    type: "Remote",
    duration: "Jun 2025 – Aug 2025",
    current: false,
    bullets: [
      "Designed and delivered 80+ marketing assets while maintaining consistent, on-brand visuals.",
      "Translated Figma designs into responsive React interfaces for production-ready web pages.",
      "Collaborated with designers and developers to improve UI consistency and development handoff."
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

              {/* Detail card */}
              <div
                className={`card p-5 ${
                  exp.current
                    ? "border-accent/10 bg-accent/[0.02]"
                    : ""
                }`}
              >
                <ul className="space-y-2.5 text-xs text-text-secondary leading-relaxed">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
