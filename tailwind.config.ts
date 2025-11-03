import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      colors: {
        primary: {
          50: "#f2f8ff",
          100: "#dceeff",
          200: "#bcdcff",
          300: "#8ac1ff",
          400: "#549eff",
          500: "#1c76ff",
          600: "#0f5de6",
          700: "#0b47b3",
          800: "#0a3b8f",
          900: "#0a336f"
        },
        accent: "#ffb703",
        success: "#10b981",
        warning: "#f59e0b",
        danger: "#ef4444"
      }
    }
  },
  plugins: []
};

export default config;
