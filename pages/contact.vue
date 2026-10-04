<script setup lang="ts">
import { Clock, Instagram, Mail, MapPin, MessageCircle } from 'lucide-vue-next'
import { siteConfig } from '~/config/site'

const { openConsultation } = useConsultation()
useSeoMeta({ title: 'Kontak FIXIT', description: 'Hubungi FIXIT untuk konsultasi kebutuhan CCTV, Starlink, jaringan, website, aplikasi, IT support, repair, dan maintenance.' })
useHead({ link: [{ rel: 'canonical', href: '/contact' }] })

const details = [
  { icon: MessageCircle, label: 'WhatsApp', value: siteConfig.whatsapp ? `+${siteConfig.whatsapp}` : 'Gunakan formulir konsultasi', available: true },
  { icon: Mail, label: 'Email', value: siteConfig.email || 'Belum dipublikasikan', available: Boolean(siteConfig.email) },
  { icon: Instagram, label: 'Instagram', value: siteConfig.instagram || 'Belum dipublikasikan', available: Boolean(siteConfig.instagram) },
  { icon: MapPin, label: 'Area layanan', value: siteConfig.serviceArea, available: true },
  { icon: Clock, label: 'Jam operasional', value: 'Konfirmasi melalui WhatsApp', available: true },
]
</script>

<template>
  <div>
    <SharedPageHero eyebrow="Kontak" title="Mari bicarakan kebutuhan teknologi Anda." description="Berikan gambaran singkat tentang layanan, lokasi, dan kebutuhan Anda. FIXIT akan membantu memetakan langkah berikutnya." />
    <section class="section-pad bg-white">
      <UiContainer>
        <div class="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p class="eyebrow">Informasi kontak</p>
            <h2 class="display-title">Mulai dengan konteks yang jelas.</h2>
            <p class="body-copy mt-5">Informasi kontak yang belum tersedia tidak ditampilkan sebagai data palsu. Formulir konsultasi dapat langsung menyiapkan pesan Anda.</p>
            <UiButton class="mt-8" @click="openConsultation()"><UiWhatsAppIcon class="h-4 w-4" /> Buka Konsultasi WhatsApp</UiButton>
          </div>
          <dl class="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            <div v-for="item in details" :key="item.label" class="bg-white p-6">
              <component :is="item.icon" class="h-6 w-6 text-brand" :stroke-width="1.7" aria-hidden="true" />
              <dt class="mt-8 text-xs font-bold uppercase tracking-[.16em] text-slate-400">{{ item.label }}</dt>
              <dd class="mt-2 text-sm font-semibold" :class="item.available ? 'text-ink' : 'text-slate-400'">{{ item.value }}</dd>
            </div>
          </dl>
        </div>
      </UiContainer>
    </section>
    <section class="bg-mist py-12">
      <UiContainer>
        <div class="flex items-center gap-4"><MapPin class="h-8 w-8 shrink-0 text-brand" /><div><p class="text-xs font-bold uppercase tracking-[.16em] text-brand">Basis & cakupan layanan</p><p class="mt-1 text-xl font-bold text-ink">{{ siteConfig.serviceArea }}</p></div></div>
      </UiContainer>
    </section>
    <SharedFinalCta />
  </div>
</template>
