import { motion } from 'framer-motion';

export default function LessonCard({ item }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
    >
      <div className="prose-sm text-text-primary mb-4">
        <h4 className="text-small font-semibold mb-2">Expectation</h4>
        <p className="text-text-secondary">{item.expectation}</p>
      </div>

      <div className="prose-sm text-text-primary mb-4">
        <h4 className="text-small font-semibold mb-2">Reality</h4>
        <p className="text-text-secondary">{item.reality}</p>
      </div>

      <div className="prose-sm text-text-primary mb-4">
        <h4 className="text-small font-semibold mb-2">Lesson</h4>
        <p className="text-text-secondary">{item.lesson}</p>
      </div>

      <div className="prose-sm text-text-primary">
        <h4 className="text-small font-semibold mb-2">How It Changed My Approach</h4>
        <p className="text-text-secondary">{item.change}</p>
      </div>
    </motion.div>
  );
}
