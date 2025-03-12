<script setup>
import { ref } from 'vue'
import { blogPosts } from '@/data/posts' // Ścieżka do danych

const posts = ref(blogPosts)
</script>

<template>
  <div class="container mx-auto text-left my-12 font-urbanist flex flex-col gap-12 max-w-4xl">
    <div
      v-for="post in posts"
      :key="post.id"
      class="hover:text-primaryRed transition duration-300 ease-in-out"
    >
      <router-link :to="{ name: 'postDetail', params: { slug: post.slug } }">
        <h2 class="text-3xl font-bold">{{ post.title }}</h2>
        <p class="mt-2">{{ post.excerpt }}</p>
      </router-link>
    </div>
  </div>
</template>
