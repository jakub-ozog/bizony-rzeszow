<script setup>
import { ref } from 'vue'
import newsData from '../data/newsData.js'

const news = ref(newsData)
</script>

<template>
  <div class="flex flex-col xl:flex-row gap-4">
    <div class="relative">
      <img
        :src="news[0].thumb1"
        class="w-full h-full object-cover rounded-none md:rounded-2xl"
        alt="news image"
      />
      <div
        class="static md:absolute bottom-12 flex md:w-3/4 left-4 flex-col text-left justify-center p-2 md:p-0"
      >
        <h3 class="text-black md:text-white font-semibold text-[2rem] mt-4 md:mb-4">
          {{ news[0].title }}
        </h3>
        <p class="text-black md:text-white font-semibold text-[0.8125rem] mb-8 mt-4 md:mb-0">
          {{ news[0].description }}
        </p>
        <button
          class="flex justify-center items-center text-center bg-secondaryRed text-white rounded-2xl py-2 px-4 my-4 w-36"
        >
          <span class="text-[0.75rem] font-normal mr-2"> Czytaj więcej </span
          ><img class="w-3 h-3" src="/src/assets/icons/baseball_ball_icon.svg" />
        </button>
      </div>
    </div>
    <div>
      <div
        v-for="(item, index) in news.slice(1)"
        :key="item.id"
        class="flex gap-4 mb-6 p-2 lg:p-0 md:mb-0"
      >
        <img
          :src="item.thumb2 || item.thumb3"
          :alt="item.title"
          class="w-1/2 h-full"
          :class="index === 0 ? 'mb-4' : 'mb-0'"
        />

        <div class="gap-2 text-left flex flex-col justify-between items-start">
          <div>
            <h3 class="text-primaryRed text-2xl mb-4">{{ item.title }}</h3>
            <p class="pr-0 xl:pr-2 text-[11px]">{{ item.description }}</p>
          </div>
          <button
            class="flex justify-center items-center text-center bg-secondaryRed text-white rounded-2xl py-2 px-4 my-4"
          >
            <span class="text-[0.75rem] font-normal mr-2"> Czytaj więcej </span
            ><img class="w-3 h-3" src="/src/assets/icons/baseball_ball_icon.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
