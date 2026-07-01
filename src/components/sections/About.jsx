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
            Bridging systems and interfaces.
          </h2>
          <div className="text-body text-text-secondary space-y-6 leading-relaxed max-w-3xl">
            <p>
              I'm Akansha, a final-year IT student who builds full-stack systems end to end — from database schema design to the interface someone actually clicks on. I got into development through a UI/UX design internship, which means I think about systems and interfaces together rather than treating them as separate disciplines; a clean API means nothing if the person using it can't tell what's happening on screen.
            </p>
            <p>
              Outside of project work, I write about how everyday software actually works under the hood — things like how computers generate randomness, or how YouTube knows exactly where you left off. I'm early in my career and still learning quickly, but I'd rather build something real and imperfect than wait until I feel 'ready.'
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
