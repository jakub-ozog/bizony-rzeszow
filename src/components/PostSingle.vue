<script setup>
import { marked } from 'marked'
import posts from '@/data/posts.json'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = posts.find((p) => p.slug === route.params.slug)
const content = ref('')

onMounted(() => {
  if (post) {
    fetch(`/posts/${post.slug}.md`)
      .then((response) => response.text())
      .then((markdown) => {
        content.value = marked(markdown)
      })
  }
})
</script>

<template>
  <article class="container mx-auto text-left my-12 font-urbanist">
    <div v-html="content"></div>
  </article>
</template>
