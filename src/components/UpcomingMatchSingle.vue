<script setup>
import { defineProps } from 'vue'

defineProps({
  match: Object,
})
</script>

<template>
  <div class="bg-white min-h-[17rem] rounded-xl shadow-gray-200-md border border-gray-400">
    <div
      class="w-full text-center bg-accentBlue text-white font-bold font-urbanist rounded-md py-1 leading-1"
    >
      <p>{{ match.date }}</p>
    </div>

    <div class="p-7 flex items-center justify-around">
      <div class="flex flex-col items-center">
        <img :src="match.team1Logo" alt="Logo drużyny 1" class="w-20 h-20" />
        <p class="text-lightBlack font-bold text-md">{{ match.team1 }}</p>
      </div>

      <div class="flex flex-col items-center">
        <p class="text-lightBlack font-bold text-2xl">vs</p>
        <p class="text-lightBlack font-bold text-3xl">{{ match.time }}</p>
      </div>

      <div class="flex flex-col items-center">
        <img :src="match.team2Logo" alt="Logo drużyny 1" class="w-20 h-20" />
        <p class="text-lightBlack font-bold text-md">{{ match.team2 }}</p>
      </div>
    </div>

    <button
      class="flex justify-center items-center text-center mx-auto bg-secondaryRed text-white rounded-2xl py-2 px-4 my-4"
    >
      <span class="text-[0.75rem] font-normal mr-2"> Zobacz szczegóły </span>
      <img class="w-3 h-3" src="@/assets/icons/baseball_ball_icon.svg" />
    </button>
  </div>
</template>
