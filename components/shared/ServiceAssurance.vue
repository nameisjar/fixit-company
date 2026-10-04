<script setup lang="ts">
import { ClipboardCheck, FileCheck2, MessagesSquare, ShieldCheck } from 'lucide-vue-next'
import { serviceAssurances } from '~/data/company'

const icons = [ClipboardCheck, FileCheck2, ShieldCheck, MessagesSquare]
</script>

<template>
  <section class="section-pad bg-ink text-white">
    <UiContainer>
      <div class="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div>
          <p class="eyebrow">Quality assurance</p>
          <h2 class="display-title !text-white">Jelas sebelum dikerjakan, diuji sebelum diserahkan.</h2>
          <p class="body-copy mt-5 !text-slate-300">Standar pekerjaan disesuaikan dengan jenis layanan dan ruang lingkup yang telah disepakati.</p>
        </div>
        <div class="grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2">
          <article v-for="(item, index) in serviceAssurances" :key="item.title" class="bg-white/[.05] p-6 sm:p-7">
            <component :is="icons[index]" class="h-6 w-6 text-cyan" :stroke-width="1.7" aria-hidden="true" />
            <h3 class="mt-7 text-lg font-bold">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-slate-300">{{ item.description }}</p>
          </article>
        </div>
      </div>
      <p class="mt-8 border-t border-white/10 pt-6 text-xs leading-5 text-slate-400">
        Catatan: durasi, cakupan, dan pengecualian garansi mengikuti dokumen penawaran, invoice, berita acara, atau ketentuan produsen/distributor untuk setiap pekerjaan.
      </p>
    </UiContainer>
  </section>
</template>
