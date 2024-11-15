import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#7AA65A"
      },
      lineHeight: {
        'xxs': '13.31px',
      },
      fontSize: {
        xxs: '11px',
      },
      maxHeight: {
        '128': '28rem',
      },
      height: {
        '106': '22rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
