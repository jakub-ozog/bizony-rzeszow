<script setup>
import { defineProps } from 'vue'
import calendarIcon from '@/assets/icons/calendar_icon.svg'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

const modules = [Pagination, Navigation]

const images = import.meta.glob('@/assets/images/galleries/gallery-2/*.webp', { eager: true })
const photos = Object.values(images).map((img) => img.default)

const props = defineProps({
  galleryCard: Object,
})

// const photos = ['1.webp', '2.webp', '3.webp', '5.webp', '6.webp']
</script>

<template>
  <section class="container mx-auto font-urbanist">
    <h1 class="font-bold text-5xl text-primaryRed">Bizony Rzeszów - Kings Kraków (14.07.2024)</h1>
    <!-- <h1 class="font-bold text-5xl text-primaryRed">{{ article.title }}</h1> -->
    <div class="flex items-center mt-1 gap-2">
      <img :src="calendarIcon" alt="" class="w-4" />
      <p class="text-lightGrey text-base">15.07.2024</p>
    </div>
    <h2 class="text-xl text-lightBlack mt-4">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis incidunt
      necessitatibus voluptatem culpa id, quisquam totam unde itaque voluptatum earum. Aut, repellat
      facilis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis incidunt
      necessitatibus voluptatem culpa id, quisquam totam unde itaque voluptatum earum. Aut, repellat
      facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae accusantium nisi.
    </h2>

    <Swiper :modules="modules" :pagination="{ clickable: true }" :navigation="true" :spaceBetween="20"
      class="relative select-none w-full md:w-3/4 my-12 rounded-lg">
      <SwiperSlide v-for="(photo, index) in photos" :key="index" class="select-none mx-auto">
        <!-- <img :src="`src/assets/images/galleries/gallery-1/${photo}`" class="cursor-grab rounded-lg" /> -->
        <!-- <img :src="new URL(`@/assets/images/galleries/gallery-1/${photo}`, import.meta.url).href"
          class="cursor-grab rounded-lg" /> -->
        <img :src="photo" alt="" class="cursor-grab rounded-lg" />
      </SwiperSlide>
    </Swiper>


  </section>
</template>
