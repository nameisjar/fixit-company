<script setup lang="ts">
import { portfolioItems } from '~/data/portfolio'

const filters = ['Semua', 'CCTV', 'Starlink', 'Network', 'Website', 'Application', 'IT Support']
const activeFilter = ref('Semua')
const visibleItems = computed(() => activeFilter.value === 'Semua' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter.value))

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
    <SharedFinalCta />
  </div>
</template>
