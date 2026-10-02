<script setup lang="ts">
import { ArrowRight, Image as ImageIcon } from 'lucide-vue-next'
import { portfolioItems } from '~/data/portfolio'
import { services } from '~/data/services'

const route = useRoute()
const project = computed(() => portfolioItems.find(item => item.slug === String(route.params.slug)))
if (!project.value) throw createError({ statusCode: 404, statusMessage: 'Proyek tidak ditemukan' })
const current = computed(() => project.value!)
const relatedServices = computed(() => services.filter(service => current.value.services.includes(service.slug)))

useSeoMeta({ title: () => `${current.value.title} | Portofolio FIXIT`, description: () => current.value.description })
useHead(() => ({ link: [{ rel: 'canonical', href: `/portfolio/${current.value.slug}` }] }))
</script>

<template>
  <div>
    <SharedPageHero :eyebrow="current.category" :title="current.title" :description="current.description" parent="Portofolio" parent-to="/portfolio" />
    <section class="section-pad bg-white">
      <UiContainer>
        <div class="rounded-xl border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-navy"><strong>Catatan konten:</strong> Halaman ini adalah placeholder terstruktur. Informasi klien, lokasi, hasil, dan dokumentasi visual tidak ditampilkan sebelum data asli terverifikasi tersedia.</div>
        <div class="mt-12 grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <aside>
            <p class="eyebrow">Ringkasan proyek</p>
            <dl class="divide-y divide-line border-y border-line text-sm">
              <div class="flex justify-between gap-4 py-4"><dt class="text-slate-500">Kategori</dt><dd class="font-semibold text-ink">{{ current.category }}</dd></div>
              <div class="flex justify-between gap-4 py-4"><dt class="text-slate-500">Lokasi</dt><dd class="text-right font-semibold text-ink">{{ current.location }}</dd></div>
              <div class="flex justify-between gap-4 py-4"><dt class="text-slate-500">Status konten</dt><dd class="font-semibold text-brand">Placeholder</dd></div>
            </dl>
          </aside>
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-ink">Dokumentasi akan ditambahkan</h2>
            <p class="body-copy mt-5">Struktur halaman sudah menyiapkan ruang untuk masalah klien, solusi, proses implementasi, galeri, dan hasil pekerjaan tanpa mengarang informasi yang belum tersedia.</p>
            <div class="grid-paper mt-8 flex aspect-[16/8] items-center justify-center rounded-xl bg-navy text-center text-white/70"><div><ImageIcon class="mx-auto h-10 w-10" /><p class="mt-3 text-xs font-bold uppercase tracking-[.16em]">Project media placeholder</p></div></div>
          </div>
        </div>
      </UiContainer>
    </section>
    <section class="section-pad bg-mist">
      <UiContainer>
        <UiSectionHeader eyebrow="Layanan terkait" title="Temukan layanan yang relevan" />
        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink v-for="service in relatedServices" :key="service.slug" :to="`/services/${service.slug}`" class="flex items-center justify-between rounded-xl border border-line bg-white p-6 font-bold text-ink hover:border-brand hover:text-brand"><span class="flex items-center gap-3"><component :is="service.icon" class="h-5 w-5 text-brand" />{{ service.navTitle }}</span><ArrowRight class="h-4 w-4" /></NuxtLink>
        </div>
      </UiContainer>
    </section>
    <SharedFinalCta />
  </div>
</template>
