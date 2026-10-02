<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import type { Service } from '~/types'

defineProps<{ service: Service; index?: number }>()
</script>

<template>
  <NuxtLink :to="`/services/${service.slug}`" class="group flex min-h-72 flex-col justify-between border-t border-line py-7 transition-colors hover:border-brand sm:px-5 sm:hover:bg-mist/70">
    <div>
      <div class="mb-8 flex items-start justify-between">
        <span class="text-xs font-bold tabular-nums tracking-wider text-slate-400">0{{ (index ?? 0) + 1 }}</span>
        <component :is="service.icon" class="h-7 w-7 text-brand" :stroke-width="1.75" aria-hidden="true" />
      </div>
      <h3 class="text-xl font-bold tracking-tight text-ink">{{ service.navTitle }}</h3>
      <p class="mt-3 text-sm leading-6 text-slate-600">{{ service.shortDescription }}</p>
    </div>
    <span class="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand">Pelajari layanan <ArrowUpRight class="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
  </NuxtLink>
</template>
