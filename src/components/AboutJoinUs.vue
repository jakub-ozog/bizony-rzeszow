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
      Masz pasję do baseballa? Chcesz trenować i grać w zgranej drużynie? <b>Bizony Rzeszów</b> czekają na Ciebie!
      Niezależnie od Twojego doświadczenia, jeśli masz zapał i chęć do nauki, dołącz do naszej ekipy. Kliknij poniżej i
      skontaktuj się, aby dowiedzieć się więcej o treningach i naborze!
    </p>

    <a href="mailto:jurczynski95@gmail.com"
      class="text-[0.75rem] font-normal mr-2 m-0 flex justify-center items-center text-center bg-white text-black rounded-2xl py-2 px-4 mt-4 mb-5">
      <span class="flex flex-row gap-3 items-center text-center">
        Dołącz do klubu
        <img class="w-3 h-3" src="/src/assets/icons/join-us-icon.svg" />
      </span>
    </a>

  </div>
</template>
