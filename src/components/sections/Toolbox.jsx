import { motion } from "framer-motion";
import { tools } from "../../data/tools";

function ToolChip({ name, core }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors duration-150 ${
        core
          ? "bg-accent/8 text-accent border border-accent/18 font-semibold"
          : "bg-surface-hover text-text-secondary border border-border"
      }`}
    >
      {name}
      {core && <span className="w-1 h-1 rounded-full bg-accent opacity-70" aria-hidden="true" />}
    </span>
  );
}

export default function Toolbox() {
  return (
    <section id="toolbox" className="section-padding border-t border-border bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="section-label">Skills</span>
          <h2 className="text-heading-1 text-text-primary mb-3 max-w-xl font-bold tracking-tight">
            Engineering Toolkit
          </h2>
          <p className="text-body text-text-secondary max-w-md">
            Technologies I use in production.{" "}
            <span className="text-accent font-medium">Highlighted</span> = primary stack.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((group, i) => (
            <motion.div
              key={group.category}
              className="card card-hover p-5 flex flex-col gap-3.5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-text-primary uppercase tracking-widest">
                  {group.category}
                </h3>
                <span className="text-[10px] text-text-muted">
                  {group.items.filter((t) => t.core).length} primary
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((tool) => (
                  <ToolChip key={tool.name} name={tool.name} core={tool.core} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
