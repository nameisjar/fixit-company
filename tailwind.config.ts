import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#07162F',
        navy: '#052569',
        brand: '#028EF6',
        cyan: '#04A9F9',
        mist: '#F3F7FB',
        line: '#DCE6F0',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 60px -34px rgba(5, 37, 105, 0.28)',
      },
    },
  },
}
