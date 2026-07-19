import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/BrandIcons";
import ProfileImage from "../ui/ProfileImage";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="min-h-[85vh] flex flex-col justify-center pt-28 pb-16 md:pt-32"
    >
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl grid items-center gap-10 md:grid-cols-[1fr_auto]"
        >
          {/* Text column */}
          <div className="max-w-xl">
            {/* Availability pill — single source of truth */}
            <motion.div variants={itemVariants} className="mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-accent/8 text-accent border border-accent/15">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                Full Stack Developer · Open to roles
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-text-primary mb-4 leading-[1.1] text-balance"
            >
              Building software
              <br className="hidden sm:inline" />
              that solves real problems.
            </motion.h1>

            {/* Subheadline — concise */}
            <motion.p
              variants={itemVariants}
              className="text-body text-text-secondary max-w-lg mb-8 leading-relaxed"
            >
              Full Stack Developer building production-ready web applications with React, Node.js, Express, and PostgreSQL. Experienced across the stack — from REST API design to responsive UI implementation — with a product-focused mindset shaped by a UI/UX design background and two platforms shipped end-to-end.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-10">
              <button
                onClick={scrollToProjects}
                className="btn-primary group"
                id="hero-view-projects"
              >
                View Projects
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true" />
              </button>

              <a
                href="/resume.pdf"
                download="Akansha_Rana_Resume.pdf"
                className="btn-secondary"
                id="hero-resume"
                aria-label="Download resume as PDF"
              >
                <FileText size={14} aria-hidden="true" />
                Resume
              </a>

              <div className="w-px h-5 bg-border mx-1 hidden sm:block" aria-hidden="true" />

              <a
                href="https://github.com/RanaAkansha"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                id="hero-github"
                aria-label="GitHub profile (opens in new tab)"
              >
                <GitHubIcon size={14} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/akansha-rana"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                id="hero-linkedin"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <LinkedInIcon size={14} />
                LinkedIn
              </a>
            </motion.div>

            {/* Quick facts strip */}
            <motion.div
              variants={itemVariants}
              className="pt-5 border-t border-border flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-text-muted"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
                <span className="font-semibold text-text-primary">2 shipped products</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-border" aria-hidden="true" />
                AptechUK · Junior Web Developer (Remote)
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[11px]">
                <span className="w-1 h-1 rounded-full bg-border" aria-hidden="true" />
                React · Node.js · Express · PostgreSQL
              </span>
            </motion.div>
          </div>

          {/* Profile image — 25% larger on desktop */}
          <div className="hidden md:flex md:justify-end md:items-center">
            <ProfileImage size="xl" shape="circle" />
          </div>
        </motion.div>

        {/* Mobile profile */}
        <div className="mt-10 md:hidden">
          <ProfileImage size="md" shape="circle" />
        </div>
      </div>
    </section>
  );
}
