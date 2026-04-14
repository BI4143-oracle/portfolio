import SectionHeading from "../ui/SectionHeading.jsx";
import { ABOUT_BULLETS } from "../../data/portfolioData.js";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-[#03060f] via-[#060c1a] to-[#03060f]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Who I Am"
          title="About Me"
          subtitle="Building reliable financial infrastructure — quietly, precisely, and at scale."
        />

        <div className="grid md:grid-cols-2 gap-14 items-start mt-12">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-base">
              With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">
                3+ years inside payment infrastructure
              </span>{" "}
              at Yalamanchili Payment and Cards, I’ve learned that in banking,
              correctness isn’t optional.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm">
              I design backend systems that process{" "}
              <span className="text-white font-medium">
                high-value real-time transactions
              </span>{" "}
              — with security, compliance, and zero-downtime reliability.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm">
              Recently, I stepped into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 font-semibold">
                Team Lead & Delivery Lead
              </span>{" "}
              roles, managing end-to-end project delivery and PCI-DSS compliance.
            </p>

            {/* 🎓 EDUCATION CARD */}
            <div className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-blue-500/10 transition">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-30"></div>

              <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-4 relative">
                Education
              </p>

              <div className="space-y-4 relative">
                <div className="flex justify-between">
                  <div>
                    <p className="text-white font-medium">
                      Master of Computer Applications
                    </p>
                    <p className="text-gray-400 text-xs">
                      Andhra University
                    </p>
                  </div>
                  <span className="text-blue-400 text-xs font-mono">
                    2024–2026
                  </span>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex justify-between">
                  <div>
                    <p className="text-white font-medium">
                      B.Sc. Chemistry
                    </p>
                    <p className="text-gray-400 text-xs">
                      86% · Andhra Pradesh
                    </p>
                  </div>
                  <span className="text-purple-400 text-xs font-mono">
                    2018–2021
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-6">
              Key Strengths
            </p>

            <div className="space-y-5">
              {ABOUT_BULLETS.map((bullet, i) => (
                <div
                  key={i}
                  className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition">
                      <span className="text-blue-400 text-xs font-mono font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition">
                      {bullet}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 🌍 LANGUAGES */}
            <div className="mt-8 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-3">
                Languages
              </p>

              <div className="flex gap-3 flex-wrap">
                {["English", "Telugu", "Hindi"].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-1.5 text-xs rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 text-gray-200 hover:scale-105 transition"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}