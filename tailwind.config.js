/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   success: "#22c55e",
    //   warning: "#ff7849",
    //   error: "#ff5630",
    //   info: "#00b8d9",
    // },
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1600px",
    },
    // fix tailwind line-height
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "60px",
      "7xl": "72px",
    },
    extend: {
      textColor: {
        primary: "var(--color-primary)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        router: "router-enter 300ms ease-in-out",
      },
      keyframes: {
        "router-enter": {
          from: {
            opacity: 0,
            transform: "translateX(-10px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use custom base style (src/theme/base.css)
    preflight: false, // https://tailwindcss.com/docs/preflight#disabling-preflight
  },
  plugins: [],
};
