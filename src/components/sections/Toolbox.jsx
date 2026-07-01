import { motion } from "framer-motion";
import { tools } from "../../data/tools";

function ToolItem({ name, icon, description }) {
  return (
    <div className="flex flex-col py-2 px-3 rounded-lg hover:bg-slate-50/50 transition-colors duration-150 group">
      <div className="flex items-center gap-2.5">
        <span className="text-base leading-none" role="img" aria-label={name}>
          {icon}
        </span>
        <span className="text-small font-medium text-text-secondary group-hover:text-text-primary transition-colors">
          {name}
        </span>
      </div>
      {description && (
        <span className="text-[10px] text-text-muted mt-0.5 ml-[26px] leading-normal">
          {description}
        </span>
      )}
    </div>
  );
}

export default function Toolbox() {
  return (
    <section id="toolbox" className="section-padding border-t border-border">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Engineering Toolkit</p>
          <h2 className="text-heading-1 text-text-primary mb-4 max-w-xl font-bold">
            My Development Stack
          </h2>
          <p className="text-body text-text-secondary max-w-xl mb-12">
            Organized by how they fit into my workflow — from backend schemas to frontend deployment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((group, i) => (
            <motion.div
              key={group.category}
              className="card card-hover p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-3 px-3">
                {group.category}
              </p>
              <div className="flex flex-col">
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
