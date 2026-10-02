import { services } from '~/data/services'
import { portfolioItems } from '~/data/portfolio'

export default defineEventHandler((event) => {
  setResponseHeader(event, 'content-type', 'application/xml; charset=utf-8')
  const base = getRequestURL(event).origin
  const routes = [
    '', '/services', ...services.map(service => `/services/${service.slug}`),
    '/portfolio', ...portfolioItems.map(item => `/portfolio/${item.slug}`),
    '/about', '/faq', '/contact',
  ]
  const urls = routes.map(route => `<url><loc>${base}${route || '/'}</loc></url>`).join('')
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
})
