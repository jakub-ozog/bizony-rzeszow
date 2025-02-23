<script setup>
import NavbarMain from './components/NavbarMain.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <NavbarMain />
    <main>
      <router-view />
    </main>
  </div>
</template>
