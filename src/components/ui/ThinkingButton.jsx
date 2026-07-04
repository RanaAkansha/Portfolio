import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function ThinkingButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2 bg-text-primary text-white pl-4 pr-5 py-3 rounded-full shadow-card-hover text-small font-medium"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      aria-label="Open What I’ve Learned panel"
    >
      <BookOpen size={15} />
      What I’ve Learned
    </motion.button>
  );
}
