import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";
import { GitHubIcon } from "../ui/BrandIcons";
import { projects } from "../../data/projects";
import Badge from "../ui/Badge";

// Import screenshots from assets
import studiosyncImg from "../../assets/studiosync.png";
import githubfinderImg from "../../assets/githubfinder.png";
import yogastudioImg from "../../assets/yogastudio.png";

const projectImages = {
  studiosync: studiosyncImg,
  "github-finder": githubfinderImg,
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
  const [activeTab, setActiveTab] = useState("problem");
  const isStudioSync = project.id === "studiosync";

  const tabs = [
    { id: "problem", label: "The Problem" },
    { id: "architecture", label: "Architecture" },
    { id: "challenges", label: "Key Challenge" },
    { id: "learned", label: "Outcome" },
  ];

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      {/* Mockup Column - Left or Right */}
      <motion.div 
        className={`lg:col-span-7 ${isOdd ? "lg:order-2" : ""}`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <BrowserMockup title={project.demo.replace(/^https?:\/\//, "")} demoUrl={project.demo}>
          <div className="bg-slate-100 aspect-video relative overflow-hidden group select-none cursor-pointer">
            {screenshot ? (
              <img 
                src={screenshot} 
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
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
      </motion.div>

      {/* Content Column */}
      <motion.div 
        className={`lg:col-span-5 flex flex-col justify-center ${isOdd ? "lg:order-1" : ""}`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="accent">Case Study</Badge>
          <span className="text-label text-text-muted mt-1">·</span>
          <span className="text-label text-text-muted mt-1 font-mono">{project.stack[0]} + {project.stack[3] || "Vercel"}</span>
        </div>

        <h3 className="text-heading-2 text-text-primary mb-2 tracking-tight font-bold">
          {project.title}
        </h3>
        <p className="text-body text-text-secondary mb-6 leading-relaxed">
          {project.tagline}
        </p>

        {/* Case Study Details */}
        {isStudioSync ? (
          <div className="mb-6">
            <div className="flex border-b border-slate-200/60 mb-4 gap-1">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative pb-2 px-3 text-[11px] font-bold uppercase tracking-wider transition-colors duration-200 ${
                      isActive ? "text-accent" : "text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <motion.div
                        layoutId={`active-tab-${project.id}`}
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content Panel with fixed height window */}
            <div className="min-h-[110px] sm:min-h-[90px] lg:min-h-[120px] flex items-start">
              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-small text-text-secondary leading-relaxed"
              >
                {project[activeTab]}
              </motion.p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 mb-6 min-h-[110px] sm:min-h-[90px] lg:min-h-[120px]">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent mb-1">
                The Problem
              </h4>
              <p className="text-small text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary mb-1">
                Technical Focus
              </h4>
              <p className="text-small text-text-secondary leading-relaxed">
                {project.technicalInterest}
              </p>
            </div>
          </div>
        )}

        {/* Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-4.5 text-xs font-semibold"
          >
            <ExternalLink size={13} /> Live System
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary py-2 px-4.5 text-xs font-semibold"
          >
            <GitHubIcon size={13} /> View Repository
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
          <p className="section-label">Selected Projects</p>
          <h2 className="text-heading-1 text-text-primary mb-4 tracking-tight font-bold">
            Case studies in software craftsmanship.
          </h2>
          <p className="text-body text-text-secondary">
            Each system is designed to solve a clear structural problem, built with strict attention to performance, relational constraints, and predictable APIs.
          </p>
        </motion.div>

        {/* Project Vertical Layout */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
