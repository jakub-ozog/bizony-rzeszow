<script setup>
import supportGroupImg from '@/assets/images/support-group.png'

defineProps({
  match: Object,
})
</script>

<template>
  <div
    class="bg-secondaryRed min-h-[22rem] flex flex-col-reverse xl:flex-row items-center justify-between text-white relative">
    <div>
      <img :src="supportGroupImg" alt="support group" class="static xl:absolute bottom-0" />
    </div>
    <div class="m-auto xl:m-0 text-center xl:text-right w-full xl:w-[60%] p-8 flex flex-col items-center xl:items-end">
      <h2 class="text-3xl md:text-5xl xl:text-[4rem] font-semibold font-urbanist mb-4 text-white">
        Wesprzyj nas poza boiskiem!
      </h2>
      <p class="font-normal text-white text-sm mb-8 w-full md:w-3/4 xl:w-full">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequunt mollit anim id est laborum."...
      </p>
      <button
        class="m-auto xl:m-0 flex justify-center items-center text-center bg-white text-black rounded-2xl py-2 px-4 my-4">
        <span class="text-[0.75rem] font-normal mr-2"> Kliknij aby wesprzeć </span><img class="w-3 h-3"
          src="/src/assets/icons/handshake_icon.svg" />
      </button>
    </div>
  </div>
</template>
