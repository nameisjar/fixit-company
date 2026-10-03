<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import type { Service } from '~/types'

const props = defineProps<{
  service: Service
  index: number
  title: string
  description: string
}>()

const accent = computed(() => [
  {
    border: 'border-cyan/35 hover:border-cyan/70',
    icon: 'text-cyan',
    action: 'border-cyan/60 text-cyan group-hover:bg-cyan group-hover:text-ink',
    glow: 'hover:shadow-[0_18px_45px_-28px_rgba(4,169,249,0.95)]',
  },
  {
    border: 'border-brand/45 hover:border-brand/80',
    icon: 'text-blue-300',
    action: 'border-brand/70 text-blue-300 group-hover:bg-brand group-hover:text-white',
    glow: 'hover:shadow-[0_18px_45px_-28px_rgba(2,142,246,0.95)]',
  },
  {
    border: 'border-blue-400/35 hover:border-blue-300/70',
    icon: 'text-blue-200',
    action: 'border-blue-300/60 text-blue-200 group-hover:bg-blue-300 group-hover:text-ink',
    glow: 'hover:shadow-[0_18px_45px_-28px_rgba(147,197,253,0.8)]',
  },
][props.index % 3])
</script>

<template>
  <NuxtLink
    :to="`/services/${service.slug}`"
    class="group relative flex min-h-40 flex-col overflow-hidden rounded-xl border bg-[#0c2042] p-4 transition duration-300 hover:-translate-y-0.5 hover:bg-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:min-h-44"
    :class="[accent.border, accent.glow]"
    :aria-label="`Lihat layanan ${title}`"
  >
    <span class="absolute right-4 top-3 font-mono text-xs text-slate-400">{{ String(index + 1).padStart(2, '0') }}</span>

    <component :is="service.icon" class="h-8 w-8" :class="accent.icon" :stroke-width="1.7" aria-hidden="true" />

    <div class="mt-auto">
      <h3 class="text-sm font-bold leading-5 text-white">{{ title }}</h3>
      <p class="mt-1.5 pr-9 text-xs leading-[1.45] text-slate-300">{{ description }}</p>
    </div>

    <span
      class="absolute bottom-3.5 right-3.5 flex h-7 w-7 items-center justify-center rounded-full border transition-colors"
      :class="accent.action"
      aria-hidden="true"
    >
      <ArrowRight class="h-3.5 w-3.5" />
    </span>
  </NuxtLink>
</template>
