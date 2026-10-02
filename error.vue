<script setup lang="ts">
import type { NuxtError } from '#app'
defineProps<{ error: NuxtError }>()
</script>

<template>
  <div class="grid min-h-screen place-items-center bg-ink px-5 text-center text-white">
    <div><p class="font-mono text-sm font-bold text-cyan">{{ error.statusCode }}</p><h1 class="mt-5 text-4xl font-bold">Halaman tidak ditemukan.</h1><p class="mt-4 text-slate-300">Tautan yang Anda buka mungkin sudah berubah atau belum tersedia.</p><UiButton to="/" variant="light" class="mt-8">Kembali ke Beranda</UiButton></div>
  </div>
</template>
