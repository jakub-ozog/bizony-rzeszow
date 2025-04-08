<script setup>
import MatchCounterBg from '@/assets/images/match-counter-bg.webp'
import CountdownWatch from './CountdownWatch.vue';
</script>

<template>
  <section class="w-full text-white min-h-[45rem] md:min-h-[20rem] flex bg-cover bg-center relative font-urbanist"
    :style="{ backgroundImage: `url(${MatchCounterBg})` }">
    <CountdownWatch />
  </section>
</template>
