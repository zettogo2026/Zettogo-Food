import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101318",
        navy: "#8B120C",
        "navy-900": "#5F0906",
        flame: "#E32614",
        gold: "#FFC928",
        rice: "#FFF8EA",
        cream: "#FFF4D7",
        sauce: "#B9150C"
      },
      boxShadow: {
        glow: "0 18px 50px rgba(227, 38, 20, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
