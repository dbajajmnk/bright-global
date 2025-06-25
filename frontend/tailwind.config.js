// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F78B1F',       // 🔶 TechLambda orange
        secondary: '#444444',     // 🔲 Dark gray for main text
        background: '#FFFFFF',    // ⚪ White background
        surface: '#F9FAFB',       // 🧾 Light surface/section BG
        textPrimary: '#444444',   // 🖋️ Primary text color
        textSecondary: '#999999', // 🪶 Light gray subtext
        highlight: '#FBBF24',     // ✨ Optional yellow-ish highlight
      },
    },
  },
  plugins: [],
};
