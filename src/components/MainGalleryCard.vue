<script setup>
import { defineProps } from 'vue'

import userIcon from '@/assets/icons/user-icon.svg'
import calendarIcon from '@/assets/icons/calendar_icon.svg'
import arrowBtnRounded from '@/assets/icons/btn_arrow_rounded.svg'

const props = defineProps({
  galleryCard: Object,
})
</script>

<template>
  <div
    class="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden min-h-40 border-0 border-lightGrey border-solid"
  >
    <img :src="galleryCard.thumb" alt="gallery card" class="w-full h-64 object-cover" />
    <div class="p-6 text-left">
      <h3 class="font-bold text-xl mb-2 text-left">{{ galleryCard.title }}</h3>

      <div class="flex gap-4 items-center mb-4">
        <div class="flex flex-row items-center gap-2">
          <img :src="userIcon" alt="gallery card" class="w-4 object-cover" />
          <p class="text-gray-400 text-xs text-left font-light">{{ galleryCard.author }}</p>
        </div>
        <div class="flex flex-row items-center gap-2">
          <img :src="calendarIcon" alt="gallery card" class="w-4 object-cover" />
          <p class="text-gray-400 text-xs text-left font-light">{{ galleryCard.date }}</p>
        </div>
      </div>

      <p class="text-gray-500 text-sm text-left font-normal">{{ galleryCard.description }}</p>
      <button
        class="flex justify-center items-center text-left text-secondaryRed rounded-2xl py-2 px-4 my-4 pl-0 hover:underline"
      >
        <span class="text-[0.75rem] font-normal mr-2"> Czytaj więcej </span
        ><img class="w-4 h-4 hover:" :src="arrowBtnRounded" />
      </button>
    </div>
  </div>
</template>
