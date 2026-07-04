import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function TimelineItem({
  title,
  active,
  onClick,
  isLast,
  ariaControls
}) {
  return (
    <div className="relative flex items-start gap-3">
      <button
        onClick={onClick}
        aria-expanded={active}
        aria-controls={ariaControls}
        className={`group flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all duration-300 focus:outline-none ${active ? 'border-accent/40 bg-accent/5 shadow-sm' : 'border-transparent bg-transparent hover:border-border hover:bg-surface-hover'}`}
      >
        <span className="flex flex-col items-center">
          <motion.span
            layout
            className={`relative z-10 h-2.5 w-2.5 rounded-full ${active ? 'bg-accent' : 'bg-border'}`}
            aria-hidden
          />
          {!isLast && <span className="mt-2 h-8 w-px bg-border" aria-hidden />}
        </span>
        <span className={`flex-1 text-sm font-medium transition-colors ${active ? 'text-text-primary' : 'text-text-secondary'}`}>
          {title}
        </span>
        <motion.span
          animate={{ rotate: active ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className={`text-text-muted ${active ? 'text-accent' : ''}`}
        >
          <ChevronRight size={14} />
        </motion.span>
      </button>
    </div>
  );
}
