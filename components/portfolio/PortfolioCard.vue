<script setup lang="ts">
import { ArrowUpRight, Image as ImageIcon } from 'lucide-vue-next'
import type { PortfolioItem } from '~/types'

defineProps<{ item: PortfolioItem }>()
</script>

<template>
  <NuxtLink :to="`/portfolio/${item.slug}`" class="group block overflow-hidden rounded-xl border border-line bg-white shadow-card">
    <div class="grid-paper relative flex aspect-[16/10] items-center justify-center bg-navy">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(4,169,249,.34),transparent_36%)]" />
      <div class="relative text-center text-white/70">
        <ImageIcon class="mx-auto h-9 w-9" :stroke-width="1.5" aria-hidden="true" />
        <p class="mt-3 text-xs font-bold uppercase tracking-[0.16em]">Foto proyek akan ditambahkan</p>
      </div>
    </div>
    <div class="p-6">
      <div class="flex items-center justify-between gap-4">
        <span class="text-xs font-bold uppercase tracking-[0.14em] text-brand">{{ item.category }}</span>
        <ArrowUpRight class="h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
      </div>
      <h3 class="mt-3 text-lg font-bold text-ink">{{ item.title }}</h3>
      <p class="mt-2 text-sm text-slate-500">{{ item.location }}</p>
      <p class="mt-4 text-sm leading-6 text-slate-600">{{ item.description }}</p>
    </div>
  </NuxtLink>
</template>
