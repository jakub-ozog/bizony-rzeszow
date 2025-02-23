<script setup>
import { ref } from 'vue'
import UpcomingMatchSingle from '../components/UpcomingMatchSingle.vue'
import matchesData from '../data/upcomingMatchesData.js' // Assuming you moved the data to a separate file

const matches = ref(matchesData)
</script>

<template>
  <div class="flex justify-center items-center mt-[7rem] mb-16   text-primaryRed">
    <h2
      class="text-5xl text-primary-red uppercase relative leading-[4rem] after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:w-1/2 after:h-[2px] after:text-center after:mx-auto after:rounded-full after:z-20 after:bg-primaryRed"
    >
      nadchodzące mecze
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
    <UpcomingMatchSingle v-for="match in matches" :key="match.id" :match="match" />
  </div>
</template>
