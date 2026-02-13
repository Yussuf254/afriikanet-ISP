import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'input-shadow': '0 63px 59px rgba(26,33,188,.1)',
        'course-shadow': '0 40px 20px rgba(0,0,0,.15)',
        'testimonial-shadow1': '0 5.54348px 11.087px rgba(89,104,118,.05)',
        'testimonial-shadow2': '5.54348px 38.8043px 110.87px rgba(89,104,118,.15)',
        'card-hover': '0 20px 40px rgba(0,0,0,0.1)',
      },
      colors: {
        primary: "#f59e0b",
        primaryDark: "#d97706",
        secondary: "#92400e",
        accent: "#fbbf24",
        warmGray: "#78716c",
        sandy: "#f5f5f4",
        bronze: "#a8a29e",
        success: "#10b981",
        midnight_text: "#1c1917",
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)',
        'gradient-warm-light': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1c1917 0%, #44403c 50%, #78716c 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
