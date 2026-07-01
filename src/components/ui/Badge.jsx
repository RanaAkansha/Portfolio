export default function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-surface text-text-secondary border border-border",
    accent: "bg-accent-light text-accent border border-accent/20",
    muted: "bg-surface text-text-muted border border-border",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-label font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
