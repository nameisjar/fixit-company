<script setup lang="ts">
import { ArrowRight, MessageCircle } from 'lucide-vue-next'
const { openConsultation } = useConsultation()
</script>

<template>
  <section class="bg-brand py-14 text-white sm:py-16">
    <UiContainer>
      <div class="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div class="max-w-2xl">
          <p class="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Mulai dari kebutuhan Anda</p>
          <h2 class="text-3xl font-bold tracking-[-0.035em] sm:text-4xl">Punya kebutuhan teknologi?</h2>
          <p class="mt-4 max-w-xl leading-7 text-blue-50">Ceritakan kebutuhan Anda. Tim FIXIT akan membantu mencari solusi yang sesuai.</p>
        </div>
        <div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <UiButton variant="light" @click="openConsultation()"><MessageCircle class="h-4 w-4" /> Konsultasi via WhatsApp</UiButton>
          <UiButton to="/contact" variant="ghost">Hubungi Kami <ArrowRight class="h-4 w-4" /></UiButton>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
