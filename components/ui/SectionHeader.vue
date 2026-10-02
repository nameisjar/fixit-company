<script setup lang="ts">
withDefaults(defineProps<{ eyebrow?: string; title: string; description?: string; align?: 'left' | 'center'; inverse?: boolean }>(), { align: 'left', inverse: false })
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2 class="display-title" :class="inverse ? '!text-white' : ''">{{ title }}</h2>
    <p v-if="description" class="body-copy mt-5" :class="inverse ? '!text-slate-300' : ''">{{ description }}</p>
  </div>
</template>
