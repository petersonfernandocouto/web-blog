import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Componentes/**/*.{js,ts,jsx,tsx,mdx}",
    "./Componentes/**/*.{js,ts,jsx,tsx,mdx}",
    "./ComponentesDeJogos/**/*.{js,ts,jsx,tsx,mdx}"
    
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        audiowide: ['Audiowide', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
