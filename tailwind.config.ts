import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        /* Palette roots */
        "p-bg":     "#0d272c", // deep teal — page background
        "p-card":   "#162e34", // slightly lighter teal — card bg
        "p-espresso": "#322d2e", // warm espresso — alternate cards
        "p-mocha":  "#5f5049", // muted mocha — borders, muted
        "p-cream":  "#f9fbf9", // cream white — foreground text
        /* Derived accents */
        "p-teal":   "#3ec5c0", // vibrant teal — primary interactive
        "p-gold":   "#c9a97a", // warm gold — secondary accent
        "p-teal-lt":"#7dd4d0", // light teal — hover / muted accent
        "p-mocha-lt":"#9a8078",// light mocha
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-teal-gold": "linear-gradient(135deg, #3ec5c0 0%, #f9fbf9 50%, #c9a97a 100%)",
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow-teal": "0 0 40px rgba(62, 197, 192, 0.25)",
        "glow-gold": "0 0 40px rgba(201, 169, 122, 0.25)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
        "premium": "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
