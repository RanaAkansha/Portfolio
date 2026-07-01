import { motion } from "framer-motion";

const experiences = [
// TODO: Only add this back once role is confirmed/started, must match resume exactly.
/*
  {
    title: "Full Stack Developer Intern",
    company: "ScholarHat • Remote",
    duration: "July 2026 – Present",
    current: true,
    cards: [
      {
        title: "CURRENT ROLE",
        detail: "Currently contributing to full-stack web application development using React, Node.js, Express.js, and PostgreSQL. Working on building scalable applications while following modern software engineering practices."
      },
      {
        title: "STATUS",
        detail: "Actively working on real-world projects. Responsibilities, technical contributions, and project outcomes will be updated as the internship progresses."
      }
    ]
  },
*/
  {
    title: "UI/UX Design Intern",
    company: "ScholarHat • Remote",
    duration: "June 2025 – August 2025",
    current: false,
    cards: [
      {
        title: "Component Translation",
        detail: "Collaborated closely with cross-functional design and engineering teams to translate high-fidelity Figma files into modular, production-ready React components and responsive live web pages."
      },
      {
        title: "Visual Assets & System Consistency",
        detail: "Designed and delivered over 80 brand-consistent banners, posters, and digital marketing assets utilizing Figma and Canva, maintaining strict design system patterns across all deliverables."
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-slate-100 bg-white">
      <div className="container-max max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">Experience</span>
          <h2 className="text-heading-2 text-text-primary tracking-tight font-bold">
            Experience
          </h2>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative border-l border-slate-200/80 pl-6 ml-1 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[29px] top-[7px] w-2.5 h-2.5 rounded-full transition-transform duration-300 ${exp.current
                ? "bg-accent ring-4 ring-blue-100/80 scale-110"
                : "bg-slate-350 ring-4 ring-slate-100/60"
                }`} />

              {/* Entry Header */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h3 className="text-small font-bold text-text-primary">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-text-muted">
                      {exp.duration}
                    </span>
                    {exp.current && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-blue-50 text-accent border border-blue-100/60 tracking-wider">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-text-secondary mt-0.5 font-medium">
                  {exp.company}
                </p>
              </div>

              {/* Grid of detail cards */}
              <div className="grid sm:grid-cols-2 gap-5">
                {exp.cards.map((card, cardIdx) => (
                  <div
                    key={cardIdx}
                    className={`card card-hover p-5 transition-all duration-300 ${exp.current
                      ? "border-accent/15 bg-accent/[0.008] shadow-[0_2px_8px_rgba(37,99,235,0.01)]"
                      : ""
                      }`}
                  >
                    <h4 className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${exp.current ? "text-accent" : "text-text-primary"
                      }`}>
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
