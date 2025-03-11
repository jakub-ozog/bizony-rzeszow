<script setup>
import posts from '@/data/posts.json'
</script>

<template>
  <main>
    <h2 class="mb-12">Lista wpisów</h2>
    <ul>
      <li v-for="post in posts" :key="post.slug" class="mb-4">
        <router-link :to="`post/${post.slug}`">{{ post.title }}</router-link>
        <p class="text-gray-400">{{ post.excerpt }}</p>
      </li>
    </ul>
  </main>
</template>
