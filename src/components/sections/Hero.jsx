import { useEffect, useState } from "react";
import { ROLES, STATS, CORE_STACK } from "../../data/portfolioData.js";
import MyPhoto from "../../assets/Myphoto.jpeg";

/* ---------------- GRID BACKGROUND ---------------- */
function GridBackground() {
  return (
    <div
      className="absolute inset-0 opacity-[0.02] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(to right,#38bdf8 1px,transparent 1px),linear-gradient(to bottom,#38bdf8 1px,transparent 1px)",
        backgroundSize: "52px 52px",
      }}
    />
  );
}

/* ---------------- GLOW ORBS ---------------- */
function GlowOrbs() {
  return (
    <>
      <div className="absolute top-1/3 left-1/4 w-[520px] h-[520px] bg-cyan-500/20 rounded-full blur-[140px] opacity-40" />
      <div className="absolute bottom-1/4 right-1/5 w-[420px] h-[420px] bg-indigo-500/20 rounded-full blur-[120px] opacity-40" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-emerald-400/20 rounded-full blur-[100px] opacity-30" />
    </>
  );
}

/* ---------------- TYPEWRITER ---------------- */
function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <div className="h-8 flex items-center">
      <span className="font-mono text-lg text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
        {displayed}
        <span className="animate-blink ml-1">|</span>
      </span>
    </div>
  );
}

/* ---------------- STAT CARD ---------------- */
function StatCard({ value, label }) {
  return (
    <div
      className="relative rounded-xl p-4 text-center 
      bg-gradient-to-b from-white/10 to-white/5 
      backdrop-blur-xl 
      border border-white/10 
      hover:border-cyan-400/40 
      hover:shadow-lg hover:shadow-cyan-500/20 
      transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-30"></div>

      <p className="text-2xl font-bold text-white relative">{value}</p>
      <p className="text-gray-400 text-xs mt-1 relative">{label}</p>
    </div>
  );
}

/* ---------------- HERO ---------------- */
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden 
      bg-[radial-gradient(circle_at_top,_#0b1220,_#03060f_60%)]"
    >
      <GridBackground />
      <GlowOrbs />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT */}
          <div className="flex-1">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Open to Opportunities
            </div>

            {/* Name */}
            <h1 className="text-6xl md:text-7xl font-display mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent">
              Sai Ram .T
            </h1>

            {/* Typewriter */}
            <div className="mb-6">
              <Typewriter />
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg max-w-lg mb-6">
              Engineering secure banking systems with 
              <span className="text-white font-semibold"> Oracle PL/SQL</span>, 
              Java & Spring Boot.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mb-10">
              <a
                href="#experience"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 
                text-white rounded-xl font-semibold 
                shadow-lg shadow-cyan-500/20 
                hover:scale-105 hover:shadow-cyan-400/40 
                transition"
              >
                🚀 View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-cyan-400 text-cyan-300 rounded-xl hover:bg-cyan-400/10 transition"
              >
                💬 Contact
              </a>

               {/* NEW: Download Resume */}
              <a
                href="/Sairam_Developer_Role.pdf"
                download
                className="px-6 py-3 rounded-xl 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                text-white font-semibold 
                shadow-lg shadow-purple-500/20
                hover:scale-105 hover:shadow-pink-400/40 
                transition flex items-center gap-2"
              >
                ⬇️ Download Resume
              </a>

            </div>

            {/* Contact */}
            <div className="text-gray-500 text-sm space-y-1">
              <p>📧 sairamtulagapu2001@gmail.com</p>
              <p>📞 +91 8096936290</p>
              <p>📍 Andhra Pradesh, India</p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative w-[320px] rounded-2xl p-6 
          bg-gradient-to-b from-white/10 to-white/5 
          backdrop-blur-2xl 
          border border-white/10 
          shadow-[0_8px_40px_rgba(0,0,0,0.45)] 
          hover:shadow-cyan-500/20 
          transition-all duration-300">

            {/* Glow Layer */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-40"></div>

            {/* PROFILE IMAGE */}
            <div className="flex flex-col items-center text-center mb-6 relative">
              <div className="relative w-24 h-24 mb-3">
                <img
                  src={MyPhoto}
                  alt="Sai Ram"
                  className="w-full h-full object-cover rounded-full border border-white/10 shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 to-blue-500/30 blur-md opacity-50"></div>
              </div>

              <p className="text-white font-semibold text-lg">Sai Ram</p>
              <p className="text-gray-400 text-sm">Software Developer</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6 relative">
              {STATS.map((s) => (
                <StatCard key={s.label} value={s.value} label={s.label} />
              ))}
            </div>

            {/* Skills */}
            <div className="relative">
              <p className="text-gray-500 text-xs mb-2">Core Stack</p>
              {CORE_STACK.map((tech) => (
                <p key={tech} className="text-gray-300 text-sm">
                  • {tech}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}