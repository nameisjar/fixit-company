export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      meta: [
        { name: 'theme-color', content: '#052569' },
        { name: 'color-scheme', content: 'light' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: [
        '/', '/services', '/services/cctv', '/services/starlink', '/services/network',
        '/services/website', '/services/application', '/services/it-support', '/services/it-maintenance',
        '/portfolio', '/about', '/faq', '/contact', '/sitemap.xml', '/robots.txt',
      ],
      crawlLinks: true,
    },
  },
  typescript: { strict: true },
})
