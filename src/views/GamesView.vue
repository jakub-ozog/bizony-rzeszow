<script setup>
import GamesTable from '@/components/GamesTable.vue';
</script>

<template>
  <main class="container mx-auto grid place-content-center mt-8 font-urbanist font-bold">
    <img src="@/assets/images/bison-bg.svg" alt="obrazek bizona" class="hidden sm:block w-[24rem] absolute left-0" />
    <div class="flex justify-center items-center mt-[6rem] mb-16 ">
      <h1
        class="text-3xl text-primaryRed md:text-4xl lg:text-5xl text-primary-red uppercase relative leading-[4rem] after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:w-full after:h-[2px] after:text-center after:mx-auto after:rounded-full after:z-20 after:bg-primaryRed">
        Rozgrywki
      </h1>
    </div>
  </main>

  <section class="container mx-auto my-12 font-urbanist px-2 md:px-0">
    <h2 class="text-4xl font-bold text-midGrayupper uppercase">Bałtycka Liga Baseballu</h2>
    <h3 class="text-2xl text-grey  font-semibold">
      Sezon 2025
    </h3>
    <GamesTable />
  </section>
</template>
