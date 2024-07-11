import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      extend: {
        colors: {
          primary: {
            dark: "#1C2834",
            lightgreen: "#C1CF16",
            lighter:"#E3E3E3",
            gray:"#495D69",
          }
        }
      }
    },
  plugins: [],
};

export default config;
