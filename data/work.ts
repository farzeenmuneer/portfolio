export const projects = [
  {
    id: 1,
    title: "Conferra",
    category: "web",
    description: "AI-Powered Video Conferencing Platform",
    points: [
      "Real-time multi-user calling with WebRTC & Socket.io",
      "Chat, screen sharing & AI meeting summaries",
      "Responsive UI with room & participant management",
    ],
    tech: ["React", "Node.js", "WebRTC", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/farzeenmuneer/conferra",
    live: "https://conferra.vercel.app/",
  },
  {
    id: 2,
    title: "SMART HELMET-Lite",
    category: "iot",
    description: "IoT-Based Safety Helmet with Real-Time Monitoring",
    points: [
      "Fall detection & gas monitoring for worker safety",
      "Automated alerts via Android & buzzer notifications",
      "LSTM activity recognition with Firebase analytics",
    ],
    tech: ["IoT", "ESP12", "Firebase", "Android", "LSTM"],
    github: "https://github.com",
    live: "#",
  },
  {
    id: 3,
    title: "SpendSquad",
    category: "ml",
    description: "Expense Manager with ML-Powered Insights",
    points: [
      "Automated categorization & spending analytics",
      "Linear Regression for budget predictions",
      "Dashboards with alerts for financial decisions",
    ],
    tech: ["Python", "Flask", "MySQL", "Machine Learning"],
    github: "https://github.com",
    live: "#",
  },
];

export const categories = [
  { name: "ALL", value: "all" },
  { name: "AI/ML", value: "ml" },
  { name: "WEB", value: "web" },
  { name: "IoT", value: "iot" },
];