/** @type {import('tailwindcss').Config} */
// 76% 24% 41% 59% / 74% 39% 61% 26%
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { borderRadius: `73% 27% 39% 61% / 52% 57% 28% 27%` },
          "50%": { borderRadius: `14% 86% 15% 85% / 62% 60% 40% 38%` },
          "75%": { borderRadius: `75% 25% 75% 25% / 48% 73% 25% 52%` },
          "100%": { borderRadius: `73% 27% 39% 61% / 52% 57% 28% 27%` },
        },
        animatetext:{
          "0%": {left:'0'},
          "100%":{left:'100%'}
        }
      },
      animation: {
        wiggle: "wiggle 4s ease-in-out infinite",
        animatetext: "animatetext 2s ease-in-out infinite"
      },
    },
  },
  plugins: [],
};
