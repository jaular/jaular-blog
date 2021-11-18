const colors = require("tailwindcss/colors");
const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        cyan: colors.cyan,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        lime: colors.lime,
        sky: colors.sky,
        rose: colors.rose,
        emerald: colors.emerald,
        black: {
          100: "#383838",
          200: "#2e2e2e",
          300: "#252525",
          400: "#1b1b1b",
          500: "#111111",
        },
      },
      fontFamily: {
        sans: ["IBM Plex Sans", ...fontFamily.sans],
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.emerald.700"),
              "&:hover": {
                color: theme("colors.emerald.800"),
              },
            },
            "h1,h2,h3,h4,strong": {
              color: theme("colors.black.500"),
              "scroll-margin-top": spacing[16],
            },
            "p,ul,ol,li": {
              color: theme("colors.black.300"),
            },
            code: { color: theme("colors.purple.700") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.700") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.700") },
              },
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme("colors.emerald.500"),
              "&:hover": {
                color: theme("colors.emerald.600"),
              },
            },
            "h1,h2,h3,h4,strong": {
              color: theme("colors.gray.200"),
              "scroll-margin-top": spacing[16],
            },
            "p,ul,ol,li": {
              color: theme("colors.gray.300"),
            },
            code: { color: theme("colors.purple.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.400") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.400") },
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
