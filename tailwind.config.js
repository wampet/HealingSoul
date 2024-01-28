/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        tableHead: "hsl(var(--table-head-color))",
        lightBlue: "hsl(var(--light-blue-color))",
        primary: "hsl(var(--primary-black))",
        primaryContrast: "hsl(var(--primary-contrast))",
        primaryBlue: "hsl(var(--primary-blue))",
        primaryBlack: "hsl(var(--primary-black))",
        placeholder: "hsl(var(--placeholder-color))",
        border: "hsl(var(--border))",
        inputLabel: "hsl(var(--input-label))",
        mediumSeaGreen: "hsl(var(--medium-sea-green))",
        buttonHover: "hsl(var(--button-hover))",
        white: "hsl(var(--white))",
        blueHighlights: "hsl(var(--blue-highlights))",
        textBlack: "hsl(var(--text-black))",
        dimGrey: "hsl(var(--dim-grey))",
        lightGrey: "hsl(var(--light-grey))",
        iconsBlue: "hsl(var(--icons-blue))",
 
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        blueHeading: "hsl(var(--blueHeading))",
        darkBlue: "hsl(var(--darkBlue))",
 
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
          1000: "#333333"
        },
        orange: {
          50: "#FF7C00",
          55: "#E06B00",
        },
        blue: {
          letter: "#000444",
          70: "#2D338C",
          darkBlue: "#151D46"
        },
        yellow: {
          50: "#FEC601",
        },
      },
      backgroundImage: {
        "bg-img-1": "url('/img-1.png')",
        "bg-img-2": "url('/img-2.png')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        "pattern-2": "url('/pattern-bg.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
};
