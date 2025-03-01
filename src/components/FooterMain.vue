<script setup>
import facebookIcon from '@/assets/icons/fb-icon.svg'
import instagramIcon from '@/assets/icons/ig-icon.svg'
import patroniteIcon from '@/assets/icons/patronite-icon.svg'
</script>

<template>
  <footer class="bg-midBlack font-urbanist">
    <div class="container w-full mx-auto">
      <div class="flex flex-row align-baseline justify-between text-white py-8">
        <div class="">
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
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-[8rem]">
          <div class="flex flex-col gap-4">
            <h5 class="text-xl font-bold">O nas</h5>
            <p class="text-sm text-gray-300">Historia</p>
            <p class="text-sm text-gray-300">Kontakt</p>
            <p class="text-sm text-gray-300">Regulamin</p>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-xl font-bold">Drużyna</h3>
            <p class="text-sm text-gray-300">Skład</p>
            <p class="text-sm text-gray-300">Terminarz</p>
            <p class="text-sm text-gray-300">Galeria</p>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-xl font-bold">Sponsorzy</h3>
            <p class="text-sm text-gray-300">Zostań sponsorem</p>
            <p class="text-sm text-gray-300">Nasi sponsorzy</p>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-xl font-bold">Informacje</h3>
            <p class="text-sm text-gray-300">Regulamin</p>
            <p class="text-sm text-gray-300">Polityka prywatności</p>
            <p class="text-sm text-gray-300">Statut klubu</p>
          </div>
        </div>
      </div>
      <div class="flex justify-between w-full py-8 mx-auto border-t border-t-midGray">
        <div class="text-lightGrey">
          <p>© 2024 Bizony Rzeszów. All Rights Reserved</p>
        </div>
        <div class="flex flex-row gap-4 mr-8">
          <img :src="facebookIcon" alt="facebook" />
          <img :src="instagramIcon" alt="instagram" />
          <img :src="patroniteIcon" alt="patronite" />
        </div>
      </div>
    </div>
  </footer>
</template>
