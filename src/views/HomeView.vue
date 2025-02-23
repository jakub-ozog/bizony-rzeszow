<script setup>
import UpcomingMatches from '@/components/UpcomingMatches.vue'
import UpcomingMatchCounter from '@/components/UpcomingMatchCounter.vue'
import MainNews from '@/components/MainNews.vue'
import MainGallery from '@/components/MainGallery.vue'
</script>

<template>
  <section class="container mx-auto grid place-content-center mt-24">
    <img
      src="@/assets/images/bison-bg.svg"
      alt="obrazek bizona"
      class="hidden sm:block w-[24rem] absolute left-0"
    />
    <div class="flex gap-8 flex-col items-center">
      <h1 class="text-9xl font-lobster text-secondaryRed">Bizony Rzeszów</h1>
      <h2 class="text-xl text-lightGrey font-urbanist font-thin italic">
        Razem budujemy historię bejsbolu
      </h2>
      <img src="@/assets/images/bat-ball-icon.svg" alt="baseball ikona" class="w-24 mt-3" />
    </div>
  </section>

  <section class="mx-auto w-full mt-24">
    <div class="grid grid-cols-4 overflow-hidden">
      <img src="@/assets/images/player_2_card.png" class="w-full h-full object-cover" alt="" />
      <img src="@/assets/images/player_4_card.png" class="w-full h-full object-cover" alt="" />
      <img src="@/assets/images/player_3_card.png" class="w-full h-full object-cover" alt="" />
      <img src="@/assets/images/player_1_card.png" class="w-full h-full object-cover" alt="" />
    </div>
  </section>

  <section class="container mx-auto text-center my-12 font-urbanist font-bold">
    <UpcomingMatches />
  </section>

  <UpcomingMatchCounter />

  <section class="max-w-[1440px] w-full mx-auto text-center my-12 font-urbanist font-bold">
    <MainNews />
  </section>

  <section class="container mx-auto text-center my-12 font-urbanist font-bold">
    <MainGallery />
  </section>
</template>
