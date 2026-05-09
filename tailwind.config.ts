import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#060812",
        ink: "#0b1020",
        cyanVolt: "#37f5ff",
        limeVolt: "#b8ff5a",
        magentaVolt: "#ff4fd8",
        amberVolt: "#ffcc66"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"]
      },
      boxShadow: {
        glow: "0 0 45px rgba(55, 245, 255, 0.22)",
        magenta: "0 0 40px rgba(255, 79, 216, 0.18)"
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "radial-signal":
          "radial-gradient(circle at 20% 20%, rgba(55,245,255,0.18), transparent 32%), radial-gradient(circle at 76% 14%, rgba(255,79,216,0.14), transparent 30%), radial-gradient(circle at 52% 82%, rgba(184,255,90,0.1), transparent 34%)"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        pulseRing: {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.96)" },
          "50%": { opacity: "0.9", transform: "scale(1.04)" }
        }
      },
      animation: {
        scan: "scan 7s linear infinite",
        pulseRing: "pulseRing 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
