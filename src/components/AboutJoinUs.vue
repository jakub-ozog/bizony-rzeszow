<script setup>
import joinUsBg from '@/assets/images/join-us-bg.webp'

const joinBgImg = {
  backgroundImage: `url(${joinUsBg})`,
  backgroundSize: 'cover',
}
</script>

<template>
  <div class="flex flex-col justify-center items-center relative font-urbanist min-h-[22rem] p-6 my-12"
    :style="joinBgImg">
    <h3 class="text-5xl text-white mx-auto text-center font-semibold mb-4 mt-4">
      Zostań jednym z Bizonów
    </h3>
    <p class="text-white mx-auto text-center w-3/4 my-4">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequunt mollit anim id est laborum."
    </p>
    <button
      class="m-auto flex justify-center items-center text-center bg-white text-black rounded-2xl py-2 px-4 mt-4 mb-5">
      <a href="mailto:jurczynski95@gmail.com" class="text-[0.75rem] font-normal mr-2"> Dołącz do klubu </a><img
        class="w-3 h-3" src="/src/assets/icons/join-us-icon.svg" />
    </button>
  </div>
</template>
