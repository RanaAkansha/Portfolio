import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen } from "lucide-react";
import Timeline from "./Timeline";
import { lessons } from "../../data/lessons";

export default function ThinkingPanel({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.aside
            key="panel"
            className="fixed top-0 right-0 h-full w-full max-w-2xl bg-white z-50 shadow-panel overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="sticky top-0 bg-white border-b border-border px-6 py-5 flex items-center justify-between sm:px-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent-light rounded-lg flex items-center justify-center">
                  <BookOpen size={15} className="text-accent" />
                </div>
                <div>
                  <h2 className="text-small font-semibold text-text-primary">What I’ve Learned</h2>
                  <p className="text-label text-text-muted">A closer look at the lessons behind the work</p>
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

            <div className="px-4 py-6 sm:px-8 sm:py-8">
              <Timeline items={lessons} />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
