import { motion } from "framer-motion";
import { ShieldCheck, Database, Link, Lock, GitBranch, Layers } from "lucide-react";
import { decisions } from "../../data/decisions";

const iconMap = {
  ShieldCheck,
  Database,
  Link,
  Lock,
  GitBranch,
  Layers,
};

export default function Decisions() {
  return (
    <section id="decisions" className="section-padding border-t border-border bg-surface/40">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Engineering Decisions</p>
          <h2 className="text-heading-1 text-text-primary mb-4 max-w-xl font-bold">
            The "why" behind the code.
          </h2>
          <p className="text-body text-text-secondary max-w-xl mb-12">
            Good engineering isn't just working code — it's code with reasons. These are the decisions I've made and the trade-offs I understood before making them.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {decisions.map((d, i) => {
            const Icon = iconMap[d.icon];
            return (
              <motion.div
                key={d.id}
                className="card card-hover p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="w-9 h-9 rounded-xl bg-accent-light flex items-center justify-center mb-4">
                  {Icon && <Icon size={16} className="text-accent" />}
                </div>
                <h3 className="text-small font-bold text-text-primary mb-2 leading-snug">
                  {d.question}
                </h3>
                <p className="text-small text-text-secondary leading-relaxed">
                  {d.answer}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
