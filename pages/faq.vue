<script setup lang="ts">
import { faqs } from '~/data/faq'

const { openConsultation } = useConsultation()
useSeoMeta({ title: 'FAQ | FIXIT', description: 'Jawaban atas pertanyaan umum tentang layanan dan konsultasi teknologi FIXIT.' })
useHead({
  link: [{ rel: 'canonical', href: '/faq' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) }) }],
})
</script>

<template>
  <div>
    <SharedPageHero eyebrow="FAQ" title="Jawaban singkat sebelum Anda memulai." description="Temukan informasi dasar tentang layanan FIXIT. Untuk kebutuhan yang lebih spesifik, mulai konsultasi langsung melalui WhatsApp." />
    <section class="section-pad bg-white">
      <UiContainer>
        <div class="mx-auto max-w-4xl">
          <UiAccordion :items="faqs" />
          <div class="mt-12 rounded-xl border border-line bg-mist p-7 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div><h2 class="text-xl font-bold text-ink">Masih punya pertanyaan?</h2><p class="mt-2 text-sm leading-6 text-slate-600">Ceritakan kebutuhan Anda agar kami dapat membantu mengarahkannya.</p></div>
            <UiButton class="mt-5 shrink-0 sm:mt-0" @click="openConsultation()"><UiWhatsAppIcon class="h-4 w-4" /> Mulai Konsultasi via WhatsApp</UiButton>
          </div>
        </div>
      </UiContainer>
    </section>
    <SharedFinalCta />
  </div>
</template>
