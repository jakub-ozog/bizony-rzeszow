<script setup>
import { ref } from 'vue';
import calendarIcon from '@/assets/icons/calendar_icon.svg'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

const modules = [FreeMode, Navigation, Thumbs, Pagination];

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
const props = defineProps({
  galleryCard: Object,
});


const images = import.meta.glob('@/assets/images/galleries/gallery-6/*.webp', { eager: true });
const photos = Object.values(images).map((img) => img.default);
</script>

<template>
  <section class="container mx-auto font-urbanist">
    <h1 class="font-bold text-5xl text-primaryRed">Bizony Rzeszów - Wziards Opole (22.03.2025) </h1>
    <div class="flex items-center mt-1 gap-2">
      <img :src="calendarIcon" alt="" class="w-4" />
      <p class="text-lightGrey text-base">23.03.2025</p>
    </div>
    <h2 class="text-xl text-lightBlack mt-4 mb-12">
      W sobotę 22 marca Bizony rozpoczęły sezon 2025. W towarzyskim dwumeczu Bizony podzieliły się zwycięstwami z
      Wizards Opole. Piękna wiosenna pogoda sprawiła, że zawodnicy z przyjemnością spędzili kilka godzin na boisku w
      Żorach.

    </h2>

    <swiper :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" :pagination="{
      type: 'fraction',
    }" class="max-w-[1000px]">
      <swiper-slide v-for="(photo, index) in photos" :key="index">
        <div class="w-full h-[400px] md:h-[600px] lg:h-[700px] relative">
          <img :src="photo" class='absolute inset-0 w-full h-full object-cover' />
        </div>
      </swiper-slide>
    </swiper>

    <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="5" :slidesPerView="4" :watchSlidesProgress="true"
      :modules="modules" class="mySwiper max-w-[1000px]">
      <swiper-slide class="opacity-75 mt-8" v-for="(photo, index) in photos" :key="index">
        <div class="w-full h-36 relative">
          <img :src="photo" class='absolute inset-0 w-full h-full object-cover cursor-grab select-none' />
        </div>
      </swiper-slide>
    </swiper>


  </section>
</template>
