<script setup>
import { onMounted, shallowRef } from 'vue'
import { useRoute } from 'vue-router'
import { mainGalleryCards } from '@/data/galleryCardsData' // Ścieżka do danych
import { defineAsyncComponent } from 'vue'

const route = useRoute()
const gallerySingle = shallowRef(null)

// Znalezienie posta na podstawie slug w URL
onMounted(() => {
  const slug = route.params.slug
  const selectedGalleries = mainGalleryCards.find((p) => p.slug === slug)

  // Dynamiczny import komponentu
  if (selectedGalleries) {
    gallerySingle.value = {
      ...selectedGalleries,
      component: defineAsyncComponent(selectedGalleries.component), // Użycie defineAsyncComponent do dynamicznego importu
    }
  }
})
</script>

<template>
  <div class="p-4" v-if="gallerySingle">
    <component :is="gallerySingle.component" />
  </div>
  <div v-else class="text-center text-gray-500">Post not found</div>
</template>
