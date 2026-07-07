// themes.js

const themes = [
  {
    id: 1,
    name: "Classic",
    icon: "🌞",
    description: "Bright and clean for everyday reading.",
    colors: [
      "#FFFFFF",
      "#F8FAFC",
      "#CBD5E1",
      "#0F172A",
    ],
  },

  {
    id: 2,
    name: "Midnight",
    icon: "🌙",
    description: "Comfortable dark theme for night reading.",
    colors: [
      "#020617",
      "#1E293B",
      "#334155",
      "#F8FAFC",
    ],
  },

  {
    id: 3,
    name: "Ocean",
    icon: "🌊",
    description: "Soft blues inspired by the calm sea.",
    colors: [
      "#0EA5E9",
      "#38BDF8",
      "#7DD3FC",
      "#E0F2FE",
    ],
  },

  {
    id: 4,
    name: "Forest",
    icon: "🌿",
    description: "Gentle greens for peaceful reading.",
    colors: [
      "#166534",
      "#22C55E",
      "#86EFAC",
      "#ECFDF5",
    ],
  },
];

export const themeStyles = {
  Classic: {
    pageBackground: "#F8FAFC",
    accent: "#0284C7",
    sectionBackground: "#FFFFFF",
    cardBackground: "#FFFFFF",
    navbarBackground: "rgba(255,255,255,0.85)",
    heading: "#0F172A",
    text: "#475569",
    mutedText: "#64748B",
    border: "#CBD5E1",
    primary: "#0284C7",
    primaryHover: "#0369A1",
    shadow: "0 8px 25px rgba(0,0,0,0.08)",
  },

  Ocean: {
    pageBackground: "#E0F2FE",
    accent: "#0EA5E9",
    sectionBackground: "#F0F9FF",
    cardBackground: "#FFFFFF",
    navbarBackground: "rgba(240,249,255,0.85)",
    heading: "#0C4A6E",
    text: "#075985",
    mutedText: "#0369A1",
    border: "#7DD3FC",
    primary: "#0284C7",
    primaryHover: "#0369A1",
    shadow: "0 8px 25px rgba(2,132,199,0.12)",
  },

  Forest: {
    pageBackground: "#ECFDF5",
    sectionBackground: "#F0FDF4",
    cardBackground: "#FFFFFF",
    navbarBackground: "rgba(240,253,244,0.85)",
    heading: "#14532D",
    text: "#166534",
    accent: "#22C55E",
    mutedText: "#15803D",
    border: "#86EFAC",
    primary: "#16A34A",
    primaryHover: "#15803D",
    shadow: "0 8px 25px rgba(22,163,74,0.12)",
  },

  Midnight: {
    pageBackground: "#020617",
    sectionBackground: "#0F172A",
    cardBackground: "#1E293B",
    navbarBackground: "rgba(15,23,42,0.90)",
    heading: "#F8FAFC",
    text: "#CBD5E1",
    mutedText: "#94A3B8",
    border: "#334155",
    accent: "#38BDF8",
    primary: "#38BDF8",
    primaryHover: "#0EA5E9",
    shadow: "0 8px 25px rgba(0,0,0,0.40)",
  },
};

export default themes;