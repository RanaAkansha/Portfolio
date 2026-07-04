import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TimelineItem from './TimelineItem';
import LessonCard from './LessonCard';

export default function Timeline({ items }) {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  const handleKey = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActive(idx);
    }
    if (e.key === 'ArrowDown') setActive((s) => Math.min(s + 1, items.length - 1));
    if (e.key === 'ArrowUp') setActive((s) => Math.max(s - 1, 0));
  };

  return (
    <section aria-label="What Building Taught Me" className="py-12">
      <div className="container-max">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <p className="section-label mb-3">What Building Taught Me</p>
            <h2 className="text-heading-1 text-text-primary mb-4 tracking-tight font-bold">A timeline of how each project changed how I build.</h2>
            <p className="text-body text-text-secondary">Every project taught me something I wasn't expecting. These lessons continue to shape how I approach software today.</p>
          </div>

          <div>
            <div className="flex flex-col gap-6 lg:flex-row">
              <nav className="lg:w-[40%]" aria-label="Timeline">
                <ul className="flex flex-col gap-3" ref={containerRef}>
                  {items.map((it, idx) => (
                    <li key={it.id}>
                      <div
                        tabIndex={0}
                        onKeyDown={(e) => handleKey(e, idx)}
                      >
                        <TimelineItem
                          title={it.title}
                          active={idx === active}
                          index={idx}
                          isLast={idx === items.length - 1}
                          onClick={() => setActive(idx)}
                          ariaControls={`lesson-${it.id}`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="lg:w-[60%]">
                <AnimatePresence mode="wait">
                  <motion.div key={items[active].id} layout>
                    <div id={`lesson-${items[active].id}`}>
                      <LessonCard item={items[active]} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
