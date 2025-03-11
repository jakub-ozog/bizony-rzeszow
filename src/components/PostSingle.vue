<template>
  <article
    v-if="post"
    class="p-4 rounded-lg shadow-sm container mx-auto text-left my-12 font-urbanist"
  >
    <h1 class="text-2xl font-bold">{{ post.title }}</h1>
    <p class="text-sm text-gray-500">{{ post.date }}</p>
    <div class="mt-4">
      <component :is="post.component" />
    </div>
  </article>
  <div v-else class="text-center text-gray-500">Post not found</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { blogPosts } from '@/data/posts' // Ścieżka do danych
import { defineAsyncComponent } from 'vue'

const route = useRoute()
const post = ref(null)

// Znalezienie posta na podstawie slug w URL
onMounted(() => {
  const slug = route.params.slug
  const selectedPost = blogPosts.find((p) => p.slug === slug)

  // Dynamiczny import komponentu
  if (selectedPost) {
    post.value = {
      ...selectedPost,
      component: defineAsyncComponent(selectedPost.component), // Użycie defineAsyncComponent do dynamicznego importu
    }
  }
})
</script>
