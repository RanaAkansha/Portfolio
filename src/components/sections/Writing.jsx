import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Real articles from akansharana.substack.com — "Okay, But How?"
const posts = [
  {
    title: "When computers are perfectly predictable. So how do they generate random numbers?",
    excerpt: "The fake randomness powering every password, every payment, and every secret online.",
    date: "Jun 28, 2026",
    href: "https://akansharana.substack.com/p/when-computers-are-perfectly-predictable",
  },
  {
    title: "How Does Infinite Scroll Work?",
    excerpt: "Intersection Observers, virtualization, and the predictive loading techniques keeping memory footprint low.",
    date: "Jun 27, 2026",
    href: "https://akansharana.substack.com/p/how-does-infinite-scroll-work",
  },
  {
    title: "You closed YouTube. Open it again. It knew exactly where you were. How?",
    excerpt: "Heartbeats, stateless tracking, and client-server sync logic across multiple distinct devices.",
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
      aria-label={`${post.title} (opens in new tab)`}
      className="group flex flex-col sm:flex-row sm:items-start gap-3 py-5 border-b border-border last:border-0 hover:bg-surface-hover -mx-3 px-3 rounded-lg transition-colors duration-150"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <span className="text-[11px] font-mono text-text-muted flex-shrink-0 sm:w-24 pt-px">
        {post.date}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="text-small font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug mb-1">
          {post.title}
        </h3>
        <p className="text-xs text-text-muted leading-relaxed">{post.excerpt}</p>
      </div>
      <ArrowUpRight
        size={14}
        className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 flex-shrink-0 mt-0.5"
        aria-hidden="true"
      />
    </motion.a>
  );
}

export default function Writing() {
  return (
    <section id="writing" className="section-padding border-t border-border bg-surface">
      <div className="container-max max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <span className="section-label">Writing</span>
            <h2 className="text-heading-1 text-text-primary tracking-tight font-bold mb-1.5">
              Okay, But How?
            </h2>
            <p className="text-small text-text-secondary">
              Explaining how real systems work — in plain language.
            </p>
          </div>
          <a
            href="https://akansharana.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-text-secondary hover:text-accent transition-colors flex items-center gap-1 flex-shrink-0 mb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            aria-label="View all posts on Substack (opens in new tab)"
          >
            All posts <ArrowUpRight size={11} aria-hidden="true" />
          </a>
        </motion.div>

        <div>
          {posts.map((post, i) => (
            <PostRow key={i} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
