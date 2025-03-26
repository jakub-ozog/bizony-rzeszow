<script setup>
import NavbarMain from './components/NavbarMain.vue'
import Footer from './components/FooterMain.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <NavbarMain />
    <main>
      <router-view />
      <ScrollTop />
    </main>
    <Footer />
  </div>
</template>
