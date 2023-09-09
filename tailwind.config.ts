import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'just-white': '#FFFFFF',
        black: '#232233',
        'royal-blue': '#5956E9',
        gray: '#6C6C72',
        blue: '#403dd1'
      },
      backgroundImage: {
        pattern: "url('/img/background.png')",
      },
      boxShadow: {
        'effect-1': '0 1px 10px rgba(0, 0, 0, 0.1)',
        'effect-2': '0 10px 100px rgba(0, 0, 0, 0.24)',
        'effect-3': '40px 40px 100px rgba(24, 48, 63, 0.5)',
      },
      dropShadow: {
        'effect-1': '0 1px 10px rgba(0, 0, 0, 0.1)',
        'effect-2': '0 10px 100px rgba(0, 0, 0, 0.24)',
      },
    },
    fontFamily: {
      'josefin-sans': ['Josefin Sans', 'sans-serif'],
    },
    fontSize: {
      xs: '10px',
      sm: '12px',
      base: '16px',
      md: '20px',
      lg: '25px',
      xl: '31.25px',
      '2xl': '39.06px',
      '3xl': '48.83px',
      '4xl': '61.04px',
    },
  },
};
