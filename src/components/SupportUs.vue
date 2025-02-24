<script setup>
import supportGroupImg from '@/assets/images/support-group.png'

defineProps({
  match: Object,
})
</script>

<template>
  <div
    class="bg-secondaryRed min-h-[22rem] flex flex-col md:flex-row items-center justify-between text-white relative"
  >
    <div>
      <img :src="supportGroupImg" alt="support group" class="absolute bottom-0" />
    </div>
    <div class="text-right w-[40%] md:w-[60%] p-8 flex flex-col items-end">
      <h2 class="text-[4rem] font-semibold font-urbanist mb-4">Wesprzyj nas poza boiskiem!</h2>
      <p class="font-normal text-sm mb-8">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequunt mollit anim id est laborum."...
      </p>
      <button
        class="flex justify-center items-center text-center bg-white text-black rounded-2xl py-2 px-4 my-4"
      >
        <span class="text-[0.75rem] font-normal mr-2"> Kliknij aby wesprzeć </span
        ><img class="w-3 h-3" src="/src/assets/icons/handshake_icon.svg" />
      </button>
    </div>
  </div>
</template>
