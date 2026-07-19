export default function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-slate-100 text-slate-600 border border-slate-200/60",
    accent:  "bg-accent/8 text-accent border border-accent/20",
    muted:   "bg-slate-50 text-text-muted border border-slate-200/50",
    tech:    "bg-slate-100 text-slate-600 border border-slate-200/60 font-mono",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
