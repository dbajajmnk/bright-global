// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3DB8A9', // teal-like for contrast
        secondary: '#F7941E', // orange accent
        background: '#E6F7FA', // 🌤️ light sky blue background
        surface: '#FFFFFF',
        textPrimary: '#1F2937',
        textSecondary: '#6B7280',
        highlight: '#0EA5E9' // light blue
      },
    },
  },
  plugins: [],
};
