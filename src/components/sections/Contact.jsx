import { useState } from "react";
import SectionHeading from "../ui/SectionHeading.jsx";

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "sairamtulagapu2001@gmail.com",
    href: "mailto:sairamtulagapu2001@gmail.com",
    icon: "email",
  },
  {
    label: "Phone",
    value: "+91 80969 36290",
    href: "tel:+918096936290",
    icon: "phone",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sairam-bi41",
    href: "https://linkedin.com/in/sairam-bi41",
    icon: "linkedin",
  },
  {
    label: "Location",
    value: "Andhra Pradesh, India",
    href: null,
    icon: "location",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("sairamtulagapu2001@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-b from-[#03060f] via-[#060c1a] to-[#03060f]"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's Work Together"
          subtitle="Open to banking, fintech, and backend engineering opportunities."
        />

        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {/* 🔥 LEFT SIDE */}
          <div className="space-y-5">
            {CONTACT_ITEMS.map((item) => {
              return (
                <a
                  key={item.label}
                  href={item.href || "#"}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative block"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

                  <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">

                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition">
                      ●
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                        {item.label}
                      </p>
                      <p className="text-gray-200 text-sm font-medium truncate group-hover:text-white transition">
                        {item.value}
                      </p>
                    </div>

                    {/* Arrow */}
                    {item.href && (
                      <span className="ml-auto text-gray-500 group-hover:text-blue-400 transition">
                        →
                      </span>
                    )}
                  </div>
                </a>
              );
            })}
          </div>

          {/* 🚀 RIGHT SIDE */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-2xl opacity-30"></div>

            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
              
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
                Ready to collaborate?
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Looking for an Oracle PL/SQL expert, Java backend developer,
                or fintech delivery lead? Let's build secure and scalable systems together.
              </p>

              {/* 💡 Skills */}
              <div className="space-y-3 mb-8">
                {[
                  "Oracle PL/SQL · Backend Logic",
                  "Java · Spring Boot · APIs",
                  "PCI-DSS · Secure Systems",
                  "Banking · Team Leadership",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></span>
                    {item}
                  </div>
                ))}
              </div>

              {/* 🔥 Buttons */}
              <div className="flex flex-col gap-4">
                <button
                  onClick={copyEmail}
                  className="py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  {copied ? "Copied ✓" : "Copy Email"}
                </button>

                <a
                  href="https://linkedin.com/in/sairam-bi41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-blue-500/30 transition text-center"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}