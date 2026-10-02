<script setup lang="ts">
import { Menu, MessageCircle, X } from 'lucide-vue-next'

const isOpen = ref(false)
const route = useRoute()
const { openConsultation } = useConsultation()

watch(() => route.fullPath, () => { isOpen.value = false })

const links = [
  { label: 'Layanan', to: '/services' },
  { label: 'Portofolio', to: '/portfolio' },
  { label: 'Tentang Kami', to: '/about' },
  { label: 'FAQ', to: '/faq' },
]
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line/80 bg-white/95 backdrop-blur">
    <UiContainer>
      <nav class="flex h-18 items-center justify-between" aria-label="Navigasi utama">
        <NuxtLink to="/" class="flex items-center gap-3 rounded-md" aria-label="FIXIT — Beranda">
          <img src="/logo.svg" width="44" height="44" alt="" class="h-11 w-11 rounded-md object-cover" />
          <span class="leading-none">
            <span class="block text-lg font-extrabold tracking-[-0.03em] text-navy">FIXIT</span>
            <span class="mt-1 block text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">Solution Technology</span>
          </span>
        </NuxtLink>

        <div class="hidden items-center gap-8 lg:flex">
          <NuxtLink
            v-for="link in links" :key="link.to" :to="link.to"
            class="text-sm font-semibold text-slate-600 transition-colors hover:text-brand"
            active-class="text-brand"
          >{{ link.label }}</NuxtLink>
          <UiButton @click="openConsultation()"><MessageCircle class="h-4 w-4" aria-hidden="true" /> Konsultasi Sekarang</UiButton>
        </div>

        <button
          class="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
          :aria-expanded="isOpen" aria-controls="mobile-menu" aria-label="Buka menu"
          @click="isOpen = !isOpen"
        >
          <X v-if="isOpen" class="h-5 w-5" aria-hidden="true" />
          <Menu v-else class="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>

      <div v-if="isOpen" id="mobile-menu" class="border-t border-line py-5 lg:hidden">
        <div class="grid gap-1">
          <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-mist hover:text-brand">{{ link.label }}</NuxtLink>
          <NuxtLink to="/contact" class="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-mist hover:text-brand">Kontak</NuxtLink>
          <UiButton class="mt-3 w-full" @click="openConsultation(); isOpen = false"><MessageCircle class="h-4 w-4" /> Konsultasi Sekarang</UiButton>
        </div>
      </div>
    </UiContainer>
  </header>
</template>
