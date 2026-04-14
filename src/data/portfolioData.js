export const NAV_LINKS = [
  { label: "✨ About", href: "#about" },
  { label: "⚡ Skills", href: "#skills" },
  { label: "🚀 Projects", href: "#experience" },
  { label: "📬 Contact", href: "#contact" },
];

export const STATS = [
  { value: "3+", label: "Years in Fintech 💼" },
  { value: "4+", label: "Banking Systems 🏦" },
  { value: "3", label: "Top Banks 🏆" },
  { value: "2", label: "Leadership Roles 👑" },
];

export const CORE_STACK = [
  "⚙️ Oracle PL/SQL",
  "☕ Java & Spring Boot",
  "🔗 REST / SOAP APIs",
  "🔐 PCI-DSS Compliance",
];

export const ROLES = [
  "💻 Oracle PL/SQL Engineer",
  "🏦 Banking Systems Developer",
  "🚀 Fintech Problem Solver",
  "☕ Java & Spring Boot Developer",
];

export const SKILL_GROUPS = [
  {
    category: "Core Platform",
    icon: "database",
    color: "blue",
    skills: [
      { name: "Oracle SQL", level: 95 },
      { name: "PL/SQL", level: 95 },
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "JavaScript", level: 65 },
    ],
  },
  {
    category: "Integration Layer",
    icon: "api",
    color: "cyan",
    skills: [
      { name: "REST APIs", level: 90 },
      { name: "SOAP APIs", level: 85 },
      { name: "Jasper Reports", level: 78 },
      { name: "HTML / CSS", level: 70 },
    ],
  },
  {
    category: "Security & Compliance",
    icon: "shield",
    color: "gold",
    skills: [
      { name: "PCI-DSS Compliance", level: 88 },
      { name: "Secure Coding", level: 82 },
      { name: "Encryption (AES)", level: 80 },
      { name: "SonarQube", level: 78 },
    ],
  },
  {
    category: "Toolchain & DevOps",
    icon: "tools",
    color: "violet",
    skills: [
      { name: "Git", level: 85 },
      { name: "Linux / Ubuntu", level: 75 },
      { name: "IntelliJ IDEA", level: 88 },
      { name: "Postman", level: 85 },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    bank: "🏦 RBL Bank",
    title: "Forex Travel Cards Platform",
    role: "🚀 Delivery Lead",
    isLead: true,
    period: "2024 – Present",
    color: "blue",
    tags: ["Java", "Spring Boot", "PL/SQL", "REST", "SOAP", "PCI-DSS"],
    description:
      "Leading development of a multi-currency forex card platform powering real-time financial transactions with secure, scalable backend architecture.",
    highlights: [
      "⚡ Built real-time multi-currency transaction engine",
      "🔗 Integrated secure REST & SOAP APIs",
      "🔐 Achieved full PCI-DSS compliance",
      "👨‍💼 Led client delivery & production rollout",
    ],
  },
  {
    id: 2,
    bank: "🏦 Canara Bank",
    title: "Prepaid Gift & Classic Cards",
    role: "👑 Team Lead",
    isLead: true,
    period: "2023 – Present",
    color: "cyan",
    tags: ["PL/SQL", "Java", "Spring Boot", "API"],
    description:
      "Led complete lifecycle of prepaid card solutions including onboarding, issuance, and secure transaction handling.",
    highlights: [
      "💳 Designed card lifecycle management system",
      "🔐 Built secure transaction pipelines",
      "📱 Developed branch & customer portals",
      "⚡ Improved system performance significantly",
    ],
  },
  {
    id: 3,
    bank: "🏦 Canara Bank",
    title: "Forex Card Platform",
    role: "Developer",
    isLead: false,
    period: "2023",
    color: "indigo",
    tags: ["PL/SQL", "Java", "Banking"],
    description:
      "Developed backend logic and portals for prepaid forex card systems handling high-volume financial operations.",
    highlights: [
      "⚙️ Built PL/SQL transaction engine",
      "🌐 Developed full-stack banking portals",
      "🔗 Integrated with core banking systems",
    ],
  },
  {
    id: 4,
    bank: "🏦 Canara Bank",
    title: "TTUM Reconciliation System",
    role: "Developer",
    isLead: false,
    period: "2023",
    color: "violet",
    tags: ["PL/SQL", "Jasper", "Automation"],
    description:
      "Automated financial reconciliation and reporting, reducing manual effort and improving accuracy.",
    highlights: [
      "📊 Automated reconciliation workflows",
      "📑 Built audit-ready reports",
      "⏱ Reduced manual effort by 60%",
    ],
  },
  {
    id: 5,
    bank: "🏦 Axis Bank",
    title: "PAN–Aadhaar Linkage System",
    role: "Developer",
    isLead: false,
    period: "2022 – 2023",
    color: "purple",
    tags: ["PL/SQL", "Encryption", "Compliance"],
    description:
      "Built secure identity linkage system with encryption and strict compliance standards.",
    highlights: [
      "🔐 Implemented AES encryption",
      "⚙️ Designed validation engine",
      "📜 Ensured RBI compliance",
    ],
  },
  {
    id: 6,
    bank: "🏦 Axis & Canara Bank",
    title: "Real-Time Notification System",
    role: "Developer",
    isLead: false,
    period: "2022 – 2023",
    color: "emerald",
    tags: ["PL/SQL", "Triggers", "APIs"],
    description:
      "Developed real-time SMS & Email notification system using event-driven architecture.",
    highlights: [
      "⚡ Built instant alert system using triggers",
      "📩 Integrated SMS & Email APIs",
      "🚀 Reduced notification latency",
    ],
  },
];

export const ABOUT_BULLETS = [
  "⚡ Expert in Oracle PL/SQL for high-volume financial systems",
  "🏦 Delivered multiple banking platforms for RBL, Axis & Canara",
  "👑 Led fintech projects as Team Lead & Delivery Lead",
  "🔐 Strong in PCI-DSS, secure coding & encryption",
  "💻 Full-stack capability with Java, APIs & reporting tools",
];