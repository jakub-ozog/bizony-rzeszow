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


const images = import.meta.glob('@/assets/images/galleries/gallery-4/*.webp', { eager: true });
const photos = Object.values(images).map((img) => img.default);
</script>

<template>
  <section class="container mx-auto font-urbanist">
    <h1 class="font-bold text-5xl text-primaryRed">Razem w Baseballu (24.08.2024)</h1>
    <div class="flex items-center mt-1 gap-2">
      <img :src="calendarIcon" alt="" class="w-4" />
      <p class="text-lightGrey text-base">25.08.2024</p>
    </div>
    <h2 class="text-xl text-lightBlack mt-4 mb-12">
      W sobotę, 24 sierpnia, Bizony Rzeszów zorganizowały warsztaty „Razem w baseballu” na boisku „Salos” przy ul.
      Świadka. Podczas wydarzenia uczestnicy poznali historię baseballa w wybranych krajach, zanurzając się w wyjątkowy
      świat tej dyscypliny. Chętni mogli wziąć udział w podstawowym treningu baseballowym, a na zakończenie odbył się
      wewnętrzny mecz pokazowy, podczas którego Bizony sprawdziły swoją formę.

    </h2>

    <swiper :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" :pagination="{
      type: 'fraction',
    }" class="">
      <swiper-slide class="h-unset" v-for="(photo, index) in photos" :key="index">
        <img :src="photo" class='cursor-grab select-none h-full' />
      </swiper-slide>
    </swiper>
    <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="5" :slidesPerView="4" :watchSlidesProgress="true"
      :modules="modules" class="mySwiper">
      <swiper-slide class="opacity-75 mt-8 h-unset" v-for="(photo, index) in photos" :key="index">
        <img :src="photo" class='cursor-grab select-none h-full' />
      </swiper-slide>
    </swiper>


  </section>
</template>
