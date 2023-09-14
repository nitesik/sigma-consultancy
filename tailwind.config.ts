import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/*.{png,jpg,svg}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'background_1': "url('/wallpaper1.jpg')",
        'background_2': "url('/wallpaper2.jpg')",
        
      },
    },
  },
  plugins: [],
};
export default config;
