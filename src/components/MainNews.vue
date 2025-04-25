<script setup>
import { ref } from 'vue'
import newsData from '../data/newsData.js'
import Card from 'primevue/card';

const news = ref(newsData)
</script>

<template>

  <!-- New artticles layout -->

  <div class="flex justify-center mx-auto my-10">
    <div class="relative w-full lg:w-3/4">
      <img :src="news[5].thumb6" alt="" class="">

      <div class="hidden lg:block absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black to-transparent">
      </div>

      <div class="relative lg:absolute lg:bottom-8 lg:left-10 text-center w-full lg:text-left lg:w-3/4 p-5 lg:p-0">
        <h3 class="text-3xl text-primaryRed mt-6 lg:text-white"> {{ news[5].title }}</h3>
        <p class="text-lightBlack lg:text-white font-semibold text-md mb-8 mt-4 md:mb-0">
          {{ news[5].description }}
        </p>
        <router-link :to="news[5].link" class="mx-auto text-center">
          <button
            class="flex justify-center items-center mx-auto lg:mx-0 my-6 text-center bg-secondaryRed text-white rounded-2xl py-2 px-4 mt-8 w-36">
            <span class="text-[0.75rem] font-normal mr-2"> Czytaj więcej </span><img class="w-3 h-3"
              src="/src/assets/icons/baseball_ball_icon.svg" />
          </button>
        </router-link>

      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

    <!-- news 2 -->

    <Card style=" overflow: hidden; text-align: left;">
      <template #header>
        <img alt="user header" :src="news[6].thumb7" />
      </template>
      <template #title>
        <h3 class="font-bold text-2xl text-slate-700">
          {{ news[6].title }}
        </h3>
      </template>
      <template #content>
        <p class="m-0 font-normal">
          {{ news[6].description }}
        </p>
      </template>
      <template #footer>
        <router-link :to="news[6].link">
          <button
            class="flex justify-center items-center text-center bg-secondaryRed text-white rounded-2xl py-2 px-4 mt-4 w-36">
            <span class="text-[0.75rem] font-normal mr-2"> Czytaj więcej </span><img class="w-3 h-3"
              src="/src/assets/icons/baseball_ball_icon.svg" />
          </button>
        </router-link>
      </template>
    </Card>










    <Card style=" overflow: hidden; text-align: left;">
      <template #header>
        <img alt="user header" :src="news[3].thumb4" />
      </template>
      <template #title>
        <h3 class="font-bold text-2xl text-slate-700">
          {{ news[3].title }}
        </h3>
      </template>
      <template #content>
        <p class="m-0 font-normal">
          {{ news[3].description }}
        </p>
      </template>
      <template #footer>
        <router-link :to="news[3].link">
          <button
            class="flex justify-center items-center text-center bg-secondaryRed text-white rounded-2xl py-2 px-4 mt-4 w-36">
            <span class="text-[0.75rem] font-normal mr-2"> Czytaj więcej </span><img class="w-3 h-3"
              src="/src/assets/icons/baseball_ball_icon.svg" />
          </button>
        </router-link>
      </template>
    </Card>







    <!-- news 3 -->

    <Card style=" overflow: hidden; text-align: left;">
      <template #header>
        <img alt="user header" :src="news[0].thumb1" />
      </template>
      <template #title>
        <h3 class="font-bold text-2xl text-slate-700">
          {{ news[0].title }}
        </h3>
      </template>
      <template #content>
        <p class="m-0 font-normal">
          {{ news[0].description }}
        </p>
      </template>
      <template #footer>
        <router-link :to="news[0].link">
          <button
            class="flex justify-center items-center text-center bg-secondaryRed text-white rounded-2xl py-2 px-4 mt-4 w-36">
            <span class="text-[0.75rem] font-normal mr-2"> Czytaj więcej </span><img class="w-3 h-3"
              src="/src/assets/icons/baseball_ball_icon.svg" />
          </button>
        </router-link>
      </template>
    </Card>


    <!-- news 4 -->




    <!-- news 4 -->


  </div>






  <!-- button go to articles -->

  <div class=" mx-auto text-center my-10 flex justify-center">
    <router-link to="/blog">
      <button class="flex justify-center items-center text-center bg-accentBlue text-white rounded-2xl py-2 px-4 mt-8">
        <span class="text-[0.75rem] font-normal mr-2">Zobacz więcej artykułów </span><img class="w-3 h-3"
          src="/src/assets/icons/baseball_ball_icon.svg" />
      </button>
    </router-link>
  </div>


</template>
