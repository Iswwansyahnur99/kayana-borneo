/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          'dark': '#0a0a0b',
          'charcoal': '#1a1a1c',
          'slate': '#2a2a2e',
          'indigo': '#1e3a8a',
          'indigo-light': '#3b82f6',
          'terracotta': '#dc2626',
          'terracotta-light': '#ef4444',
          'gold': '#fbbf24',
          'gold-light': '#fcd34d',
          'cream': '#fef3c7',
          'warm-gray': '#78716c',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Crimson Text', 'serif'],
      },
      backgroundImage: {
        'heritage-gradient': 'linear-gradient(135deg, #0a0a0b 0%, #1a1a1c 50%, #2a2a2e 100%)',
        'indigo-gradient': 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        'terracotta-gradient': 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
        'gold-gradient': 'linear-gradient(135deg, #fbbf24 0%, #fcd34d 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(251, 191, 36, 0.8)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};