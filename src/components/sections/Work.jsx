import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "../ui/BrandIcons";
import { projects } from "../../data/projects";
import Badge from "../ui/Badge";

import collabdeskImg   from "../../assets/collabdesk.png";
import consultflowImg   from "../../assets/consultflow.png";

const projectImages = {
  collabdesk:  collabdeskImg,
  consultflow: consultflowImg,
};

/* ─── Browser Mockup ─────────────────────────────────────────────────────── */
function BrowserMockup({ title, demoUrl, fallbackImage }) {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    /* Laptop-style outer frame */
    <div 
      className="relative select-none group cursor-ns-resize"
      onClick={() => setIsScrolled(!isScrolled)}
    >
      {/* Screen bezel */}
      <div className="rounded-xl overflow-hidden border border-border/70 shadow-[0_8px_40px_rgba(15,23,42,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)] bg-surface-hover p-1">
        {/* Browser chrome */}
        <div className="rounded-lg overflow-hidden bg-surface flex flex-col" style={{ aspectRatio: "16/10" }}>
          {/* Chrome bar */}
          <div className="bg-surface-hover px-3.5 py-2 flex items-center gap-2.5 border-b border-border flex-shrink-0">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            {/* URL bar */}
            <div className="flex-1 bg-surface rounded-md border border-border/60 px-2.5 py-1 flex items-center justify-between max-w-xs mx-auto">
              <span className="text-[10px] text-text-muted font-mono truncate">
                {title}
              </span>
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-text-muted hover:text-accent transition-colors flex-shrink-0"
                  aria-label="Open in new tab"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={9} />
                </a>
              )}
            </div>
          </div>

          {/* Content area */}
          <div className="flex-1 relative overflow-hidden bg-surface">
            <img
              src={fallbackImage}
              alt={`${title} project preview`}
              className={`w-full h-full object-cover transition-[object-position] duration-[5s] ease-in-out lg:hover:object-bottom ${isScrolled ? 'object-bottom' : 'object-top'}`}
              loading="lazy"
            />
            {/* Hover overlay hint (only shown when hover is possible) */}
            <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none transition-opacity duration-300 flex items-end justify-center pb-2.5 ${isScrolled ? 'opacity-0' : 'opacity-100 lg:group-hover:opacity-0'}`}>
              <span className="bg-slate-950/80 text-white text-[9px] font-semibold px-2 py-0.5 rounded shadow-sm">
                Tap or hover to scroll
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop base — decorative */}
      <div className="h-1.5 bg-gradient-to-b from-border/50 to-border mx-6 rounded-b-sm" aria-hidden="true" />
      <div className="h-0.5 bg-border/40 mx-10 rounded-b" aria-hidden="true" />
    </div>
  );
}

/* ─── Project Card ───────────────────────────────────────────────────────── */
function ProjectCard({ project, idx }) {
  const screenshot = projectImages[project.id];
  const isOdd      = idx % 2 !== 0;
  const num        = String(idx + 1).padStart(2, "0");

  return (
    <article className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start py-14 border-b border-border last:border-0">
      {/* Mockup column — wider: 7 of 12 */}
      <motion.div
        className={`lg:col-span-7 ${isOdd ? "lg:order-2" : ""}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <BrowserMockup
          title={project.demo.replace(/^https?:\/\//, "")}
          demoUrl={project.demo}
          fallbackImage={screenshot}
        />
      </motion.div>

      {/* Content column — 5 of 12 */}
      <motion.div
        className={`lg:col-span-5 flex flex-col ${isOdd ? "lg:order-1" : ""}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Number + year */}
        <div className="flex items-center gap-2.5 mb-3" aria-hidden="true">
          <span className="text-[11px] font-mono text-text-muted">{num}</span>
          <span className="w-4 h-px bg-border" />
          <span className="text-[11px] font-mono text-text-muted">{project.year}</span>
        </div>

        <h3 className="text-heading-2 text-text-primary tracking-tight font-bold mb-1.5">
          {project.title}
        </h3>
        <p className="text-small text-text-secondary mb-5 leading-relaxed">
          {project.tagline}
        </p>

        {/* Action links */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-4 text-xs"
            aria-label={`Live demo of ${project.title} (opens in new tab)`}
          >
            <ExternalLink size={12} aria-hidden="true" /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary py-2 px-4 text-xs"
            aria-label={`Source code for ${project.title} on GitHub (opens in new tab)`}
          >
            <GitHubIcon size={12} /> Source
          </a>
          <a
            href={project.github + "#readme"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost py-2 px-3.5 text-xs"
            aria-label={`README for ${project.title} (opens in new tab)`}
          >
            README ↗
          </a>
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 gap-4 mb-7">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-rose-500 dark:text-rose-400 mb-1.5 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-rose-400" aria-hidden="true" /> Problem
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-500" aria-hidden="true" /> Solution
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Bullets from Resume */}
        {project.bullets && (
          <div className="mb-6">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-2">
              Key Contributions
            </h4>
            <ul className="space-y-2 text-xs text-text-secondary leading-relaxed list-none">
              {project.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Engineering challenge */}
        <div className="border-l-2 border-accent/25 pl-3.5 py-0.5">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1.5">
            Engineering Challenge
          </h4>
          <p className="text-xs text-text-secondary leading-relaxed">{project.challenges}</p>
        </div>
      </motion.div>
    </article>
  );
}

/* ─── Work Section ───────────────────────────────────────────────────────── */
export default function Work() {
  return (
    <section id="projects" className="section-padding border-t border-border bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-14"
        >
          <span className="section-label">Featured Projects</span>
          <h2 className="text-heading-1 text-text-primary mb-3 tracking-tight font-bold">
            Shipped products
          </h2>
          <p className="text-body text-text-secondary">
            Production applications solving real business problems — built for performance and usability.
          </p>
        </motion.div>

        <div className="divide-y divide-border">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
