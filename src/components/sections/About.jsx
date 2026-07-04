import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-slate-100 bg-white">
      <div className="container-max max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About</span>
          <h2 className="text-heading-2 text-text-primary tracking-tight font-bold mb-6">
            Building software that serves business goals.
          </h2>
          <div className="text-body text-text-secondary space-y-6 leading-relaxed max-w-3xl">
            <p>
              I design and develop applications by focusing on the business problem first. A clean codebase is only valuable if it drives conversion, streamlines operations, or simplifies communication. My background in UI/UX design allows me to translate system constraints into intuitive layouts, bridging the gap between back-end data architecture and front-end usability.
            </p>
            <p>
              Through deep dives into core mechanics—from scheduling concurrency to caching schemes—I prioritize reliability and optimization. I maintain a commitment to continuous learning, documenting how production systems operate under the hood to write cleaner, more intentional code every day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
