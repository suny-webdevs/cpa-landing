// tailwind.config.ts
import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}", // if using src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
