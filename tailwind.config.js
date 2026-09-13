/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#121110', // primary background
          panel: '#1B1A17',   // secondary background
          line: '#2A2823',    // hairline borders
        },
        bone: {
          DEFAULT: '#F3EFE6', // primary text
          muted: '#9C9488',   // secondary text
        },
        brass: {
          DEFAULT: '#B08D3F', // accent
          soft: '#8A6F35',
          bright: '#D3AE5C',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1240px',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
