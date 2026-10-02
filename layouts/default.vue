<script setup lang="ts">
const requestUrl = useRequestURL()
const socialImage = `${requestUrl.origin}/og.jpg`

useSeoMeta({
  ogSiteName: 'FIXIT',
  ogLocale: 'id_ID',
  ogImage: socialImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterImage: socialImage,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="min-h-screen">
    <LayoutNavbar />
    <main><slot /></main>
    <LayoutFooter />
    <ConsultationModal />
  </div>
</template>
