import { motion } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";
import { GitHubIcon } from "../ui/BrandIcons";
import { projects } from "../../data/projects";
import Badge from "../ui/Badge";

// Import screenshots from assets
import studiosyncImg from "../../assets/studiosync.png";
import yogastudioImg from "../../assets/yogastudio.png";

const projectImages = {
  studiosync: studiosyncImg,
  "pure-lifestyle-yoga": yogastudioImg,
};

function BrowserMockup({ children, title, demoUrl }) {
  return (
    <div className="rounded-2xl border border-slate-200/50 overflow-hidden shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-500 bg-white">
      {/* Browser bar */}
      <div className="bg-slate-50 px-4 py-2.5 flex items-center gap-3 border-b border-slate-100 select-none">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
        </div>
        <div className="flex-1 bg-white rounded-md border border-slate-200/50 px-3 py-0.5 flex items-center justify-between max-w-sm mx-auto shadow-sm">
          <span className="text-[10px] text-slate-400 font-mono tracking-tight truncate select-all">{title}</span>
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-350 hover:text-accent transition-colors"
            >
              <ExternalLink size={10} />
            </a>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

function ProjectCard({ project, idx }) {
  const screenshot = projectImages[project.id];
  const isOdd = idx % 2 !== 0;

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start py-12 border-b border-slate-100 last:border-0 dark:border-slate-800">
      {/* Mockup Column - Left or Right */}
      <motion.div 
        className={`lg:col-span-6 ${isOdd ? "lg:order-2" : ""}`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block group">
          <BrowserMockup title={project.demo.replace(/^https?:\/\//, "")} demoUrl={project.demo}>
            <div className="bg-slate-100 aspect-[16/10] relative overflow-hidden select-none cursor-pointer">
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
          </BrowserMockup>
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
        <span className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2">
          Featured Product Case Study
        </span>
        <h3 className="text-heading-2 text-text-primary tracking-tight font-bold mb-1">
          {project.title}
        </h3>
        <p className="text-body-lg text-text-primary font-medium mb-6 leading-snug">
          {project.positioning}
        </p>

        {/* Business Problem & Solution */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-rose-500 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              Business Problem
            </h4>
            <p className="text-small text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Solution
            </h4>
            <p className="text-small text-text-secondary leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2.5">
            Key Product Features
          </h4>
          <ul className="grid grid-cols-2 gap-y-1.5 gap-x-4 text-small text-text-secondary">
            {project.features.map((feat, fidx) => (
              <li key={fidx} className="flex items-center gap-2">
                <span className="text-accent text-xs">✓</span> {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture */}
        <div className="mb-6 bg-slate-50/50 dark:bg-slate-900/30 p-3 rounded-lg border border-slate-200/40 dark:border-slate-800/80">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2">
            System Architecture
          </h4>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-text-secondary">
            {project.architecture.map((node, nidx) => (
              <span key={nidx} className="flex items-center gap-2">
                <span className="bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200/50 shadow-sm text-text-primary">
                  {node}
                </span>
                {nidx < project.architecture.length - 1 && (
                  <span className="text-text-muted font-bold">→</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Engineering Challenge */}
        <div className="mb-8 border-l-2 border-accent/20 pl-4 py-0.5">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent mb-1">
            Engineering Challenge
          </h4>
          <p className="text-small text-text-secondary leading-relaxed">
            {project.challenges}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mt-auto">
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
