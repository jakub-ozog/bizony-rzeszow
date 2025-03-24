<script setup>
import MatchCounterBg from '@/assets/images/match-counter-bg.webp'
</script>

<template>
  <section class="w-full text-white min-h-52 flex bg-cover bg-center relative font-urbanist"
    :style="{ backgroundImage: `url(${MatchCounterBg})` }">
    <div class="container mx-auto flex flex-col justify-center items-center">
      <p class="text-xl font-bold text-white">Do najbliższego meczu pozostało</p>
      <div class="flex items-center justify-center gap-4 mt-4 ">
        <div class="flex flex-col items-center text-white">
          <p class="text-4xl font-bold text-white">75</p>
          <p class="text-sm font-light text-white">dni</p>
        </div>
        <p>:</p>
        <div class="flex flex-col items-center">
          <p class="text-4xl font-bold text-white">12</p>
          <p class="text-sm font-light text-white">godzin</p>
        </div>
        <p>:</p>
        <div class="flex flex-col items-center">
          <p class="text-4xl font-bold text-white">45</p>
          <p class="text-sm font-light text-white">minut</p>
        </div>
        <p>:</p>
        <div class="flex flex-col items-center">
          <p class="text-4xl font-bold text-white">25</p>
          <p class="text-sm font-light text-white">sekund</p>
        </div>
      </div>
    </div>
  </section>
</template>
