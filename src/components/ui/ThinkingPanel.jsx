import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen } from "lucide-react";
import { thinkingPrinciples } from "../../data/tools";

export default function ThinkingPanel({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.aside
            key="panel"
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-white z-50 shadow-panel overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Panel header */}
            <div className="sticky top-0 bg-white border-b border-border px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent-light rounded-lg flex items-center justify-center">
                  <BookOpen size={15} className="text-accent" />
                </div>
                <div>
                  <h2 className="text-small font-semibold text-text-primary">How I Think</h2>
                  <p className="text-label text-text-muted">Engineering notebook</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg hover:bg-surface flex items-center justify-center transition-colors text-text-muted hover:text-text-primary"
                aria-label="Close panel"
              >
                <X size={16} />
              </button>
            </div>

            {/* Panel content */}
            <div className="px-8 py-8">
              <p className="text-body text-text-secondary mb-10 leading-relaxed">
                These are the questions I ask before, during, and after building anything. They keep me honest about why I'm writing the code I'm writing.
              </p>

              <div className="flex flex-col gap-8">
                {thinkingPrinciples.map((item, i) => (
                  <motion.div
                    key={i}
                    className="border-l-2 border-accent/20 pl-5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
                  >
                    <h3 className="text-small font-semibold text-text-primary mb-2 leading-snug">
                      {item.question}
                    </h3>
                    <p className="text-small text-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-small text-text-muted italic">
                  "The most important skill in software isn't writing code. It's knowing when not to."
                </p>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
