<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

const modules = [Pagination, Navigation]

const photos = ['1.webp', '2.webp', '3.webp', '5.webp', '6.webp']
</script>

<template>
  <div>
    <section class="container mx-auto font-urbanist">
      <h1>This is Gallery View</h1>

      <Swiper
        :modules="modules"
        :pagination="{ clickable: true }"
        :navigation="true"
        class="relative select-none w-3/4"
      >
        <SwiperSlide v-for="photo in photos" :key="photo" class="select-none mx-auto">
          <img :src="`src/assets/images/galleries/gallery-1/${photo}`" class="cursor-grab" />
        </SwiperSlide>
      </Swiper>
    </section>
  </div>
</template>
