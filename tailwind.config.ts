import type { Config } from "tailwindcss";

const config: Config = {
  // Dit is de cruciale regel die je nu mist:
  darkMode: "class", 
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}", // Vergeet je widgets map niet!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;