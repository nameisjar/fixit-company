<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { services } from '~/data/services'
import { siteConfig } from '~/config/site'
</script>

<template>
  <footer class="bg-ink text-white">
    <UiContainer>
      <div class="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div class="sm:col-span-2">
          <div class="mb-5 flex items-center gap-3">
            <UiLogoMark class="h-14 w-16 shrink-0 rounded-xl border border-white/10" />
            <div><p class="text-xl font-extrabold">FIXIT</p><p class="text-xs tracking-wider text-blue-200">SOLUTION TECHNOLOGY</p></div>
          </div>
          <p class="max-w-md text-sm leading-7 text-slate-300">Solusi teknologi untuk rumah, bisnis, organisasi, dan instansi.</p>
          <p class="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-cyan">{{ siteConfig.serviceArea }}</p>
        </div>
        <div>
          <h2 class="mb-4 text-sm font-bold">Layanan</h2>
          <ul class="space-y-3 text-sm text-slate-300">
            <li v-for="service in services" :key="service.slug"><NuxtLink :to="`/services/${service.slug}`" class="hover:text-white">{{ service.navTitle }}</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h2 class="mb-4 text-sm font-bold">Perusahaan</h2>
          <ul class="space-y-3 text-sm text-slate-300">
            <li><NuxtLink to="/about" class="hover:text-white">Tentang Kami</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="hover:text-white">Portofolio</NuxtLink></li>
            <li><NuxtLink to="/faq" class="hover:text-white">FAQ</NuxtLink></li>
            <li><NuxtLink to="/contact" class="inline-flex items-center gap-1 hover:text-white">Kontak <ArrowUpRight class="h-3 w-3" /></NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ new Date().getFullYear() }} {{ siteConfig.name }}.</p>
        <p>{{ siteConfig.tagline }}</p>
      </div>
    </UiContainer>
  </footer>
</template>
