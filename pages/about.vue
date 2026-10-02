<script setup lang="ts">
import { Compass, Eye, MapPin, Network, ShieldCheck, SlidersHorizontal } from 'lucide-vue-next'
import { services } from '~/data/services'
import { siteConfig } from '~/config/site'

useSeoMeta({ title: 'Tentang FIXIT | Solusi Teknologi Merauke', description: 'Mengenal FIXIT dan pendekatannya dalam membantu kebutuhan teknologi rumah, bisnis, organisasi, dan instansi.' })
useHead({ link: [{ rel: 'canonical', href: '/about' }] })

const principles = [
  { icon: Network, title: 'Terintegrasi', text: 'Berbagai kebutuhan teknologi dibahas dalam satu konteks yang utuh.' },
  { icon: SlidersHorizontal, title: 'Sesuai kebutuhan', text: 'Solusi dirancang dari kondisi dan tujuan pelanggan.' },
  { icon: ShieldCheck, title: 'Proses jelas', text: 'Tahapan pekerjaan dijelaskan sebelum implementasi dimulai.' },
]
</script>

<template>
  <div>
    <SharedPageHero eyebrow="Tentang FIXIT" title="Teknologi yang membantu menyelesaikan masalah nyata." description="FIXIT hadir untuk membantu masyarakat, bisnis, dan organisasi memanfaatkan teknologi secara lebih praktis dan sesuai kebutuhan." />
    <section class="section-pad bg-white">
      <UiContainer>
        <div class="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div><p class="eyebrow">Pengenalan</p><h2 class="display-title">Mendekatkan solusi teknologi dengan kebutuhan di lapangan.</h2></div>
          <div><p class="body-copy">FIXIT menyediakan layanan teknologi untuk rumah, bisnis, organisasi, dan instansi. Fokus kami adalah memahami konteks terlebih dahulu, lalu memetakan solusi yang relevan dan dapat diterapkan.</p><p class="body-copy mt-5">Cakupan awal layanan berada di Merauke dan Papua Selatan, dengan arsitektur layanan yang disiapkan untuk berkembang ke wilayah lain.</p></div>
        </div>
      </UiContainer>
    </section>
    <section class="section-pad bg-mist">
      <UiContainer>
        <div class="grid gap-6 md:grid-cols-2">
          <article class="rounded-xl border border-line bg-white p-8"><Compass class="h-8 w-8 text-brand" /><p class="eyebrow mt-8">Misi</p><h2 class="text-2xl font-bold text-ink">Membantu penggunaan teknologi menjadi lebih praktis dan tepat guna.</h2></article>
          <article class="rounded-xl bg-navy p-8 text-white"><Eye class="h-8 w-8 text-cyan" /><p class="mt-8 text-xs font-bold uppercase tracking-[.18em] text-cyan">Visi</p><h2 class="mt-4 text-2xl font-bold">Menjadi mitra solusi teknologi yang dekat, jelas, dan relevan bagi kebutuhan pelanggan.</h2></article>
        </div>
      </UiContainer>
    </section>
    <section class="section-pad bg-white">
      <UiContainer>
        <UiSectionHeader eyebrow="Layanan" title="Dari infrastruktur hingga produk digital" />
        <div class="mt-10 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3"><ServicesServiceCard v-for="(service, index) in services" :key="service.slug" :service="service" :index="index" /></div>
      </UiContainer>
    </section>
    <section class="section-pad bg-ink text-white">
      <UiContainer>
        <UiSectionHeader eyebrow="Prinsip kerja" title="Sederhana untuk dipahami. Serius saat dikerjakan." inverse />
        <div class="mt-10 grid gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-3">
          <article v-for="item in principles" :key="item.title" class="bg-white/[.05] p-7"><component :is="item.icon" class="h-7 w-7 text-cyan" /><h3 class="mt-8 text-xl font-bold">{{ item.title }}</h3><p class="mt-3 text-sm leading-6 text-slate-300">{{ item.text }}</p></article>
        </div>
        <div class="mt-12 flex items-center gap-4 border-t border-white/10 pt-8"><MapPin class="h-6 w-6 text-cyan" /><div><p class="text-xs font-bold uppercase tracking-[.16em] text-blue-200">Area layanan awal</p><p class="mt-1 font-bold">{{ siteConfig.serviceArea }}</p></div></div>
      </UiContainer>
    </section>
    <SharedFinalCta />
  </div>
</template>
