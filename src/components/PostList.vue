<template>
  <div class="container mx-auto text-left my-12 font-urbanist">
    <div v-for="post in posts" :key="post.id" class="border p-4 rounded-lg shadow-sm">
      <router-link :to="{ name: 'postDetail', params: { slug: post.slug } }">
        <h2 class="text-xl font-bold">{{ post.title }}</h2>
      </router-link>
      <p class="text-sm text-gray-500">{{ post.date }}</p>
      <p class="mt-2">{{ post.excerpt }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { blogPosts } from '@/data/posts' // Ścieżka do danych

const posts = ref(blogPosts)
</script>
