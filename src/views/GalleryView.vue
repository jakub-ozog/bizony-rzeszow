<script setup>
import GalleryEl1 from '@/components/galleries/GalleryEl1.vue'
import MainGallery from '@/components/MainGallery.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
</script>

<template>
  <main class="container mx-auto">
    <MainGallery />
    <!-- <GalleryEl1 /> -->
  </main>
</template>
