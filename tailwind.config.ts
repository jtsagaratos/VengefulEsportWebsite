import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vengefulDark: "#2B0F3F",
        vengefulLight: "#8E5BFF",
        vengefulBlack: "#0A0A0F",
        vengefulGray: "#1E1E24",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
