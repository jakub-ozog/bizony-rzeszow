<script setup>
import { RouterLink } from 'vue-router';
import playerFeaturedImg from '@/assets/images/player_featured_2.webp'
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8 mt-8 align-baseline">
    <div>
      <h5 class="font-bold text-accentBlue text-3xl">Norbert Wietecha</h5>
      <p class="text-lightGrey font-thin">zawodnik</p>

      <div class="lg:w-3/4">
        <p class="font-semibold text-base mt-8 mb-4">
          Jak to możliwe, że chłopak z Jasła zaczął grać w baseball? Przecież ten sport nie jest znany na Podkarpaciu.
        </p>
        <p class="text-base font-normal">
          Baseball był u nas zakorzeniony bardziej niż piłka nożna. Wiesz, nie każdy grał w piłkę pod blokiem, ale każdy
          grał w baseball. Nawet w szkole mieliśmy sekcję baseballu. Jak ktoś chciał pograć, to dostawał rękawicę i
          wszystko co było potrzebne do trenowania. Przez tą sekcję przewinęło się setki chłopaków. Dziś jakbyś
          przeszedł po domach, to pewnie prawie każdy ma jeszcze rękawicę do baseballu. Spytałbyś się czy gramy mecz, to
          każdy wiedziałby o co chodzi i wyszedłby pograć w baseball.
        </p>

        <p class="font-semibold text-base mt-8 mb-4">
          W którym roku zacząłeś grać w Panterach Jasło?
        </p>
        <div class="relative">
          <p class="text-base font-normal">
            To trochę prawda. Po latach powróciliśmy z żoną do Rzeszowa, a pewnego wieczoru
            przeglądałem Facebooka i nagle znalazłem ogłoszenie o treningach baseballowych.
            Natychmiast obudziły się we mnie te dziecięce marzenia i postanowiłem podjąć rękawicę
            kolejny raz. Szczęśliwie spotkałem innych pasjonatów baseballu w Rzeszowie.
          </p>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#f6f6f6]"></div>
        </div>
      </div>
      <router-link to="/blog/poznaj-bizona-norbert-wietecha">
        <button
          class="flex justify-center items-center text-center border border-primaryRed text-primaryRed rounded-2xl py-2 px-4 my-4 mt-8">
          <span class="text-[0.75rem] font-normal mr-2">Przeczytaj cały wywiad z Bizonem tutaj </span>
        </button>
      </router-link>
    </div>

    <div class="hidden lg:block relative w-full">
      <img :src="playerFeaturedImg" class="absolute top-0 right-0 max-w-[1000px]" alt="" />
    </div>
  </div>
</template>
