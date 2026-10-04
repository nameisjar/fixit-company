<script setup lang="ts">
import { Check, Compass, Eye, MapPin } from 'lucide-vue-next'
import { services } from '~/data/services'
import { companyProfile, companyValues } from '~/data/company'
import { siteConfig } from '~/config/site'

useSeoMeta({ title: 'Tentang FIXIT | Solusi Teknologi Terintegrasi', description: 'Mengenal FIXIT, visi, misi, nilai, layanan, dan standar kerjanya dalam membantu kebutuhan teknologi rumah, bisnis, organisasi, dan instansi.' })
useHead({ link: [{ rel: 'canonical', href: '/about' }] })
</script>

<template>
  <div>
    <SharedPageHero eyebrow="Tentang FIXIT" title="Teknologi yang membantu menyelesaikan masalah nyata." description="FIXIT mengubah kebutuhan teknologi menjadi solusi yang praktis, profesional, dan berkelanjutan." />
    <section class="section-pad bg-white">
      <UiContainer>
        <div class="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div><p class="eyebrow">Profil perusahaan</p><h2 class="display-title">Kemampuan teknis yang berangkat dari kebutuhan Anda.</h2></div>
          <div><p class="body-copy">{{ companyProfile.introduction }}</p><p class="body-copy mt-5">{{ companyProfile.positioning }}</p></div>
        </div>
      </UiContainer>
    </section>
    <section class="section-pad bg-mist">
      <UiContainer>
        <div class="grid gap-6 lg:grid-cols-2">
          <article class="rounded-xl bg-navy p-7 text-white sm:p-9">
            <Eye class="h-8 w-8 text-cyan" aria-hidden="true" />
            <p class="mt-8 text-xs font-bold uppercase tracking-[.18em] text-cyan">Visi</p>
            <h2 class="mt-4 text-2xl font-bold leading-snug">{{ companyProfile.vision }}</h2>
          </article>
          <article class="rounded-xl border border-line bg-white p-7 sm:p-9">
            <Compass class="h-8 w-8 text-brand" aria-hidden="true" />
            <p class="eyebrow mt-8">Misi</p>
            <ul class="space-y-4">
              <li v-for="mission in companyProfile.missions" :key="mission" class="flex gap-3 text-sm leading-6 text-slate-700">
                <Check class="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />{{ mission }}
              </li>
            </ul>
          </article>
        </div>
      </UiContainer>
    </section>
    <section class="section-pad bg-white">
      <UiContainer>
        <UiSectionHeader eyebrow="Nilai inti" title="Prinsip yang membentuk cara kami bekerja" description="Empat nilai ini menjadi arah dalam berkomunikasi, merancang solusi, dan menindaklanjuti pekerjaan." />
        <div class="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="(value, index) in companyValues" :key="value.code" class="bg-white p-6 sm:p-7">
            <span class="font-mono text-xs font-bold text-brand">{{ String(index + 1).padStart(2, '0') }}</span>
            <p class="mt-8 text-xs font-bold uppercase tracking-[.14em] text-slate-400">{{ value.code }}</p>
            <h3 class="mt-3 text-xl font-bold text-ink">{{ value.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-slate-600">{{ value.description }}</p>
          </article>
        </div>
      </UiContainer>
    </section>
    <section class="section-pad bg-mist">
      <UiContainer>
        <UiSectionHeader eyebrow="Layanan" title="Dari infrastruktur hingga solusi digital" description="Layanan dipetakan berdasarkan kebutuhan, kondisi lapangan, dan hasil yang ingin dicapai." />
        <div class="mt-10 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3"><ServicesServiceCard v-for="(service, index) in services" :key="service.slug" :service="service" :index="index" /></div>
      </UiContainer>
    </section>
    <section class="section-pad bg-white">
      <UiContainer>
        <UiSectionHeader eyebrow="Proses kerja" title="Dari konsultasi hingga dukungan setelah pekerjaan" description="Tahapan dapat disesuaikan dengan jenis layanan dan kompleksitas kebutuhan." />
        <SharedWorkProcess />
        <div class="mt-10 flex items-center gap-4 border-t border-line pt-8"><MapPin class="h-6 w-6 text-brand" aria-hidden="true" /><div><p class="text-xs font-bold uppercase tracking-[.16em] text-brand">Area layanan</p><p class="mt-1 font-bold text-ink">{{ siteConfig.serviceArea }}</p></div></div>
      </UiContainer>
    </section>
    <SharedServiceAssurance />
    <SharedFinalCta />
  </div>
</template>
