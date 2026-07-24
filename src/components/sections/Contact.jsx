import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/BrandIcons";

export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-border bg-background">
      <div className="container-max">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Contact</span>
            <h2 className="text-heading-1 text-text-primary mb-3 tracking-tight font-bold">
              Let's work together
            </h2>
            <p className="text-body text-text-secondary mb-8 leading-relaxed">
              Actively looking for my next opportunity. If you're working on something interesting, let's connect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col gap-5"
          >
            {/* Primary CTA */}
            <a
              href="mailto:akansharana0620@gmail.com"
              className="btn-primary self-start items-center gap-2.5 px-6 py-3.5 font-semibold"
              id="contact-email"
              aria-label="Send an email to Akansha"
            >
              <Mail size={15} aria-hidden="true" />
              akansharana0620@gmail.com
            </a>

            {/* Secondary links */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://github.com/RanaAkansha"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="contact-github"
                aria-label="GitHub profile (opens in new tab)"
              >
                <GitHubIcon size={14} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/akansha-rana"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="contact-linkedin"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <LinkedInIcon size={14} />
                LinkedIn
              </a>
              <a
                href="https://akansharana.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="contact-substack"
                aria-label="Substack newsletter (opens in new tab)"
              >
                Substack ↗
              </a>
              <a
                href="/resume.pdf"
                download="Akansha_Rana_Resume.pdf"
                className="btn-secondary"
                id="contact-resume"
                aria-label="Download resume PDF"
              >
                <FileText size={14} aria-hidden="true" />
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
