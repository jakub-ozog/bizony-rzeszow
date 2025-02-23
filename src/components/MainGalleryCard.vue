<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  galleryCard: Object,
})
</script>

<template>
  <div
    class="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden min-h-40 border border-lightGrey border-solid"
  >
    <img :src="galleryCard.thumb" alt="gallery card" class="w-full h-64 object-cover" />
    <div class="p-6">
      <h3 class="font-bold text-xl mb-2">{{ galleryCard.title }}</h3>
      <p class="text-gray-200 text-base">{{ galleryCard.description }}</p>
    </div>
  </div>
</template>
