export default defineEventHandler((event) => {
  setResponseHeader(event, 'content-type', 'text/plain; charset=utf-8')
  const origin = getRequestURL(event).origin
  return `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`
})
