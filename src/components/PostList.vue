<script setup>
import { ref } from 'vue'
import { blogPosts } from '@/data/posts' // Ścieżka do danych

const posts = ref(blogPosts)
</script>

<template>
  <div class="container mx-auto text-left my-12 font-urbanist flex flex-col gap-12">
    <div v-for="post in posts" :key="post.id"
      class="hover:text-primaryRed transition duration-300 ease-in-out p-4 grid  grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img :src="post.thumb" alt="" class="w-full">
      </div>
      <router-link :to="{ name: 'postDetail', params: { slug: post.slug } }" class="">
        <h2 class="text-3xl text-primaryRed font-bold mb-4">{{ post.title }}</h2>
        <p class="mt-2 font-semibold ">{{ post.excerpt }}</p>
      </router-link>
    </div>
  </div>
</template>
