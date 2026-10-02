import { siteConfig } from '~/config/site'

export function generateWhatsAppUrl(message: string): string {
  const base = siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}`
    : 'https://wa.me/'

  return `${base}?text=${encodeURIComponent(message)}`
}
