import { motion } from "framer-motion";

const stats = [
  { value: "2",   label: "Shipped products"  },
  { value: "3+",  label: "Articles written"   },
  { value: "2",   label: "Roles held"         },
];

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-border bg-surface">
      <div className="container-max max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="section-label">About</span>
          <h2 className="text-heading-1 text-text-primary tracking-tight font-bold max-w-2xl">
            CS student. Full Stack Developer.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_200px] gap-10 items-start">
          {/* Prose */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.07 }}
            className="text-body text-text-secondary space-y-4 leading-relaxed max-w-2xl"
          >
            <p>
              I'm Akansha Rana — a Computer Science student currently working as a Junior Web
              Developer at{" "}
              <strong className="text-text-primary font-semibold">AptechUK</strong>. I build
              full-stack web applications using React, Node.js, Express, and PostgreSQL, and
              write about engineering on Substack.
            </p>
            <p>
              I approach every project by understanding the business problem first. My background
              in UI/UX design helps me bridge the gap between data architecture and usable
              interfaces — translating system constraints into experiences people actually want
              to use.
            </p>
            <p>
              I write a newsletter called{" "}
              <a
                href="https://akansharana.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover font-medium transition-colors underline underline-offset-2"
                aria-label="Okay, But How? Substack newsletter (opens in new tab)"
              >
                Okay, But How?
              </a>{" "}
              — explaining how real systems work under the hood.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="flex flex-row lg:flex-col gap-3"
          >
            {stats.map((stat, i) => (
              <div key={i} className="card p-4 flex flex-col gap-0.5 flex-1 lg:flex-none">
                <span className="text-xl font-bold text-text-primary tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[11px] text-text-muted font-medium leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
