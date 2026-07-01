import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Real articles from akansharana.substack.com — "Okay, But How?"
const posts = [
  {
    title: "When computers are perfectly predictable. So how do they generate random numbers?",
    excerpt:
      "The fake randomness powering every password, every payment, and every secret online.",
    date: "Jun 28, 2026",
    href: "https://akansharana.substack.com/p/when-computers-are-perfectly-predictable",
  },
  {
    title: "How Does Infinite Scroll Work?",
    excerpt:
      "Intersection Observers, virtualization, and the predictive loading techniques keeping memory footprint low.",
    date: "Jun 27, 2026",
    href: "https://akansharana.substack.com/p/how-does-infinite-scroll-work",
  },
  {
    title: "You closed YouTube. Open it again. It knew exactly where you were. How?",
    excerpt:
      "Heartbeats, stateless tracking, and client-server sync logic across multiple distinct devices.",
    date: "Jun 27, 2026",
    href: "https://akansharana.substack.com/p/you-closed-youtube-opened-it-on-your",
  },
];

function PostRow({ post, index }) {
  return (
    <motion.a
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-4 border-b border-slate-100 hover:border-slate-300 transition-colors"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <div className="flex-1 pr-8">
        <h4 className="text-small font-semibold text-text-primary group-hover:text-accent transition-colors">
          {post.title}
        </h4>
        <p className="text-xs text-text-muted mt-1 leading-relaxed max-w-2xl">
          {post.excerpt}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-2 sm:mt-0 flex-shrink-0 select-none">
        <span className="text-xs font-mono text-text-muted">{post.date}</span>
        <ArrowUpRight
          size={12}
          className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </div>
    </motion.a>
  );
}

export default function Writing() {
  return (
    <section id="writing" className="py-20 border-t border-border bg-slate-50/20">
      <div className="container-max max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-baseline justify-between mb-8"
        >
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
              Writing
            </span>
            <h3 className="text-heading-2 text-text-primary tracking-tight">
              Okay, But How?
            </h3>
          </div>
          <a
            href="https://akansharana.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            Substack ↗
          </a>
        </motion.div>

        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {posts.map((post, i) => (
            <PostRow key={i} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
