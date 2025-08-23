import type { Config } from 'tailwindcss'
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fogGray: "#5D6D7E",
        ggRed: "#D92229",
        calGold: "#FDB515",
        sfDark: "#2D2D2D",
      },
      fontFamily: {
        muni: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Inter','Helvetica','Arial','sans-serif'],
        powell: ['Impact','Oswald','system-ui','sans-serif']
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.12)"
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    }
  },
  plugins: [],
}
export default config
