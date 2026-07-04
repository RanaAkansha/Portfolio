import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-2 text-small font-medium text-text-secondary transition-all duration-300 hover:border-accent/40 hover:text-text-primary"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
      <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"} mode</span>
    </button>
  );
}
