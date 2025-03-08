<script setup>
import AboutMap from '@/components/AboutMap.vue'
import AboutJoinUs from '@/components/AboutJoinUs.vue'
import AboutTimeline from '@/components/AboutTimeline.vue'

import sectionColorBar from '@/assets/images/about-section-color-bar.svg'
import clubHeaderPhoto from '@/assets/images/about-club-header-photo.webp'
import teamStadiumPhoto from '@/assets/images/team-stadium-img.webp'
</script>

<template>
  <section class="container mx-auto grid place-content-center mt-24 font-urbanist font-bold">
    <img
      src="@/assets/images/bison-bg.svg"
      alt="obrazek bizona"
      class="hidden sm:block w-[24rem] absolute left-0"
    />
    <div class="flex justify-center items-center mt-[7rem] mb-16 text-primaryRed">
      <h1
        class="text-3xl md:text-4xl lg:text-5xl text-primary-red uppercase relative leading-[4rem] after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:w-full after:h-[2px] after:text-center after:mx-auto after:rounded-full after:z-20 after:bg-primaryRed"
      >
        o klubie
      </h1>
    </div>
  </section>

  <section class="max-w-[2560px] relative w-full mx-auto mb-[20rem] mt-12">
    <img
      :src="clubHeaderPhoto"
      class="absolute top-[-5rem] mx-auto flex items-center w-1/2 max-w-4xl left-0 right-0 z-50 h-auto"
      alt=""
    />
    <img :src="sectionColorBar" class="w-full mx-auto h-auto" alt="" />
  </section>

  <section class="container font-urbanist mx-auto">
    <h2 class="font-bold text-black text-2xl mb-4">Kim są Bizony</h2>

    <p class=" mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequunt mollit anim id est laborum.""Lorem ipsum
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequunt mollit anim id est laborum."....
    </p>

    <p class=" mb-4">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequunt mollit anim id est laborum.""Lorem ipsum
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequunt mollit anim id est laborum."....
    </p>

    <h2 class="font-bold text-black text-2xl mb-4">Misja naszego klubu</h2>

    <p class="font-xl mb-4">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequunt mollit anim id est laborum.""Lorem ipsum
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequunt mollit anim id est laborum."....
    </p>

    <h2 class="font-bold text-black text-2xl mb-8">Jak zaczynaliśmy</h2>
    <AboutTimeline />

    <h2 class="font-bold text-black text-2xl mb-8">Gdzie trenujemy</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div class="flex flex-col justify-between">
        <p class="text-xl mb-4 text-primaryRed">
          <span class="font-bold">SALOS Rzeszów</span> <br />
          Witolda Świadka 5a, <br />
          35-310 Rzeszów
        </p>
        <AboutMap />
      </div>

      <img :src="teamStadiumPhoto" class="w-full lg:w-[650px] h-full rounded-lg" alt="" />
    </div>

    <h2 class="font-bold text-black text-2xl mb-4">Społeczność i nasze działania</h2>

    <p class="font-xl mb-4">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequunt mollit anim id est laborum.""Lorem ipsum
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequunt mollit anim id est laborum."....
    </p>

    <AboutJoinUs />
  </section>
</template>
