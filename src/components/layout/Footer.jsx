export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-[#03060f] via-[#060c1a] to-[#03060f] border-t border-white/10 py-12 px-6">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-2xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* 🔥 Left - Branding */}
        <div className="text-center md:text-left">
          <p className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            SAIRAM .T
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Banking Systems Engineer · India 🇮🇳
          </p>
        </div>

        {/* 🌐 Center - Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm">

          <a
            href="mailto:sairamtulagapu2001@gmail.com"
            className="relative text-gray-400 hover:text-white transition duration-300 group"
          >
            Email
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="https://linkedin.com/in/sairam-bi41"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-gray-400 hover:text-white transition duration-300 group"
          >
            LinkedIn
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="tel:+918096936290"
            className="relative text-gray-400 hover:text-white transition duration-300 group"
          >
            Call
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

        </div>

        {/* 📅 Right - Copyright */}
        <div className="text-center md:text-right">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} All rights reserved
          </p>
          </div>
      </div>
    </footer>
  );
}