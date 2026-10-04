<script setup lang="ts">
import { ArrowDown, ArrowRight, Check, CircleDot, MapPin, Network, ShieldCheck, SlidersHorizontal, Wrench } from 'lucide-vue-next'
import { services } from '~/data/services'
import { portfolioItems } from '~/data/portfolio'
import { faqs } from '~/data/faq'
import { siteConfig } from '~/config/site'

const { openConsultation } = useConsultation()

useSeoMeta({
  title: 'FIXIT — Solusi Teknologi untuk Rumah, Bisnis, dan Organisasi',
  description: siteConfig.description,
  ogTitle: 'FIXIT — Solusi Teknologi untuk Rumah, Bisnis, dan Organisasi',
  ogDescription: siteConfig.description,
  ogType: 'website',
  twitterCard: 'summary',
})
useHead({ link: [{ rel: 'canonical', href: '/' }] })

const principles = [
  { icon: Network, title: 'One-Stop Technology Solution', text: 'Berbagai kebutuhan teknologi dapat dikonsultasikan melalui satu penyedia.' },
  { icon: SlidersHorizontal, title: 'Custom Solution', text: 'Solusi disesuaikan dengan kebutuhan dan kondisi pelanggan.' },
  { icon: Wrench, title: 'Local Support', text: 'Dukungan teknis yang dekat dengan pelanggan.' },
  { icon: ShieldCheck, title: 'Clear Process', text: 'Proses pekerjaan dijelaskan sejak konsultasi hingga penyelesaian.' },
]

const featuredServices = services.filter(service => service.slug !== 'it-maintenance')

const serviceMapContent: Record<string, { title: string; description: string }> = {
  cctv: { title: 'CCTV & Security', description: 'CCTV, DVR/NVR & Monitoring' },
  starlink: { title: 'Starlink & Internet', description: 'Instalasi & konfigurasi' },
  network: { title: 'Network & Wi-Fi', description: 'LAN, Wi-Fi & Router' },
  website: { title: 'Web Development', description: 'Website & Digital Platform' },
  application: { title: 'Application', description: 'Custom Application' },
  'it-support': { title: 'IT Support & Repair', description: 'Support & Troubleshooting' },
}
</script>

