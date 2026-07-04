import { motion } from "framer-motion";
import { tools } from "../../data/tools";

function ToolItem({ name, icon, core }) {
  return (
    <div 
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all duration-200 select-none ${
        core 
          ? "bg-accent/5 text-accent border border-accent/25 shadow-sm font-semibold"
          : "bg-slate-50/50 text-text-secondary border border-slate-250/50 font-normal hover:border-slate-300"
      }`}
    >
      <span className="text-sm leading-none" role="img" aria-label={name}>
        {icon}
      </span>
      <span>{name}</span>
      {core && (
        <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
      )}
    </div>
  );
}

export default function Toolbox() {
  return (
    <section id="toolbox" className="section-padding border-t border-border bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label font-sans">Skills</p>
          <h2 className="text-heading-1 text-text-primary mb-4 max-w-xl font-bold tracking-tight">
            Engineering Toolkit
          </h2>
          <p className="text-body text-text-secondary max-w-xl">
            A comprehensive mapping of technologies, APIs, and tooling structured by how they support production builds.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((group, i) => (
            <motion.div
              key={group.category}
              className="card card-hover p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <h3 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-4 flex items-center justify-between">
                <span>{group.category}</span>
                <span className="text-[9px] font-medium text-text-muted lowercase tracking-normal">
                  {group.items.filter(item => item.core).length} core
                </span>
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((tool) => (
                  <ToolItem key={tool.name} {...tool} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
