import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/BrandIcons";

export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="container-max">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Contact</p>
            <h2 className="text-heading-1 text-text-primary mb-4">
              Let's talk
            </h2>
            <p className="text-body text-text-secondary mb-10 max-w-lg leading-relaxed">
              I'm currently looking for full-stack developer roles and internships. If you're working on something interesting, or just want to talk through a project, reach out.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Email CTA Button */}
            <a
              href="mailto:akansharana0620@gmail.com"
              className="btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 mb-10 shadow-sm hover:shadow-md transition-all duration-300 font-semibold"
              id="contact-email"
            >
              <Mail size={16} />
              akansharana0620@gmail.com
            </a>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/RanaAkansha"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="contact-github"
              >
                <GitHubIcon size={15} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/akansha-rana"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="contact-linkedin"
              >
                <LinkedInIcon size={15} />
                LinkedIn
              </a>
              <a
                href="https://akansharana.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="contact-substack"
              >
                Writing ↗
              </a>
              <a
                href="/resume.pdf"
                download="Akansha_Rana_Resume.pdf"
                className="btn-secondary"
                id="contact-resume"
              >
                <FileText size={15} />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
