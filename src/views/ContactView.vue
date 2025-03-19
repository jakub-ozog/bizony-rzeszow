<script setup>
import AboutJoinUs from '@/components/AboutJoinUs.vue';
</script>

<template>

  <section class="container mx-auto grid place-content-center mt-12 font-urbanist font-bold">
    <img src="@/assets/images/bison-bg.svg" alt="obrazek bizona" class="hidden sm:block w-[24rem] absolute left-0" />
    <div class="flex justify-center items-center mb-16 text-primaryRed">
      <h1
        class="text-3xl md:text-4xl lg:text-5xl text-primary-red uppercase relative leading-[4rem] after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:w-full after:h-[2px] after:text-center after:mx-auto after:rounded-full after:z-20 after:bg-primaryRed">
        kontakt
      </h1>


    </div>
    <div class="text-center my-8 ">
      <div class="bg-white p-8 rounded-lg shadow-lg w-1/2 mx-auto">

        <h2 class="text-2xl">Krzysztof Jurczyński</h2>


        <p>tel: +48 570 168 991</p>
        <div>
          <p>email
            <a href="mailto:jurczynski95@gmail.com">jurczynski95@gmail.com</a>
          </p>
        </div>
      </div>
    </div>





    <AboutJoinUs />
  </section>

</template>
