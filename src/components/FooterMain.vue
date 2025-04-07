<script setup>
import { RouterLink } from 'vue-router'

import facebookIcon from '@/assets/icons/fb-icon.svg'
import instagramIcon from '@/assets/icons/ig-icon.svg'
import bizonyLogoWhite from '@/assets/logo/bizony_logo_white.svg'
// import patroniteIcon from '@/assets/icons/patronite-icon.svg'
</script>

<template>
  <footer class="bg-midBlack font-urbanist">
    <div class="container w-full mx-auto">
      <div class="flex flex-col lg:flex-row align-baseline justify-between text-white py-8 px-4 md:px-0">
        <!-- <div>
          <h5 class="font-bold">Dołącz do naszego Newslettera</h5>
          <h6 class="font-light text-sm">
            Bądź na bieżąco z meczami <br />
            i nowościami
          </h6>

          <form action="">
            <label class="hidden" for="email">E-mail adres</label>
            <input
              type="email"
              id="email"
              name="email"
              class="mt-4 p-2 w-full rounded-md border border-midGray bg-midBlack text-white"
              placeholder="Wpisz swój e-mail"
              required
            />
            <button
              type="submit"
              class="mt-6 p-2 bg-black text-white rounded-3xl w-full border border-grey"
            >
              Zapisz się
            </button>
          </form>
        </div> -->

        <img :src="bizonyLogoWhite" class="w-44 h-full mx-auto md:m-0" alt="bizony rzeszów logo" />

        <div class="grid grid-cols-1  md:grid-cols-3 mt-8 xl:mt-0 gap-8 lg:gap-32">
          <div class="flex flex-col gap-4 text-center md:text-left">
            <h5 class="text-xl font-bold text-gray-200">Mapa strony</h5>
            <router-link class="text-sm text-gray-300" to="/">Strona Główna</router-link>
            <router-link class="text-sm text-gray-300" to="/galeria">Galeria</router-link>

            <router-link class="text-sm text-gray-300" to="/blog">Blog</router-link>
            <router-link class="text-sm text-gray-300" to="/kontakt">Kontakt</router-link>
          </div>
          <div class="flex flex-col gap-4 text-center md:text-left">
            <h5 class="text-xl font-bold text-gray-200">Rozgrywki</h5>
            <!-- <p class="text-sm text-gray-300">Historia</p> -->
            <router-link class="text-sm text-gray-300" to="/rozgrywki/wyniki">Wyniki</router-link>
            <router-link class="text-sm text-gray-300" to="/rozgrywki/tabela-blb">Tabela BLB</router-link>
            <!-- <p class="text-sm text-gray-300">Regulamin</p> -->
          </div>
          <div class="flex flex-col gap-4 text-center md:text-left">
            <h3 class="text-xl font-bold text-gray-200">Drużyna</h3>
            <router-link class="text-sm text-gray-300" to="/druzyna/kadra">Kadra</router-link>
            <p class="text-sm text-gray-300">Statystyki</p>
            <router-link class="text-sm text-gray-300" to="/o-nas">O klubie</router-link>
          </div>
          <!-- <div class="flex flex-col gap-4 text-center md:text-left">
            <h3 class="text-xl font-bold">Sponsorzy</h3>
            <p class="text-sm text-gray-300">Nasi sponsorzy</p>
          </div> -->
          <!-- <div class="flex flex-col gap-4 text-center md:text-left">
            <h3 class="text-xl font-bold">Informacje</h3>
            <p class="text-sm text-gray-300">Regulamin</p>
            <p class="text-sm text-gray-300">Polityka prywatności</p>
            <p class="text-sm text-gray-300">Statut klubu</p>
          </div> -->
        </div>
      </div>
      <div
        class="flex flex-col-reverse justify-center sm:flex-row sm:justify-between w-full py-8 mx-auto border-t border-t-midGray gap-4">
        <div class="flex justify-center sm:justify-start">
          <p class="text-lightGrey">
            © {{ new Date().getFullYear() }} Bizony Rzeszów. All Rights Reserved
          </p>
        </div>
        <div class="flex justify-center sm:justify-end">
          <div class="flex flex-row gap-4">
            <a href="https://www.facebook.com/BizonyRzeszow" target="_blank">
              <img :src="facebookIcon" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/bizony__rzeszow/" target="_blank">
              <img :src="instagramIcon" alt="instagram" />
            </a>
            <!-- <img :src="patroniteIcon" alt="patronite" /> -->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
