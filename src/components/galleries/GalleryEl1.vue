<script setup>
import calendarIcon from '@/assets/icons/calendar_icon.svg'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

const modules = [Pagination, Navigation]

const images = import.meta.glob('@/assets/images/galleries/gallery-1/*.webp', { eager: true })
const photos = Object.values(images).map((img) => img.default)

// const photos = ['1.webp', '2.webp', '3.webp', '5.webp', '6.webp']
</script>

<template>
  <section class="container mx-auto font-urbanist">
    <h1 class="font-bold text-5xl text-primaryRed">Dzień osiedla Miłocin</h1>
    <div class="flex items-center mt-1 gap-2">
      <img :src="calendarIcon" alt="" class="w-4" />
      <p class="text-lightGrey text-base">31.08.2024</p>
    </div>
    <h2 class="text-xl text-lightBlack mt-4">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis incidunt
      necessitatibus voluptatem culpa id, quisquam totam unde itaque voluptatum earum. Aut, repellat
      facilis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis incidunt
      necessitatibus voluptatem culpa id, quisquam totam unde itaque voluptatum earum. Aut, repellat
      facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae accusantium nisi.
    </h2>

    <Swiper :modules="modules" :pagination="{ clickable: true }" :navigation="true" :spaceBetween="20"
      class="relative select-none w-3/4 my-12 rounded-lg">
      <SwiperSlide v-for="(photo, index) in photos" :key="index" class="select-none mx-auto">
        <!-- <img :src="`src/assets/images/galleries/gallery-1/${photo}`" class="cursor-grab rounded-lg" /> -->
        <!-- <img :src="new URL(`@/assets/images/galleries/gallery-1/${photo}`, import.meta.url).href"
          class="cursor-grab rounded-lg" /> -->
        <img :src="photo" alt="">
      </SwiperSlide>
    </Swiper>

    <p class="my-8 text-lightBlack">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam
      voluptates, quidem, quod, quos quas quae quia quibusdam, voluptate doloribus doloremque
      voluptatum. Quisquam voluptates, quidem, quod, quos quas quae quia quibusdam, voluptate
      doloribus doloremque voluptatum.
    </p>
    <p class="my-8 text-lightBlack">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam
      voluptates, quidem, quod, quos quas quae quia quibusdam, voluptate doloribus doloremque
      voluptatum. Quisquam voluptates, quidem, quod, quos quas quae quia quibusdam, voluptate
      doloribus doloremque voluptatum.

      <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, nam ipsam accusantium
      repellendus voluptatem atque adipisci totam quia! Magnam minima quisquam, vero officia,
      tenetur, aspernatur pariatur suscipit fuga animi eligendi accusantium dolores hic sint non
      modi quae consectetur optio asperiores necessitatibus quod similique maiores iste. Itaque, aut
      quam temporibus, ipsum sapiente non expedita inventore sint assumenda quidem commodi
      necessitatibus error ullam beatae, nostrum corrupti quisquam doloremque magnam corporis
      exercitationem. Perspiciatis accusantium ut quidem autem at, suscipit maxime. Ipsum?
    </p>
  </section>
</template>
