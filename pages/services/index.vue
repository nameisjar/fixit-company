<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { services } from '~/data/services'

useSeoMeta({
  title: 'Layanan Teknologi | FIXIT',
  description: 'Jelajahi layanan CCTV, Starlink, jaringan, website, aplikasi, IT support dan repair, serta IT maintenance dari FIXIT.',
})
useHead({ link: [{ rel: 'canonical', href: '/services' }] })
</script>

<template>
  <div>
    <SharedPageHero eyebrow="Layanan FIXIT" title="Solusi teknologi, disesuaikan dengan kebutuhan." description="Dari perangkat di lapangan hingga sistem digital, pilih layanan yang ingin Anda konsultasikan bersama FIXIT." />
    <section class="section-pad bg-white">
      <UiContainer>
        <div class="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServicesServiceCard v-for="(service, index) in services" :key="service.slug" :service="service" :index="index" />
        </div>
      </UiContainer>
    </section>
    <SharedServiceAssurance />
    <section class="bg-mist py-14">
      <UiContainer>
        <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div><h2 class="text-2xl font-bold text-ink">Belum yakin memilih layanan?</h2><p class="mt-2 text-slate-600">Ceritakan masalah atau tujuan Anda. Kami bantu memetakan kebutuhannya.</p></div>
          <UiButton to="/contact">Hubungi FIXIT <ArrowRight class="h-4 w-4" /></UiButton>
        </div>
      </UiContainer>
    </section>
    <SharedFinalCta />
  </div>
</template>
