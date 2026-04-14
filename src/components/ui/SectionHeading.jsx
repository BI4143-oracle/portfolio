export default function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="text-center mb-16">
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-electric-400 font-semibold font-mono mb-4">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl mb-4 ${
          light ? "text-white" : "text-gradient"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}