<script setup>

import AboutJoinUs from '@/components/AboutJoinUs.vue'
import AboutTimeline from '@/components/AboutTimeline.vue'
import sectionColorBar from '@/assets/images/about-section-color-bar.svg'
import clubHeaderPhoto from '@/assets/images/about-club-header-photo.webp'

</script>

<template>
  <section class="container mx-auto grid place-content-center mt-24 font-urbanist font-bold">
    <img src="@/assets/images/bison-bg.svg" alt="obrazek bizona" class="hidden sm:block w-[24rem] absolute left-0" />
    <div class="flex justify-center items-center mb-16 ">
      <h1
        class="text-3xl md:text-4xl lg:text-5xl text-primaryRed uppercase relative leading-[4rem] after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:w-full after:h-[2px] after:text-center after:mx-auto after:rounded-full after:z-20 after:bg-primaryRed">
        o klubie
      </h1>
    </div>
  </section>

  <section class="max-w-[2560px] relative w-full mx-auto mb-[20rem] mt-12">
    <img :src="clubHeaderPhoto"
      class="absolute top-[-5rem] mx-auto flex items-center w-1/2 max-w-4xl left-0 right-0 z-20 h-auto" alt="" />
    <img :src="sectionColorBar" class="w-full mx-auto h-auto" alt="" />
  </section>

  <section class="container font-urbanist mx-auto">
    <h2 class="font-bold text-black text-2xl mb-4">Kim są Bizony</h2>

    <p class=" mb-4">
      Bizony Rzeszów powstały, aby rozwijać baseball w mieście i stworzyć drużynę dla lokalnych pasjonatów. Przejęły
      inicjatywę po Eagles Rzeszów, nadając zespołowi nową nazwę i strukturę. Pierwszy mecz rozegrały w październiku
      2023 roku, a w lipcu 2024 odniosły historyczne zwycięstwo nad Kraków Kings. W 2025 roku dołączyły do Bałtyckiej
      Ligi Baseballu, umacniając swoją pozycję na baseballowej mapie Polski.
    </p>

    <p class=" mb-4">
      Bizonów najłatwiej spotkać na boisku „Salos” w pobliżu pływalni Delfin oraz ZSO nr 4 w Rzeszowie, a także podczas
      lokalnych wydarzeń sportowo-kulturalnych.
    </p>

    <h2 class="font-bold text-black text-2xl mb-4">Misja naszego klubu</h2>

    <p class="font-xl mb-4">
      Nadrzędnym celem Bizonów Rzeszów jest popularyzacja baseballu w Rzeszowie. Dzięki współpracy z m.in. Rzeszowskim
      Domem Kultury, bierzemy udział w lokalnych wydarzeniach sportowo-kulturalnych, prowadzimy zajęcia dla dzieci
      podczas letnich półkolonii oraz organizujemy mecze baseballowe. Działania Bizonów mają na celu stworzenie
      alternatywnej ścieżki rozwoju sportowego i personalnego, opartej na wyjątkowej atmosferze i kulturze baseballu. Ta
      dyscyplina, z jej unikalnymi zasadami i podejściem do gry, wyróżnia się na tle innych popularniejszych sportów,
      oferując uczestnikom nie tylko rozwój fizyczny, ale także integrację w duchu współpracy i pasji.
    </p>

    <h2 class="font-bold text-black text-2xl mb-8">Jak zaczynaliśmy</h2>
    <AboutTimeline />



    <h2 class="font-bold text-black text-2xl mb-4">Społeczność i nasze działania</h2>


    <AboutJoinUs />
  </section>
</template>
