<script setup>
import MatchCounterBg from '@/assets/images/match-counter-bg.webp'
</script>

<template>
  <section
    class="w-full text-white min-h-52 flex bg-cover bg-center relative font-urbanist"
    :style="{ backgroundImage: `url(${MatchCounterBg})` }"
  >
    <div class="container mx-auto flex flex-col justify-center items-center">
      <p class="text-xl font-bold text-white">Do najbliższego meczu pozostało</p>
      <div class="flex items-center justify-center gap-4 mt-4">
        <div class="flex flex-col items-center">
          <p class="text-4xl font-bold">75</p>
          <p class="text-sm font-light">dni</p>
        </div>
        <p>:</p>
        <div class="flex flex-col items-center">
          <p class="text-4xl font-bold">12</p>
          <p class="text-sm font-light">godzin</p>
        </div>
        <p>:</p>
        <div class="flex flex-col items-center">
          <p class="text-4xl font-bold">45</p>
          <p class="text-sm font-light">minut</p>
        </div>
        <p>:</p>
        <div class="flex flex-col items-center">
          <p class="text-4xl font-bold">25</p>
          <p class="text-sm font-light">sekund</p>
        </div>
      </div>
    </div>
  </section>
</template>
