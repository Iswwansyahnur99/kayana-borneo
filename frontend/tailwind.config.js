/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        dayak: {
          'forest': '#0a0a0a',
          'forest-light': '#1a1a1a',
          'forest-deep': '#000000',
          'spirit': '#fafafa',
          'spirit-soft': '#f5f5f5',
          'spirit-dim': '#e5e5e5',
          'hornbill': '#fbbf24',
          'hornbill-light': '#fcd34d',
          'hornbill-deep': '#f59e0b',
          'lifeblood': '#dc2626',
          'lifeblood-light': '#ef4444',
          'lifeblood-deep': '#b91c1c',
          'earth': '#78716c',
          'earth-light': '#a8a29e',
          'earth-dark': '#57534e',
        }
      },
      fontFamily: {
        'sacred': ['Cinzel', 'serif'],
        'spirit': ['Inter', 'sans-serif'],
        'earth': ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'forest-gradient': 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #1a1a1a 100%)',
        'hornbill-gradient': 'linear-gradient(135deg, #fbbf24 0%, #fcd34d 100%)',
        'lifeblood-gradient': 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
        'spirit-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'sacred-pattern': 'linear-gradient(45deg, transparent 48%, #fbbf24 49%, #fbbf24 51%, transparent 52%)',
        'dayak-weave': 'repeating-linear-gradient(90deg, transparent, transparent 2px, #fbbf24 2px, #fbbf24 4px)',
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
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'sacred-float': 'sacredFloat 4s ease-in-out infinite',
        'spirit-dance': 'spiritDance 6s ease-in-out infinite',
        'enggang-soar': 'enggangSoar 8s ease-in-out infinite',
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
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(251, 191, 36, 0.6)' },
        },
        sacredFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spiritDance: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(10px) rotate(2deg)' },
          '75%': { transform: 'translateX(-10px) rotate(-2deg)' },
        },
        enggangSoar: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.1)' },
        },
      },
      boxShadow: {
        'sacred': '0 0 30px rgba(251, 191, 36, 0.3)',
        'spirit': '0 0 20px rgba(255, 255, 255, 0.1)',
        'forest': '0 0 40px rgba(0, 0, 0, 0.8)',
        'enggang': '0 0 25px rgba(251, 191, 36, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};