<template>
  <div>
    <section class="grid-paper relative overflow-hidden bg-ink text-white">
      <div class="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_75%_30%,rgba(2,142,246,.27),transparent_48%)]" />
      <UiContainer>
        <div class="relative grid min-h-[calc(100vh-4.5rem)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <div>
            <div class="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-blue-100">
              <MapPin class="h-4 w-4 text-cyan" aria-hidden="true" /> Berbasis di Merauke, Melayani Seluruh Indonesia
            </div>
            <h1 class="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Solusi Teknologi untuk <span class="text-cyan">Rumah, Bisnis,</span> dan Organisasi.
            </h1>
            <p class="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Menghadirkan solusi teknologi terintegrasi untuk mendukung kebutuhan rumah, bisnis, dan organisasi—mulai dari infrastruktur IT hingga sistem digital.</p>
            <div class="mt-9 flex flex-col gap-3 sm:flex-row">
              <UiButton @click="openConsultation()"><UiWhatsAppIcon class="h-4 w-4" /> Konsultasi via WhatsApp</UiButton>
              <UiButton to="#layanan" variant="ghost">Lihat Layanan <ArrowDown class="h-4 w-4" /></UiButton>
            </div>
          </div>

          <div class="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div class="absolute -left-5 top-16 h-24 w-1 bg-cyan" />
            <div class="rounded-2xl border border-white/15 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-sm sm:p-6">
              <div class="flex items-center justify-between border-b border-white/10 pb-5">
                <div><p class="text-xs font-bold uppercase tracking-[.18em] text-cyan">WHAT WE SOLVE</p><p class="mt-2 text-sm text-slate-300">Technology challenges, solved.</p></div>
                <CircleDot class="h-6 w-6 text-cyan" />
              </div>
              <div class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <ServicesServiceMapCard
                  v-for="(service, index) in featuredServices"
                  :key="service.slug"
                  :service="service"
                  :index="index"
                  :title="serviceMapContent[service.slug]?.title ?? service.navTitle"
                  :description="serviceMapContent[service.slug]?.description ?? service.shortDescription"
                />
              </div>
              <div class="mt-5 flex items-center justify-between text-xs text-slate-400"><span>Your Technology, Our Solution</span><span class="font-mono text-cyan">FIXIT / 01</span></div>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <section id="layanan" class="section-pad scroll-mt-20 bg-white">
      <UiContainer>
        <UiSectionHeader eyebrow="Layanan" title="Solusi Teknologi yang Anda Butuhkan" description="Berbagai kebutuhan teknologi dapat Anda konsultasikan bersama FIXIT." />
        <div class="mt-12 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServicesServiceCard v-for="(service, index) in services" :key="service.slug" :service="service" :index="index" />
        </div>
        <UiButton to="/services" variant="secondary" class="mt-8">Lihat Semua Layanan <ArrowRight class="h-4 w-4" /></UiButton>
      </UiContainer>
    </section>

    <section class="section-pad bg-mist">
      <UiContainer>
        <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p class="eyebrow">Teknologi yang bekerja untuk Anda</p>
            <h2 class="display-title">Masalah teknologi tidak selalu butuh solusi yang rumit.</h2>
            <p class="body-copy mt-6">Yang dibutuhkan adalah pemahaman atas kondisi nyata, pilihan teknologi yang tepat, dan proses kerja yang jelas.</p>
          </div>
          <div class="border-l-2 border-brand bg-white p-7 shadow-card sm:p-9">
            <p class="text-xs font-bold uppercase tracking-[.16em] text-brand">Pendekatan FIXIT</p>
            <ul class="mt-6 space-y-5">
              <li v-for="item in ['Memahami kebutuhan sebelum menentukan solusi', 'Menjelaskan pilihan dengan bahasa yang mudah dipahami', 'Menyesuaikan implementasi dengan kondisi lapangan', 'Menguji hasil sebelum pekerjaan diserahkan']" :key="item" class="flex gap-4 text-sm leading-6 text-slate-700 sm:text-base">
                <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand"><Check class="h-4 w-4" /></span>{{ item }}
              </li>
            </ul>
          </div>
        </div>
      </UiContainer>
    </section>

    <section class="section-pad bg-white">
      <UiContainer>
        <UiSectionHeader eyebrow="Cara kami bekerja" title="Kenapa FIXIT?" />
        <div class="mt-12 grid border-y border-line sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line">
          <article v-for="item in principles" :key="item.title" class="py-8 sm:px-6 lg:py-10">
            <component :is="item.icon" class="h-7 w-7 text-brand" :stroke-width="1.6" aria-hidden="true" />
            <h3 class="mt-8 text-lg font-bold text-ink">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-slate-600">{{ item.text }}</p>
          </article>
        </div>
      </UiContainer>
    </section>

    <section class="section-pad bg-ink text-white">
      <UiContainer>
        <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <UiSectionHeader eyebrow="Portofolio" title="Dokumentasi pekerjaan FIXIT" description="Area ini disiapkan untuk menampilkan proyek yang telah diverifikasi. Informasi contoh ditandai jelas sebagai placeholder." inverse />
          <UiButton to="/portfolio" variant="ghost" class="shrink-0">Lihat Portofolio <ArrowRight class="h-4 w-4" /></UiButton>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PortfolioCard v-for="item in portfolioItems.slice(0, 3)" :key="item.slug" :item="item" />
        </div>
      </UiContainer>
    </section>

    <section class="section-pad bg-white">
      <UiContainer>
        <UiSectionHeader eyebrow="Proses" title="Bagaimana FIXIT Bekerja?" description="Alur yang menjaga kebutuhan, implementasi, pengujian, dan tindak lanjut tetap jelas." />
        <SharedWorkProcess />
      </UiContainer>
    </section>

    <SharedServiceAssurance />

    <section class="section-pad overflow-hidden bg-mist">
      <UiContainer>
        <div class="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p class="eyebrow">Area layanan</p>
            <h2 class="display-title">Berbasis di Merauke, melayani seluruh Indonesia.</h2>
            <p class="body-copy mt-5">Ceritakan lokasi dan kebutuhan Anda agar ruang lingkup layanan dapat dikonfirmasi lebih awal.</p>
            <UiButton class="mt-7" @click="openConsultation()"><UiWhatsAppIcon class="h-4 w-4" /> Konsultasikan Lokasi</UiButton>
          </div>
          <div class="grid-paper relative min-h-80 overflow-hidden rounded-2xl bg-navy p-8 text-white sm:p-12">
            <div class="absolute right-10 top-10 h-40 w-40 rounded-full border border-cyan/30" />
            <div class="absolute right-20 top-20 h-20 w-20 rounded-full border border-cyan/50" />
            <MapPin class="relative h-12 w-12 text-cyan" :stroke-width="1.5" />
            <p class="relative mt-16 text-xs font-bold uppercase tracking-[.18em] text-blue-200">Service base & coverage</p>
            <p class="relative mt-3 text-3xl font-bold">Merauke<br />Seluruh Indonesia</p>
          </div>
        </div>
      </UiContainer>
    </section>

    <section class="section-pad bg-white">
      <UiContainer>
        <div class="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div><p class="eyebrow">FAQ</p><h2 class="display-title">Pertanyaan yang sering diajukan</h2><p class="body-copy mt-5">Belum menemukan jawaban? Mulai konsultasi dan ceritakan kebutuhan Anda.</p></div>
          <UiAccordion :items="faqs" />
        </div>
      </UiContainer>
    </section>

    <SharedFinalCta />
  </div>
</template>
