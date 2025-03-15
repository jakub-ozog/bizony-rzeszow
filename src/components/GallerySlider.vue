<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import article1Thumb from '@/assets/images/article_1_thumb.webp'
import article2Thumb from '@/assets/images/article_2_thumb.webp'
import article3Thumb from '@/assets/images/article_3_thumb.webp'

const photos = [
  { id: 1, src: article1Thumb, title: 'Article 1' },
  { id: 2, src: article2Thumb, title: 'Article 2' },
  { id: 3, src: article3Thumb, title: 'Article 3' },
]
</script>

<template>
  <section class="container mx-auto font-urbanist">
    <h1>This is Gallery View</h1>
    <Swiper>
      <SwiperSlide v-for="photo in photos" :key="photo.id">
        <img :src="photo.src" :alt="photo.title" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>
