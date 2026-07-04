import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/BrandIcons";
import ProfileImage from "../ui/ProfileImage";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-[82vh] flex flex-col justify-center pt-28 pb-16 md:pt-32"
    >
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl grid items-start gap-8 md:grid-cols-2"
        >
          <div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6 leading-[1.1] text-balance"
            >
              Building software <br className="hidden md:inline" />
              that solves real problems.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-body-lg text-text-secondary max-w-2xl mb-10 leading-relaxed font-sans"
            >
              I'm Akansha, a developer who designs software from first principles. I focus on database performance, modular component architecture, and writing about how complex systems work under the hood.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5"
            >
              <button
                onClick={scrollToProjects}
                className="btn-primary group shadow-lg shadow-accent/15 hover:shadow-accent/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                id="hero-view-projects"
              >
                Explore Projects
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>

              <a
                href="/resume.pdf"
                download="Akansha_Rana_Resume.pdf"
                className="btn-secondary hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] active:scale-[0.98] transition-all"
                id="hero-resume"
              >
                <FileText size={15} />
                Download Resume
              </a>

              <div className="w-px h-6 bg-border mx-2 hidden sm:block" />

              <a
                href="https://github.com/RanaAkansha"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-text-secondary hover:text-text-primary hover:bg-slate-100/50"
                id="hero-github"
              >
                <GitHubIcon size={15} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/akansha-rana"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-text-secondary hover:text-text-primary hover:bg-slate-100/50"
                id="hero-linkedin"
              >
                <LinkedInIcon size={15} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Profile image — keeps text as primary focus on mobile (image stacks below) */}
          <div className="hidden md:flex md:justify-end">
            <ProfileImage className="" size="lg" shape="circle" />
          </div>
        </motion.div>

        {/* Mobile profile image (centered below text) */}
        <div className="mt-8 md:hidden">
          <ProfileImage />
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 cursor-pointer select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.4 }}
          onClick={scrollToProjects}
        >
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest hover:text-accent transition-colors duration-200">
            Explore Work
          </span>
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce"
          />
        </motion.div>
      </div>
    </section>
  );
}
