import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}", // Por si creaste la carpeta fuera de components
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        foreground: "#f8fafc",
        brand: {
          primary: "#38bdf8",
          secondary: "#818cf8",
          accent: "#10b981",
        },
      },
    },
  },
  plugins: [],
};
export default config;