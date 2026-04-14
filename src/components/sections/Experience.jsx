import SectionHeading from "../ui/SectionHeading.jsx";
import Badge from "../ui/Badge.jsx";
import { PROJECTS } from "../../data/portfolioData.js";

const COLOR_MAP = {
  blue: "from-blue-500 to-cyan-400",
  cyan: "from-cyan-400 to-teal-400",
  indigo: "from-indigo-400 to-blue-500",
  violet: "from-violet-400 to-purple-500",
  purple: "from-purple-400 to-pink-500",
  emerald: "from-emerald-400 to-green-500",
};

function TimelineItem({ project, isLast }) {
  return (
    <div className="flex gap-6 md:gap-10 group">
      
      {/* 🌈 Timeline Line */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        <div
          className={`w-4 h-4 rounded-full bg-gradient-to-r ${COLOR_MAP[project.color]} shadow-lg group-hover:scale-125 transition`}
        />
        {!isLast && (
          <div className="w-[2px] flex-1 mt-3 bg-gradient-to-b from-white/20 to-transparent" />
        )}
      </div>

      {/* 💎 Card */}
      <div className="relative flex-1 mb-12">
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

        <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
          
          {/* Top */}
          <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
            <div className="flex gap-2 flex-wrap">
              <Badge color={project.color}>{project.bank}</Badge>
              {project.isLead && (
                <span className="px-2 py-1 text-[11px] rounded-md bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold">
                  Lead 🚀
                </span>
              )}
            </div>

            <span className="text-gray-500 text-xs font-mono">
              {project.period}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-white text-lg font-semibold mb-1 group-hover:text-blue-300 transition">
            {project.title}
          </h3>

          <p className="text-gray-500 text-xs font-mono mb-4">
            {project.role}
          </p>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-3 mb-5">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 text-sm text-gray-300"
              >
                <CheckIcon />
                <span className="group-hover:text-white transition">
                  {h}
                </span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 text-gray-300 hover:scale-105 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold mt-0.5">
      ✓
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-gradient-to-b from-[#03060f] via-[#060c1a] to-[#03060f]"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Track Record"
          title="Projects & Experience"
          subtitle="Delivering secure, scalable banking systems with zero downtime and high performance."
        />

        {/* 🏢 Company Card */}
        <div className="flex justify-center mb-16 mt-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 blur-xl"></div>

            <div className="relative flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <div>
                <p className="text-white font-semibold">
                  Yalamanchili Payment and Cards
                </p>
                <p className="text-gray-400 text-xs font-mono mt-0.5">
                  Software Developer · Sep 2022 – Present
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 📊 Timeline */}
        <div>
          {PROJECTS.map((project, index) => (
            <TimelineItem
              key={project.id}
              project={project}
              isLast={index === PROJECTS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}