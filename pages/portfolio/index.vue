<script setup lang="ts">
import { Camera, CheckCircle2, FileText, ShieldCheck } from 'lucide-vue-next'
import { portfolioItems } from '~/data/portfolio'

const filters = ['Semua', 'CCTV', 'Starlink', 'Network', 'Website', 'Application', 'IT Support', 'IT Maintenance']
const activeFilter = ref('Semua')
const visibleItems = computed(() => activeFilter.value === 'Semua' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter.value))

const caseStudySections = [
  { icon: FileText, title: 'Kebutuhan', text: 'Konteks dan tantangan pelanggan yang aman untuk dipublikasikan.' },
  { icon: ShieldCheck, title: 'Solusi', text: 'Pendekatan dan ruang lingkup yang dipilih untuk menjawab kebutuhan.' },
  { icon: Camera, title: 'Implementasi', text: 'Tahapan pekerjaan serta dokumentasi visual yang telah disetujui.' },
  { icon: CheckCircle2, title: 'Hasil', text: 'Hasil terverifikasi tanpa mengarang angka, testimoni, atau klaim.' },
]

useSeoMeta({ title: 'Portofolio | FIXIT', description: 'Dokumentasi dan studi kasus pekerjaan teknologi FIXIT.' })
useHead({ link: [{ rel: 'canonical', href: '/portfolio' }] })
</script>

<template>
  <div>
    <SharedPageHero eyebrow="Portofolio" title="Pekerjaan nyata, didokumentasikan dengan jelas." description="Halaman ini disiapkan untuk menampilkan dokumentasi proyek FIXIT. Konten sementara ditandai sebagai placeholder hingga data terverifikasi tersedia." />
    <section class="section-pad bg-white">
      <UiContainer>
        <div class="mb-10 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter portofolio">
          <button v-for="filter in filters" :key="filter" class="shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors" :class="activeFilter === filter ? 'border-brand bg-brand text-white' : 'border-line bg-white text-slate-600 hover:border-brand hover:text-brand'" @click="activeFilter = filter">{{ filter }}</button>
        </div>
        <div v-if="visibleItems.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><PortfolioCard v-for="item in visibleItems" :key="item.slug" :item="item" /></div>
        <div v-else class="rounded-xl border border-dashed border-line bg-mist px-6 py-16 text-center"><p class="font-bold text-ink">Belum ada dokumentasi pada kategori ini.</p><p class="mt-2 text-sm text-slate-600">Proyek akan ditampilkan setelah materi terverifikasi tersedia.</p></div>
      </UiContainer>
    </section>
    <section class="section-pad bg-mist">
      <UiContainer>
        <div class="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <p class="eyebrow">Standar studi kasus</p>
            <h2 class="display-title">Setiap proyek punya konteks, bukan sekadar galeri foto.</h2>
            <p class="body-copy mt-5">Nama klien, lokasi rinci, konfigurasi sensitif, dan dokumentasi hanya ditampilkan setelah diverifikasi dan diizinkan untuk publikasi.</p>
          </div>
          <div class="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            <article v-for="item in caseStudySections" :key="item.title" class="bg-white p-6 sm:p-7">
              <component :is="item.icon" class="h-6 w-6 text-brand" :stroke-width="1.7" aria-hidden="true" />
              <h3 class="mt-7 text-lg font-bold text-ink">{{ item.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-slate-600">{{ item.text }}</p>
            </article>
          </div>
        </div>
      </UiContainer>
    </section>
    <SharedFinalCta />
  </div>
</template>
