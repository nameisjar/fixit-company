<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import type { FaqItem } from '~/types'

defineProps<{ items: FaqItem[] }>()
const openIndex = ref<number | null>(0)
</script>

<template>
  <div class="divide-y divide-line border-y border-line">
    <div v-for="(item, index) in items" :key="item.question">
      <h3>
        <button
          class="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold text-ink hover:text-brand sm:text-lg"
          :aria-expanded="openIndex === index"
          :aria-controls="`faq-panel-${index}`"
          @click="openIndex = openIndex === index ? null : index"
        >
          {{ item.question }}
          <ChevronDown class="h-5 w-5 shrink-0 transition-transform" :class="openIndex === index ? 'rotate-180 text-brand' : 'text-slate-400'" aria-hidden="true" />
        </button>
      </h3>
      <div v-show="openIndex === index" :id="`faq-panel-${index}`" class="pb-5 pr-10 text-sm leading-7 text-slate-600 sm:text-base">
        {{ item.answer }}
      </div>
    </div>
  </div>
</template>
