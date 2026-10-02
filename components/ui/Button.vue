<script setup lang="ts">
const props = withDefaults(defineProps<{
  to?: string
  variant?: 'primary' | 'secondary' | 'light' | 'ghost'
  type?: 'button' | 'submit'
}>(), { variant: 'primary', type: 'button' })

const classes = computed(() => ({
  primary: 'bg-brand text-white hover:bg-[#027bed] shadow-lg shadow-brand/20',
  secondary: 'border border-line bg-white text-ink hover:border-brand hover:text-brand',
  light: 'bg-white text-navy hover:bg-blue-50',
  ghost: 'text-white border border-white/25 hover:bg-white/10',
}[props.variant]))
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition-colors"
    :class="classes"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="type"
    class="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition-colors"
    :class="classes"
  >
    <slot />
  </button>
</template>
