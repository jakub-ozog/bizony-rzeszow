<script setup>
import { ref } from 'vue'
import MainGalleryCard from '../components/MainGalleryCard.vue'
import galleryCardsData from '../data/galleryCardsData.js'

const galleryCards = ref(galleryCardsData)
</script>

<template>
  <div class="flex justify-center items-center mt-[7rem] mb-16 text-primaryRed font-urbanist">
    <h2
      class="font-urbanist font-bold text-3xl md:text-4xl lg:text-5xl text-primary-red uppercase relative leading-[4rem] after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:w-1/2 after:h-[2px] after:text-center after:mx-auto after:rounded-full after:z-20 after:bg-primaryRed"
    >
      bizonowa galeria
    </h2>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 p-2 md:p-0">
    <MainGalleryCard
      v-for="galleryCard in galleryCards"
      :key="galleryCard.id"
      :galleryCard="galleryCard"
    />
  </div>
</template>
