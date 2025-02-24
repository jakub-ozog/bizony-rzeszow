<script setup></script>

<template>
  <footer class="bg-midBlack font-urbanist">
    <div
      class="flex flex-row align-baseline justify-between text-white py-8 px-4 max-w-[1440px] w-full mx-auto"
    >
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

      <div class="grid grid-cols-1 md:grid-cols-4 gap-20">
        <div class="flex flex-col gap-4">
          <h5 class="text-xl font-bold">O nas</h5>
          <p class="text-sm">Historia</p>
          <p class="text-sm">Kontakt</p>
          <p class="text-sm">Regulamin</p>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-xl font-bold">Drużyna</h3>
          <p class="text-sm">Skład</p>
          <p class="text-sm">Terminarz</p>
          <p class="text-sm">Galeria</p>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-xl font-bold">Sponsorzy</h3>
          <p class="text-sm">Zostań naszym sponsorem</p>
          <p class="text-sm">Nasi sponsorzy</p>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-xl font-bold">Media</h3>
          <p class="text-sm">Facebook</p>
          <p class="text-sm">Instagram</p>
          <p class="text-sm">YouTube</p>
        </div>
      </div>
    </div>

    <div class="flex justify-between w-full p-4">
      <div class="">
        <p>© 2024 Bizony Rzeszów. All Rights Reserved</p>
      </div>
      <div>
        <img src="" alt="fa" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  </footer>
</template>
