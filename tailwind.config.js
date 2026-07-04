/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-hover": "rgb(var(--color-surface-hover) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        text: {
          primary: "rgb(var(--color-text-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          hover: "rgb(var(--color-accent-hover) / <alpha-value>)",
          light: "rgb(var(--color-accent-light) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" }],
        "heading-1": ["clamp(1.875rem, 3vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        "heading-2": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.3", letterSpacing: "-0.015em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "small": ["0.875rem", { lineHeight: "1.6" }],
        "label": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.05em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "section": "7rem",
      },
      borderRadius: {
        "xl": "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05)",
        "panel": "0 20px 60px rgba(0,0,0,0.12)",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
