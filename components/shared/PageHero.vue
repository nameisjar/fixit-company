<script setup lang="ts">
import { ChevronRight, Home } from 'lucide-vue-next'

defineProps<{ eyebrow?: string; title: string; description: string; parent?: string; parentTo?: string }>()
</script>

<template>
  <section class="grid-paper bg-ink py-16 text-white sm:py-20">
    <UiContainer>
      <nav class="mb-10 flex items-center gap-2 text-xs font-semibold text-slate-400" aria-label="Breadcrumb">
        <NuxtLink to="/" class="rounded hover:text-white" aria-label="Beranda"><Home class="h-4 w-4" /></NuxtLink>
        <ChevronRight class="h-3 w-3" />
        <NuxtLink v-if="parent" :to="parentTo || '/'" class="hover:text-white">{{ parent }}</NuxtLink>
        <ChevronRight v-if="parent" class="h-3 w-3" />
        <span class="text-white">{{ title }}</span>
      </nav>
      <p v-if="eyebrow" class="eyebrow text-cyan">{{ eyebrow }}</p>
      <h1 class="max-w-4xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">{{ title }}</h1>
      <p class="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{{ description }}</p>
    </UiContainer>
  </section>
</template>
