const VARIANTS = {
  blue:    "bg-blue-500/10 text-blue-300 border-blue-500/25",
  cyan:    "bg-cyan-500/10 text-cyan-300 border-cyan-500/25",
  indigo:  "bg-indigo-500/10 text-indigo-300 border-indigo-500/25",
  violet:  "bg-violet-500/10 text-violet-300 border-violet-500/25",
  purple:  "bg-purple-500/10 text-purple-300 border-purple-500/25",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
  gold:    "bg-amber-500/10 text-amber-300 border-amber-500/25",
  gray:    "bg-white/5 text-gray-400 border-white/10",
};

export default function Badge({ children, color = "gray", className = "" }) {
  return (
    <span
      className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border ${VARIANTS[color]} ${className}`}
    >
      {children}
    </span>
  );
}