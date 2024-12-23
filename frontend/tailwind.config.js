export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include React components
    "./public/index.html", // Include HTML if used
  ],
  theme: {
    extend: {
      backgroundImage: {
        aeroplane: "url('/src/assets/aeroplane.png')",
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
        slideInRight: "slideInRight 0.5s ease-in-out",
        slideInLeft: "slideInLeft 0.5s ease-in-out", // Added slideInLeft animation
        marquee: "marquee 10s linear infinite", // Added marquee animation
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(-10%)" },
          "50%": { transform: "translateX(10%)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
