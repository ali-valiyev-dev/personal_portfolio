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
        error: {
          500: "#ef4444",
        },
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      fontSize: {
        // Display text
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-2%" }],
        "display-md": ["40px", { lineHeight: "48px", letterSpacing: "-2%" }],
        "display-sm": ["32px", { lineHeight: "40px", letterSpacing: "-2%" }],

        // Heading Regular
        "heading-regular": [
          "48px",
          { lineHeight: "56px", letterSpacing: "-2%" },
        ],
        "heading-semibold": [
          "48px",
          { lineHeight: "56px", letterSpacing: "-2%" },
        ],
        "heading-bold": ["48px", { lineHeight: "56px", letterSpacing: "-2%" }],
        "heading-extrabold": [
          "48px",
          { lineHeight: "56px", letterSpacing: "-2%" },
        ],

        // Outlined text (L)
        "outlined-lg-regular": [
          "48px",
          { lineHeight: "56px", letterSpacing: "-2%" },
        ],
        "outlined-lg-semibold": [
          "48px",
          { lineHeight: "56px", letterSpacing: "-2%" },
        ],
        "outlined-lg-bold": [
          "48px",
          { lineHeight: "56px", letterSpacing: "-2%" },
        ],
        "outlined-lg-extrabold": [
          "48px",
          { lineHeight: "56px", letterSpacing: "-2%" },
        ],

        // Outlined text (M)
        "outlined-md-regular": [
          "32px",
          { lineHeight: "40px", letterSpacing: "-2%" },
        ],
        "outlined-md-semibold": [
          "32px",
          { lineHeight: "40px", letterSpacing: "-2%" },
        ],
        "outlined-md-bold": [
          "32px",
          { lineHeight: "40px", letterSpacing: "-2%" },
        ],
        "outlined-md-extrabold": [
          "32px",
          { lineHeight: "40px", letterSpacing: "-2%" },
        ],

        // Sub Heading
        "subheading-regular": [
          "40px",
          { lineHeight: "48px", letterSpacing: "-2%" },
        ],
        "subheading-semibold": [
          "40px",
          { lineHeight: "48px", letterSpacing: "-2%" },
        ],
        "subheading-bold": [
          "40px",
          { lineHeight: "48px", letterSpacing: "-2%" },
        ],
        "subheading-extrabold": [
          "40px",
          { lineHeight: "48px", letterSpacing: "-2%" },
        ],

        // Heading H1
        "h1-regular": ["48px", { lineHeight: "56px", letterSpacing: "-2%" }],
        "h1-semibold": ["48px", { lineHeight: "56px", letterSpacing: "-2%" }],
        "h1-bold": ["48px", { lineHeight: "56px", letterSpacing: "-2%" }],
        "h1-extrabold": ["48px", { lineHeight: "56px", letterSpacing: "-2%" }],

        // Heading H2
        "h2-regular": ["36px", { lineHeight: "44px", letterSpacing: "-2%" }],
        "h2-semibold": ["36px", { lineHeight: "44px", letterSpacing: "-2%" }],
        "h2-bold": ["36px", { lineHeight: "44px", letterSpacing: "-2%" }],
        "h2-extrabold": ["36px", { lineHeight: "44px", letterSpacing: "-2%" }],

        // Heading H3
        "h3-regular": ["32px", { lineHeight: "40px", letterSpacing: "-2%" }],
        "h3-semibold": ["32px", { lineHeight: "40px", letterSpacing: "-2%" }],
        "h3-bold": ["32px", { lineHeight: "40px", letterSpacing: "-2%" }],
        "h3-extrabold": ["32px", { lineHeight: "40px", letterSpacing: "-2%" }],

        // Heading H4
        "h4-regular": ["28px", { lineHeight: "36px", letterSpacing: "-2%" }],
        "h4-semibold": ["28px", { lineHeight: "36px", letterSpacing: "-2%" }],
        "h4-bold": ["28px", { lineHeight: "36px", letterSpacing: "-2%" }],
        "h4-extrabold": ["28px", { lineHeight: "36px", letterSpacing: "-2%" }],

        // Heading H5
        "h5-regular": ["24px", { lineHeight: "32px", letterSpacing: "-2%" }],
        "h5-semibold": ["24px", { lineHeight: "32px", letterSpacing: "-2%" }],
        "h5-bold": ["24px", { lineHeight: "32px", letterSpacing: "-2%" }],
        "h5-extrabold": ["24px", { lineHeight: "32px", letterSpacing: "-2%" }],

        // Paragraph P1
        "p1-regular": ["20px", { lineHeight: "28px", letterSpacing: "-2%" }],
        "p1-semibold": ["20px", { lineHeight: "28px", letterSpacing: "-2%" }],
        "p1-bold": ["20px", { lineHeight: "28px", letterSpacing: "-2%" }],
        "p1-extrabold": ["20px", { lineHeight: "28px", letterSpacing: "-2%" }],

        // Paragraph P2
        "p2-regular": ["16px", { lineHeight: "24px", letterSpacing: "-2%" }],
        "p2-semibold": ["16px", { lineHeight: "24px", letterSpacing: "-2%" }],
        "p2-bold": ["16px", { lineHeight: "24px", letterSpacing: "-2%" }],
        "p2-extrabold": ["16px", { lineHeight: "24px", letterSpacing: "-2%" }],

        // Button Text
        "button-regular": [
          "16px",
          { lineHeight: "24px", letterSpacing: "-2%" },
        ],
        "button-semibold": [
          "16px",
          { lineHeight: "24px", letterSpacing: "-2%" },
        ],
        "button-bold": ["16px", { lineHeight: "24px", letterSpacing: "-2%" }],
        "button-extrabold": [
          "16px",
          { lineHeight: "24px", letterSpacing: "-2%" },
        ],

        // Underlined
        "underline-regular": [
          "20px",
          { lineHeight: "28px", letterSpacing: "-2%" },
        ],
        "underline-semibold": [
          "20px",
          { lineHeight: "28px", letterSpacing: "-2%" },
        ],
        "underline-bold": [
          "20px",
          { lineHeight: "28px", letterSpacing: "-2%" },
        ],
        "underline-extrabold": [
          "20px",
          { lineHeight: "28px", letterSpacing: "-2%" },
        ],
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};
