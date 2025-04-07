<script setup>
import UpcomingMatches from '@/components/UpcomingMatches.vue'
import UpcomingMatchCounter from '@/components/UpcomingMatchCounter.vue'
import MainNews from '@/components/MainNews.vue'
import MainGallery from '@/components/MainGallery.vue'
import PlayerFeatured from '@/components/PlayerFeatured.vue'
import AboutJoinUs from '@/components/AboutJoinUs.vue'
import HomeTable from '@/components/HomeTable.vue'
import arrowBtnRounded from '@/assets/icons/btn_arrow_rounded.svg'
</script>

<template>
  <section class="container mx-auto grid place-content-center mt-24">
    <img src="@/assets/images/bison-bg.svg" alt="obrazek bizona" class="hidden sm:block w-[24rem] absolute left-0" />
    <div class="flex gap-8 flex-col items-center text-center">
      <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-lobster text-secondaryRed">
        Bizony Rzeszów
      </h1>
      <h2 class="text-sm md:text-xl text-lightGrey font-urbanist font-thin italic">
        Baseball to nasz styl życia
      </h2>
      <!-- <img src="@/assets/images/bat-ball-icon.svg" alt="baseball ikona" class="w-14 lg:w-24 mt-3" /> -->
      <hr class="border border-superLightGrey w-full mt-3" />
      <!-- <div class="flex flex-col items-center py-11">
        <h3 class="text-xl md:text-2xl text-lightGrey tracking-wide font-light my-4">
          NASI SPONSORZY
        </h3>
        <img src="@/assets/images/sponsor-logo.svg" class="mt-2 w-32 md:w-[200px]" alt="" />
      </div> -->
    </div>
  </section>

  <section class="mx-auto max-w-[2560px] mt-24">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-1 lg:gap-5 overflow-hidden">
      <img src="@/assets/images/player_2_card.png" class="w-full  m-auto sm:m-0 sm:w-full h-full object-cover" alt="" />
      <img src="@/assets/images/player_4_card.png" class="w-full  m-auto sm:m-0 sm:w-full h-full object-cover" alt="" />
      <img src="@/assets/images/player_3_card.png" class="w-full  m-auto sm:m-0 sm:w-full h-full object-cover" alt="" />
      <img src="@/assets/images/player_1_card.png" class="w-full  m-auto sm:m-0 sm:w-full h-full object-cover" alt="" />
    </div>
  </section>

  <section class="container mx-auto text-center mt-12 font-urbanist font-bold mb-[-4rem]">
    <UpcomingMatches />
  </section>

  <UpcomingMatchCounter />

  <section class="container w-full mx-auto text-center my-12 font-urbanist font-bold">
    <HomeTable />
  </section>

  <section class="container w-full mx-auto text-center my-12 font-urbanist font-bold">
    <MainNews />
  </section>

  <section class="container mx-auto text-center my-12 font-urbanist font-bold">
    <MainGallery />
    <router-link to="/galeria" class="mx-auto text-center mt-2 flex justify-end p-2">
      <button class="flex justify-center items-center text-center text-primaryRed underline rounded-2xl py-2  mt-8">
        <span class="text-[0.75rem] font-semibold mr-2">Zobacz więcej zdjęć </span> <img class="w-3 h-3"
          :src="arrowBtnRounded" />
      </button>
    </router-link>
  </section>

  <section class="container mx-auto my-12 font-urbanist font-bold px-2 md:px-0">
    <PlayerFeatured />
  </section>

  <section class="container mx-auto mt-[6rem] mb-12 font-urbanist">
    <!-- <SupportUs /> -->
    <AboutJoinUs />
  </section>
</template>
