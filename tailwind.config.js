/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-blue': {
          50: '#f0f5fb',
          100: '#d4e4f5',
          200: '#a8c9f0',
          300: '#7cadea',
          400: '#5092e5',
          500: '#1E4D8C',
          600: '#1a4178',
          700: '#153664',
          800: '#102b50',
          900: '#0b203c',
        },
        'tropical-teal': {
          50: '#f0fffe',
          100: '#d4fcf9',
          200: '#a8f9f3',
          300: '#7cf5ed',
          400: '#50f1e7',
          500: '#2EC4B6',
          600: '#28a69e',
          700: '#228886',
          800: '#1c6a6e',
          900: '#164c56',
        },
        'sunset-gold': {
          50: '#fef9f3',
          100: '#fdf0e0',
          200: '#fce1c0',
          300: '#fad2a0',
          400: '#f8c380',
          500: '#F4A261',
          600: '#e89349',
          700: '#d97f32',
          800: '#ca6c1b',
          900: '#bb5904',
        },
        navy: {
          900: '#1f2937',
          800: '#374151',
          700: '#4b5563',
        },
        'cream-light': '#FAF9F6',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(46, 196, 182, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(46, 196, 182, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
