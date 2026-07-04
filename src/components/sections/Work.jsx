import { motion } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";
import { GitHubIcon } from "../ui/BrandIcons";
import { projects } from "../../data/projects";
import Badge from "../ui/Badge";

// Import screenshots from assets
import studiosyncImg from "../../assets/studiosync.png";
import consultationImg from "../../assets/consultation_manager.png";

const projectImages = {
  studiosync: studiosyncImg,
  "pure-lifestyle-yoga": consultationImg,
};

function ProjectCard({ project, idx }) {
  const screenshot = projectImages[project.id];
  const isOdd = idx % 2 !== 0;

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start py-16 border-b border-slate-100 last:border-0 dark:border-slate-800">
      {/* Screenshot Column - Left or Right */}
      <motion.div 
        className={`lg:col-span-6 ${isOdd ? "lg:order-2" : ""}`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block group">
          <div className="rounded-2xl border border-slate-200/50 overflow-hidden shadow-md hover:shadow-lg hover:border-slate-350 transition-all duration-500 bg-white aspect-[16/10] relative select-none cursor-pointer">
            {screenshot ? (
              <img 
                src={screenshot} 
                alt={`${project.title} screenshot`}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                <Terminal size={40} className="text-slate-400" />
              </div>
            )}
            {/* Soft tint on hover */}
            <div className="absolute inset-0 bg-accent/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </a>
      </motion.div>

      {/* Content Column */}
      <motion.div 
        className={`lg:col-span-6 flex flex-col ${isOdd ? "lg:order-1" : ""}`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="text-heading-2 text-text-primary tracking-tight font-bold mb-3">
          {project.title}
        </h3>
        <p className="text-body-lg text-text-primary font-medium mb-6 leading-snug">
          {project.positioning}
        </p>

        {/* Buttons - Moved directly below subtitle */}
        <div className="flex flex-wrap items-center gap-3.5 mb-10">
          {/* Primary */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-5 text-xs font-semibold"
          >
            <ExternalLink size={13} /> Live Demo
          </a>
          {/* Secondary */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary py-2 px-5 text-xs font-semibold"
          >
            <GitHubIcon size={13} /> GitHub
          </a>
          {/* Outline */}
          <a
            href={project.github + "#readme"}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent/30 text-accent hover:bg-accent/5 hover:border-accent/60 transition-all py-2 px-5 text-xs font-semibold rounded-lg inline-flex items-center gap-2 active:scale-[0.98]"
          >
            Case Study
          </a>
        </div>

        {/* Business Problem & Solution */}
        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-rose-500 mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              Business Problem
            </h4>
            <p className="text-small text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Solution
            </h4>
            <p className="text-small text-text-secondary leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-10">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-4">
            Key Product Features
          </h4>
          <ul className="grid grid-cols-2 gap-y-2.5 gap-x-6 text-small text-text-secondary">
            {project.features.map((feat, fidx) => (
              <li key={fidx} className="flex items-center gap-2">
                <span className="text-accent text-xs">✓</span> {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture */}
        <div className="mb-10 bg-slate-50/50 dark:bg-slate-900/30 p-5 rounded-xl border border-slate-200/40 dark:border-slate-800/85">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-4">
            System Architecture
          </h4>
          <div className="flex flex-col items-start gap-1 text-xs font-mono text-text-secondary">
            {project.architecture.map((node, nidx) => (
              <div key={nidx} className="flex flex-col items-start gap-1">
                <span className="bg-white dark:bg-slate-800 px-3.5 py-1.5 rounded-lg border border-slate-200/50 shadow-sm text-text-primary font-semibold">
                  {node}
                </span>
                {nidx < project.architecture.length - 1 && (
                  <span className="text-accent font-bold pl-5 py-0.5 text-xs select-none">↓</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-10">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Engineering Challenge */}
        <div className="border-l-2 border-accent/25 pl-4 py-0.5">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2">
            Engineering Challenge
          </h4>
          <p className="text-small text-text-secondary leading-relaxed">
            {project.challenges}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="projects" className="section-padding border-t border-border bg-slate-50/30 relative overflow-hidden">
      {/* Background decoration glow */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="section-label">Selected Work</p>
          <h2 className="text-heading-1 text-text-primary mb-4 tracking-tight font-bold">
            Featured Products
          </h2>
          <p className="text-body text-text-secondary">
            Systems designed to solve clear business needs, built with strict attention to performance, relational integrity, and product usability.
          </p>
        </motion.div>

        {/* Project Vertical Layout */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
