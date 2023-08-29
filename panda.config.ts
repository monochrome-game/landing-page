import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./lib/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",
  strictTokens: true,

  theme: {
    extend: {
      tokens: {
        fontSizes: {
          xxs: { value: "0.6rem" },
          xs: { value: "0.75rem" },
          sm: { value: "0.9rem" },
          md: { value: "1rem" },
          lg: { value: "1.3rem" },
          xl: { value: "1.5rem" },
          xxl: { value: "2.5rem" },
        },

        fonts: {
          barrio: {
            value: "var(--font-barrio), Barrio, Impact",
          },
          barriecito: {
            value: "var(--font-barriecito), Barriecito, Impact",
          },
          specialElite: {
            value: "var(--font-special-elite), Courier",
          },
        },

        colors: {
          red: { value: "#A92323" },
          darkRed: { value: "#7E1A1A" },
          paleRed: { value: "#E26565" },
          gsWhite: { value: "#F8F8F5" },
          gsLightest: { value: "#EEEDE6" },
          gsLighter: { value: "#E2E0D7" },
          gsLight: { value: "#C5C4B8" },
          gsDark: { value: "#8A887B" },
          gsDarker: { value: "#5E5D59" },
          gsDarkest: { value: "#474744" },
          gsBlack: { value: "#242423" },
        },
      },
    },
  },
});
