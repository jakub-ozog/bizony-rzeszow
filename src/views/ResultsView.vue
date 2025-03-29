<script setup>
import { gamesSummary } from '@/data/gamesSummary.js'
import GamesSummaryTable from '@/components/GamesSummaryTable.vue';
</script>

<template>
  <main class="container mx-auto grid place-content-center mt-8 font-urbanist font-bold">
    <img src="@/assets/images/bison-bg.svg" alt="obrazek bizona" class="hidden sm:block w-[24rem] absolute left-0" />
    <div class="flex justify-center items-center mt-[6rem] mb-16 ">
      <h1
        class="text-3xl text-primaryRed md:text-4xl lg:text-5xl text-primary-red uppercase relative leading-[4rem] after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:w-full after:h-[2px] after:text-center after:mx-auto after:rounded-full after:z-20 after:bg-primaryRed">
        Wyniki
      </h1>
    </div>
  </main>

  <section class="container mx-auto my-12 font-urbanist px-2 md:px-0 text-center">
    <h2 class="text-3xl font-bold text-midGrayupper uppercase">Poniżej prezentujemy tabelę z wynikami meczów 2024/2025
    </h2>

    <div class="my-16 shadow-lg">
      <div class="text-left w-full bg-gradient-to-r from-accentBlue to-slate-950 text-white p-6 rounded-t-lg ">
        <h3 class="text-white text-xl font-semibold">2025</h3>
      </div>
      <GamesSummaryTable year="2025" />
    </div>

    <div class="my-16 shadow-lg">
      <div class="text-left w-full bg-gradient-to-r from-accentBlue to-slate-950 text-white p-6 rounded-t-lg">
        <h3 class="text-white text-xl font-semibold">2024</h3>
      </div>
      <GamesSummaryTable year="2024" />
    </div>

  </section>
</template>
