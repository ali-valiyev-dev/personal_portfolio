/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#000000",
          neutral: "#404040",
          white: "#FFFFFF",
        },
        zinc: {
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          500: "#71717a",
          800: "#27272a",
        },
      },

      textShadow: {
        outline:
          "1.5px 1.5px 0 #000, -1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000",
      },
      dropShadow: {
        heading: "0px 3px 1px rgba(0, 0, 0, 0.25)",
      },
      letterSpacing: {
        "negative-2": "-0.5px",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const textShadows = theme("textShadow");
      const textShadowUtilities = Object.keys(textShadows).map(key => {
        return {
          [`.${e(`text-shadow-${key}`)}`]: {
            textShadow: textShadows[key],
          },
        };
      });

      addUtilities(textShadowUtilities, ["responsive", "hover"]);
    },

    function ({ addBase, theme }) {
      addBase({
        body: {
          "letter-spacing": theme("letterSpacing.negative-2"),
        },
      });
    },
  ],
};
