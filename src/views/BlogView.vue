<script setup>
import PostList from '@/components/PostList.vue'
</script>

<template>
  <section class="container mx-auto grid place-content-center mt-12 font-urbanist font-bold">
    <img src="@/assets/images/bison-bg.svg" alt="obrazek bizona" class="hidden sm:block w-[24rem] absolute left-0" />
    <div class="flex justify-center items-center mb-16 ">
      <h1
        class=" text-primaryRed text-3xl md:text-4xl lg:text-5xl text-primary-red uppercase relative leading-[4rem] after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:w-full after:h-[2px] after:text-center after:mx-auto after:rounded-full after:z-20 after:bg-primaryRed">
        blog
      </h1>
    </div>

    <PostList />
  </section>
</template>
