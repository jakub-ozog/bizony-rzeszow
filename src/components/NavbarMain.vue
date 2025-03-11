<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const isOpen = ref(false)
const router = useRouter()

watch(
  () => router.currentRoute.value.path,
  () => {
    isOpen.value = false
  },
)
</script>

<template>
  <header>
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div>
        <router-link to="/">
          <img src="@/assets/logo/logo-nav.svg" class="h-18" alt="Logo Bizony Rzeszów" />
        </router-link>
      </div>
      <button @click="isOpen = !isOpen" class="lg:hidden text-xl z-30">
        <i :class="isOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
      </button>
      <ul class="hidden lg:flex items-center gap-12 text-grey uppercase font-urbanist">
        <li>
          <router-link to="/" class="font-urbanist">Strona główna</router-link>
        </li>
        <li>
          <router-link to="/o-nas">O klubie</router-link>
        </li>
        <!-- <li>
          <router-link to="/zawodnicy">Zawodnicy</router-link>
        </li> -->
        <li>
          <router-link to="/galeria">Galeria</router-link>
        </li>
        <!-- <li>
          <router-link class="text-secondaryRed" to="/zawodnicy">Statystyki</router-link>
        </li> -->
        <li>
          <router-link to="/blog">Blog</router-link>
        </li>
      </ul>
      <ul
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
        class="text-xl lg:hidden fixed top-0 right-0 w-72 h-full bg-white shadow-lg text-gray-500 font-urbanist text-[1rem] transition-transform transform duration-300 ease-in-out z-40 p-6 flex flex-col gap-1 font-semibold"
      >
        <li class="py-2 mt-12">
          <router-link to="/" class="block text-gray-800 hover:opacity-50 p-3"
            >Strona główna</router-link
          >
        </li>
        <li class="py-2">
          <router-link
            to="/o-nas"
            class="block text-gray-800 transition-all duration-400 hover:opacity-50 p-3"
            >O klubie</router-link
          >
        </li>
        <!-- <li class="py-2">
          <router-link to="/zawodnicy" class="block text-gray-800 hover:opacity-50 p-3"
            >Zawodnicy</router-link
          >
        </li> -->
        <li class="py-2">
          <router-link to="/galeria" class="block text-gray-800 hover:opacity-50 p-3"
            >Galeria</router-link
          >
        </li>
        <li class="py-2">
          <router-link to="/blog" class="block text-gray-800 hover:opacity-50 p-3"
            >Blog</router-link
          >
        </li>
        <button @click="isOpen = !isOpen" class="lg:hidden text-xl z-50 absolute top-6 right-6">
          <i class="pi pi-times"></i>
        </button>
      </ul>

      <div
        v-if="isOpen"
        @click="isOpen = false"
        class="fixed inset-0 bg-white/10 backdrop-blur-lg backdrop-saturate-150 border border-white/20 shadow-lg p-6 rounded-xl z-30 lg:gidden"
      ></div>
    </nav>
  </header>
</template>
