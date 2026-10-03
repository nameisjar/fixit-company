<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'

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

function isActive(to: string) {
  return route.path === to || route.path.startsWith(`${to}/`)
}
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/10 bg-ink/95 shadow-[0_8px_30px_-24px_rgba(2,142,246,0.7)] backdrop-blur-xl">
    <UiContainer>
      <nav class="flex h-[72px] items-center justify-between" aria-label="Navigasi utama">
        <NuxtLink to="/" class="group flex items-center gap-3 rounded-lg" aria-label="FIXIT — Beranda">
          <span class="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white shadow-[0_8px_24px_-12px_rgba(4,169,249,0.8)]">
            <img src="/logo.svg" width="68" height="68" alt="" class="absolute left-1/2 top-0 h-[68px] w-[68px] max-w-none -translate-x-1/2" />
          </span>
          <span class="leading-none">
            <span class="block text-[22px] font-extrabold tracking-[-0.04em] text-white transition-colors group-hover:text-cyan">FIXIT</span>
            <span class="mt-1.5 block text-[9px] font-bold uppercase tracking-[0.18em] text-blue-200">Solution Technology</span>
          </span>
        </NuxtLink>

        <div class="hidden items-center gap-1 lg:flex">
          <NuxtLink
            v-for="link in links" :key="link.to" :to="link.to"
            class="relative flex h-[72px] items-center px-4 text-sm font-semibold transition-colors after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:origin-center after:bg-cyan after:transition-transform"
            :class="isActive(link.to) ? 'text-white after:scale-x-100' : 'text-slate-300 after:scale-x-0 hover:text-white hover:after:scale-x-100'"
          >{{ link.label }}</NuxtLink>
          <UiButton class="ml-3 !min-h-11 !rounded-[10px] !px-[18px] !py-2.5 !shadow-none ring-1 ring-white/10" @click="openConsultation()"><UiWhatsAppIcon class="h-4 w-4" /> Konsultasi via WhatsApp</UiButton>
        </div>

        <button
          class="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          :aria-expanded="isOpen" aria-controls="mobile-menu" :aria-label="isOpen ? 'Tutup menu' : 'Buka menu'"
          @click="isOpen = !isOpen"
        >
          <X v-if="isOpen" class="h-5 w-5" aria-hidden="true" />
          <Menu v-else class="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>

      <div v-if="isOpen" id="mobile-menu" class="border-t border-white/10 py-4 lg:hidden">
        <div class="grid gap-1">
          <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="rounded-lg border border-transparent px-3 py-3 text-sm font-semibold transition-colors" :class="isActive(link.to) ? 'border-white/10 bg-white/10 text-cyan' : 'text-slate-200 hover:bg-white/5 hover:text-white'">{{ link.label }}</NuxtLink>
          <NuxtLink to="/contact" class="rounded-lg border border-transparent px-3 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/5 hover:text-white">Kontak</NuxtLink>
          <UiButton class="mt-3 w-full !min-h-11 !py-2.5 !shadow-none" @click="openConsultation(); isOpen = false"><UiWhatsAppIcon class="h-4 w-4" /> Konsultasi via WhatsApp</UiButton>
        </div>
      </div>
    </UiContainer>
  </header>
</template>
