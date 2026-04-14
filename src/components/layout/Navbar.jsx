import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/portfolioData.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* 🔥 Logo */}
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide"
        >
          SAIRAM .T<span className="text-white"></span>
        </a>

        {/* 💻 Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-gray-300 hover:text-white transition-all duration-300 group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* 🚀 Button */}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* 📱 Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-5 space-y-4 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-white text-base transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-medium"
          >
            Hire Me 🚀
          </a>
        </div>
      )}
    </nav>
  );
}