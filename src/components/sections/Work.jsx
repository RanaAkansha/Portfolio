import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "../ui/BrandIcons";
import { projects } from "../../data/projects";
import Badge from "../ui/Badge";

import studiosyncImg    from "../../assets/studiosync.png";
import consultationImg  from "../../assets/consultation_manager.png";

const projectImages = {
  studiosync:              studiosyncImg,
  "pure-lifestyle-yoga":   consultationImg,
};

/* ─── Browser Mockup ─────────────────────────────────────────────────────── */
function BrowserMockup({ title, demoUrl, fallbackImage }) {
  const [loading, setLoading]             = useState(true);
  const [hasError, setHasError]           = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isInViewport, setIsInViewport]   = useState(false);
  const iframeRef    = useRef(null);
  const containerRef = useRef(null);

  // Lazy-load via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsInViewport(true); observer.disconnect(); }
      },
      { rootMargin: "300px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Fallback timeout
  useEffect(() => {
    if (!isInViewport) return;
    const timer = setTimeout(() => {
      if (loading) { setHasError(true); setLoading(false); }
    }, 9000);
    return () => clearTimeout(timer);
  }, [isInViewport, loading]);

  return (
    /* Laptop-style outer frame */
    <div ref={containerRef} className="relative select-none">
      {/* Screen bezel */}
      <div className="rounded-xl overflow-hidden border border-slate-200/70 dark:border-slate-700/60 shadow-[0_8px_40px_rgba(15,23,42,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)] bg-slate-100 dark:bg-slate-900 p-1">
        {/* Browser chrome */}
        <div className="rounded-lg overflow-hidden bg-white dark:bg-slate-800 flex flex-col" style={{ aspectRatio: "16/10" }}>
          {/* Chrome bar */}
          <div className="bg-slate-50 dark:bg-slate-700 px-3.5 py-2 flex items-center gap-2.5 border-b border-slate-200/60 dark:border-slate-600/60 flex-shrink-0">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            {/* URL bar */}
            <div className="flex-1 bg-white dark:bg-slate-600 rounded-md border border-slate-200/60 dark:border-slate-500/40 px-2.5 py-1 flex items-center justify-between max-w-xs mx-auto">
              <span className="text-[10px] text-slate-400 dark:text-slate-300 font-mono truncate">
                {title}
              </span>
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-slate-400 hover:text-accent transition-colors flex-shrink-0"
                  aria-label="Open in new tab"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={9} />
                </a>
              )}
            </div>
          </div>

          {/* Content area */}
          <div className="flex-1 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
            {hasError ? (
              <img
                src={fallbackImage}
                alt={`${title} project preview`}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <>
                {/* Skeleton */}
                {loading && (
                  <div className="absolute inset-0 z-20 flex flex-col bg-white dark:bg-slate-800 animate-pulse">
                    <div className="h-12 bg-slate-100 dark:bg-slate-700 border-b border-slate-100 dark:border-slate-600 px-5 flex items-center justify-between">
                      <div className="w-20 h-3 bg-slate-200 dark:bg-slate-600 rounded" />
                      <div className="flex gap-2">
                        <div className="w-14 h-6 bg-slate-200 dark:bg-slate-600 rounded" />
                        <div className="w-14 h-6 bg-slate-200 dark:bg-slate-600 rounded" />
                      </div>
                    </div>
                    <div className="flex-1 p-5 space-y-4">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-20 bg-slate-100 dark:bg-slate-700 rounded col-span-2" />
                        <div className="h-20 bg-slate-100 dark:bg-slate-700 rounded" />
                      </div>
                      <div className="h-28 bg-slate-100 dark:bg-slate-700 rounded w-full" />
                      <div className="grid grid-cols-4 gap-3">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="h-10 bg-slate-100 dark:bg-slate-700 rounded" />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Live iframe */}
                {isInViewport && (
                  <iframe
                    ref={iframeRef}
                    src={demoUrl}
                    title={`Live preview of ${title}`}
                    onLoad={() => setLoading(false)}
                    onError={() => { setHasError(true); setLoading(false); }}
                    loading="lazy"
                    className={`w-full h-full border-none transition-opacity duration-300 ${
                      loading ? "opacity-0" : "opacity-100"
                    } ${isInteracting ? "pointer-events-auto" : "pointer-events-none"}`}
                  />
                )}

                {/* Interaction overlay */}
                {!loading && !isInteracting && (
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label="Click to interact with live preview"
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group z-10"
                    onClick={() => setIsInteracting(true)}
                    onKeyDown={(e) => e.key === "Enter" && setIsInteracting(true)}
                  >
                    <span className="bg-slate-900/85 dark:bg-slate-950/90 text-white text-xs font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg scale-95 group-hover:scale-100 pointer-events-none">
                      Click to interact
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Laptop base — decorative */}
      <div className="h-1.5 bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 mx-6 rounded-b-sm" aria-hidden="true" />
      <div className="h-0.5 bg-slate-400/40 dark:bg-slate-600/40 mx-10 rounded-b" aria-hidden="true" />
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
