<script setup lang="ts">
import { ArrowRight, Check, MessageCircle } from 'lucide-vue-next'
import { getService, services } from '~/data/services'
import { portfolioItems } from '~/data/portfolio'
import { siteConfig } from '~/config/site'
import type { FaqItem } from '~/types'

const route = useRoute()
const service = computed(() => getService(String(route.params.slug)))
if (!service.value) throw createError({ statusCode: 404, statusMessage: 'Layanan tidak ditemukan' })

const current = computed(() => service.value!)
const { openConsultation } = useConsultation()
const related = computed(() => portfolioItems.filter(item => item.services.includes(current.value.slug)))
const serviceFaqs = computed<FaqItem[]>(() => [
  { question: `Apakah saya bisa berkonsultasi sebelum memilih layanan ${current.value.navTitle}?`, answer: 'Ya. Konsultasi awal membantu FIXIT memahami kebutuhan dan kondisi Anda sebelum menentukan langkah berikutnya.' },
  { question: 'Apakah perlu survei lokasi?', answer: 'Kebutuhan survei bergantung pada jenis pekerjaan dan kondisi lokasi. Hal ini akan dikonfirmasi pada tahap analisis.' },
  { question: 'Bagaimana proses mendapatkan penawaran?', answer: 'Setelah kebutuhan dianalisis, ruang lingkup solusi dan estimasi pekerjaan dapat disiapkan untuk Anda tinjau.' },
])

useSeoMeta({
  title: () => `${current.value.title} Merauke | FIXIT`,
  description: () => current.value.description,
  ogTitle: () => `${current.value.title} | FIXIT`,
  ogDescription: () => current.value.description,
})
useHead(() => ({
  link: [{ rel: 'canonical', href: `/services/${current.value.slug}` }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: current.value.title, description: current.value.description, areaServed: siteConfig.serviceArea, provider: { '@type': 'Organization', name: siteConfig.legalName } }) }],
}))
</script>

<template>
  <div>
    <SharedPageHero :eyebrow="current.navTitle" :title="current.title" :description="current.description" parent="Layanan" parent-to="/services" />

    <section class="section-pad bg-white">
      <UiContainer>
        <div class="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p class="eyebrow">Tentang layanan</p>
            <h2 class="display-title">Dibangun dari kebutuhan, bukan asumsi.</h2>
          </div>
          <div>
            <p class="body-copy">{{ current.shortDescription }}</p>
            <div class="mt-8 flex flex-wrap gap-2">
              <span v-for="audience in current.audiences" :key="audience" class="rounded-full border border-line bg-mist px-3 py-2 text-xs font-semibold text-slate-700">{{ audience }}</span>
            </div>
            <UiButton class="mt-8" @click="openConsultation(current.navTitle)"><MessageCircle class="h-4 w-4" /> {{ current.ctaText }}</UiButton>
          </div>
        </div>
      </UiContainer>
    </section>

    <section class="section-pad bg-mist">
      <UiContainer>
        <div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p class="eyebrow">Ruang lingkup</p>
            <h2 class="text-3xl font-bold tracking-tight text-ink">Yang dapat dikonsultasikan</h2>
            <ul class="mt-8 grid gap-3 sm:grid-cols-2">
              <li v-for="feature in current.features" :key="feature" class="flex items-start gap-3 rounded-lg border border-line bg-white p-4 text-sm font-semibold text-slate-700"><Check class="mt-0.5 h-4 w-4 shrink-0 text-brand" />{{ feature }}</li>
            </ul>
          </div>
          <div class="rounded-xl bg-navy p-7 text-white sm:p-10">
            <p class="text-xs font-bold uppercase tracking-[.16em] text-cyan">Manfaat</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight">Hasil yang ingin dicapai</h2>
            <ul class="mt-8 space-y-5">
              <li v-for="benefit in current.benefits" :key="benefit" class="flex gap-4 border-b border-white/10 pb-5 text-sm leading-6 text-slate-200 last:border-0"><span class="font-mono font-bold text-cyan">+</span>{{ benefit }}</li>
            </ul>
          </div>
        </div>
      </UiContainer>
    </section>

    <section class="section-pad bg-white">
      <UiContainer>
        <UiSectionHeader eyebrow="Proses" title="Dari konsultasi hingga serah terima" description="Tahapan dapat disesuaikan dengan ruang lingkup pekerjaan." />
        <ol class="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="(step, index) in current.process" :key="step" class="min-h-40 bg-white p-6"><span class="font-mono text-xs font-bold text-brand">{{ String(index + 1).padStart(2, '0') }}</span><h3 class="mt-8 font-bold text-ink">{{ step }}</h3></li>
        </ol>
      </UiContainer>
    </section>

    <section v-if="related.length" class="section-pad bg-ink text-white">
      <UiContainer>
        <UiSectionHeader eyebrow="Portofolio terkait" title="Dokumentasi layanan" description="Konten proyek akan ditampilkan setelah data dan dokumentasinya terverifikasi." inverse />
        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"><PortfolioCard v-for="item in related" :key="item.slug" :item="item" /></div>
      </UiContainer>
    </section>

    <section class="section-pad bg-white">
      <UiContainer>
        <div class="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div><p class="eyebrow">FAQ layanan</p><h2 class="display-title">Sebelum memulai</h2></div>
          <UiAccordion :items="serviceFaqs" />
        </div>
        <div class="mt-14 flex flex-wrap gap-3 border-t border-line pt-8">
          <span class="mr-3 self-center text-sm font-semibold text-slate-500">Layanan lainnya:</span>
          <NuxtLink v-for="item in services.filter(item => item.slug !== current.slug)" :key="item.slug" :to="`/services/${item.slug}`" class="inline-flex items-center gap-1 rounded-full border border-line px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand">{{ item.navTitle }} <ArrowRight class="h-3 w-3" /></NuxtLink>
        </div>
      </UiContainer>
    </section>
    <SharedFinalCta />
  </div>
</template>
