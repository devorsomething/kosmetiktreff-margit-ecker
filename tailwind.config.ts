import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          light: "#F0EBF7",
          DEFAULT: "#E6E0F0",
          dark: "#D4CAE2",
        },
        cream: {
          DEFAULT: "#FAF8F0",
          warm: "#F5F0E8",
        },
        charcoal: {
          light: "#5A5A5A",
          DEFAULT: "#3D3D3D",
          dark: "#2A2A2A",
        },
        rose: {
          soft: "#E8D5D5",
          DEFAULT: "#DFC5C5",
          deep: "#CFA8A8",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to bottom, rgba(61,61,61,0.3), rgba(61,61,61,0.5))",
      },
    },
  },
  plugins: [],
};

export default config;
