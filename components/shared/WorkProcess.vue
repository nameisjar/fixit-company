<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { workProcess } from '~/data/company'

withDefaults(defineProps<{ inverse?: boolean }>(), { inverse: false })
</script>

<template>
  <ol class="mt-12 grid gap-px overflow-hidden rounded-xl border" :class="inverse ? 'border-white/10 bg-white/10' : 'border-line bg-line'">
    <li
      v-for="(step, index) in workProcess"
      :key="step.number"
      class="relative min-h-48 p-6 sm:p-7"
      :class="inverse ? 'bg-white/[.05]' : 'bg-white'"
    >
      <div class="flex items-center justify-between gap-4">
        <span class="font-mono text-xs font-bold" :class="inverse ? 'text-cyan' : 'text-brand'">{{ step.number }}</span>
        <ArrowRight
          v-if="index < workProcess.length - 1"
          class="h-4 w-4"
          :class="inverse ? 'text-blue-200' : 'text-slate-400'"
          aria-hidden="true"
        />
      </div>
      <h3 class="mt-10 text-lg font-bold" :class="inverse ? 'text-white' : 'text-ink'">{{ step.title }}</h3>
      <p class="mt-3 text-sm leading-6" :class="inverse ? 'text-slate-300' : 'text-slate-600'">{{ step.description }}</p>
    </li>
  </ol>
</template>

<style scoped>
@media (min-width: 640px) {
  ol { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (min-width: 1024px) {
  ol { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
</style>
