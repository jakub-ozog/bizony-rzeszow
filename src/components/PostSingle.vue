<script setup>
import { onMounted, shallowRef } from 'vue'
import { useRoute } from 'vue-router'
import { blogPosts } from '@/data/posts' // Ścieżka do danych
import { defineAsyncComponent } from 'vue'

const route = useRoute()
const post = shallowRef(null)

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

<template>
  <article v-if="post" class="p-4">
    <component :is="post.component" />
  </article>
  <div v-else class="text-center text-gray-500">Post not found</div>
</template>
