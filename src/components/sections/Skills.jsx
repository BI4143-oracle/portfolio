import SectionHeading from "../ui/SectionHeading.jsx";
import { SKILL_GROUPS } from "../../data/portfolioData.js";

const COLOR_MAP = {
  blue: {
    bar: "bg-gradient-to-r from-blue-400 to-cyan-400",
    glow: "shadow-blue-500/20",
    icon: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
  },
  cyan: {
    bar: "bg-gradient-to-r from-cyan-400 to-teal-400",
    glow: "shadow-cyan-500/20",
    icon: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/10",
  },
  gold: {
    bar: "bg-gradient-to-r from-amber-400 to-yellow-400",
    glow: "shadow-amber-500/20",
    icon: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/10",
  },
  violet: {
    bar: "bg-gradient-to-r from-violet-400 to-purple-500",
    glow: "shadow-violet-500/20",
    icon: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/10",
  },
};

function SkillBar({ name, level, color }) {
  const c = COLOR_MAP[color];

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm group-hover:text-white transition">
          {name}
        </span>
        <span className="text-gray-500 text-xs font-mono">
          {level}%
        </span>
      </div>

      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full ${c.bar} rounded-full shadow-md ${c.glow} transition-all duration-700`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function SkillGroup({ group }) {
  const c = COLOR_MAP[group.color];

  return (
    <div className="relative group">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div
        className={`relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border ${c.border} hover:shadow-xl ${c.glow} transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center ${c.icon} group-hover:scale-110 transition`}
          >
            {group.icon}
          </div>

          <h3 className="text-white font-semibold text-sm tracking-wide">
            {group.category}
          </h3>
        </div>

        {/* Skills */}
        <div className="space-y-5">
          {group.skills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              color={group.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-b from-[#03060f] via-[#060c1a] to-[#03060f]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills & Expertise"
          subtitle="Backend engineering excellence powered by Oracle, Java, and secure financial systems."
        />

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {SKILL_GROUPS.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>

        {/* 🔧 Tools Section */}
        <div className="mt-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-xl opacity-30"></div>

          <div className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10">
            <p className="text-gray-500 text-xs uppercase tracking-widest font-mono mb-5 text-center">
              Tools & Platforms
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "IntelliJ IDEA", "Eclipse", "VS Code", "Postman",
                "SonarQube", "Jasper Reports", "Git",
                "Linux", "Ubuntu", "Windows",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-1.5 text-xs rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 text-gray-300 hover:text-white hover:scale-105 transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}