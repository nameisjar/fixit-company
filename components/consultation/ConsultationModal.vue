<script setup lang="ts">
import { X } from 'lucide-vue-next'
import { generateWhatsAppUrl } from '~/utils/whatsapp'
import { services } from '~/data/services'

const { isConsultationOpen, selectedService, closeConsultation } = useConsultation()
const dialog = ref<HTMLElement | null>(null)
const form = reactive({ name: '', phone: '', service: '', location: '', description: '' })
const error = ref('')

watch(isConsultationOpen, async (open) => {
  if (open) {
    form.service = selectedService.value
    await nextTick()
    dialog.value?.focus()
    document.body.style.overflow = 'hidden'
  } else if (import.meta.client) {
    document.body.style.overflow = ''
  }
})

function submit() {
  if (!form.name || !form.phone || !form.service || !form.location || !form.description) {
    error.value = 'Lengkapi semua bidang sebelum melanjutkan.'
    return
  }
  error.value = ''
  const message = `Halo FIXIT,\n\nSaya ingin berkonsultasi mengenai layanan ${form.service}.\n\nNama: ${form.name}\nNomor WhatsApp: ${form.phone}\nLokasi: ${form.location}\nKebutuhan: ${form.description}`
  window.open(generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeConsultation()
}
</script>

<template>
  <Teleport to="body">
    <div v-if="isConsultationOpen" class="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6" @keydown="onKeydown" @click.self="closeConsultation">
      <section ref="dialog" role="dialog" aria-modal="true" aria-labelledby="consultation-title" tabindex="-1" class="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
        <div class="flex items-start justify-between border-b border-line px-5 py-5 sm:px-8">
          <div>
            <p class="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand">Konsultasi awal</p>
            <h2 id="consultation-title" class="text-2xl font-bold text-ink">Ceritakan kebutuhan Anda</h2>
          </div>
          <button class="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-slate-500 hover:text-ink" aria-label="Tutup formulir" @click="closeConsultation"><X class="h-5 w-5" /></button>
        </div>
        <form class="grid gap-5 px-5 py-6 sm:grid-cols-2 sm:px-8 sm:py-8" @submit.prevent="submit">
          <label class="grid gap-2 text-sm font-semibold text-ink">Nama
            <input v-model.trim="form.name" autocomplete="name" class="h-12 rounded-lg border border-line px-4 font-normal focus:border-brand" />
          </label>
          <label class="grid gap-2 text-sm font-semibold text-ink">Nomor WhatsApp
            <input v-model.trim="form.phone" autocomplete="tel" inputmode="tel" class="h-12 rounded-lg border border-line px-4 font-normal focus:border-brand" />
          </label>
          <label class="grid gap-2 text-sm font-semibold text-ink">Layanan
            <select v-model="form.service" class="h-12 rounded-lg border border-line bg-white px-4 font-normal focus:border-brand">
              <option value="" disabled>Pilih layanan</option>
              <option v-for="service in services" :key="service.slug" :value="service.navTitle">{{ service.navTitle }}</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </label>
          <label class="grid gap-2 text-sm font-semibold text-ink">Lokasi
            <input v-model.trim="form.location" autocomplete="address-level2" class="h-12 rounded-lg border border-line px-4 font-normal focus:border-brand" />
          </label>
          <label class="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">Deskripsi kebutuhan
            <textarea v-model.trim="form.description" rows="4" class="rounded-lg border border-line px-4 py-3 font-normal focus:border-brand" />
          </label>
          <p v-if="error" role="alert" class="text-sm font-semibold text-red-700 sm:col-span-2">{{ error }}</p>
          <div class="sm:col-span-2">
            <UiButton type="submit" class="w-full sm:w-auto">Lanjutkan ke WhatsApp</UiButton>
            <p class="mt-3 text-xs leading-5 text-slate-500">Data tidak disimpan di website. Pesan akan disiapkan untuk dikirim melalui WhatsApp.</p>
          </div>
        </form>
      </section>
    </div>
  </Teleport>
</template>
