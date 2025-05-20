// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1240px",
    },
    fontFamily: {
      primary: "var(--font-dmSans)",
      secondary: "var(--font-barlow)",
    },
    extend: {
      colors: {
        primary: "#121315",
        secondary: "#666666",
        accent: "#fe5e00",
        background: "#F5F8FA",
        border: "#d7d7d7",
      },
      boxShadow: {
        custom: "0 4px 54px rgba(18, 19, 21, 0.06)",
      },
      backgroundImage: {
        hero: "url('/assets/img/hero/bg.jpg')",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
