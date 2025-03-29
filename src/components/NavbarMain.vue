  <script setup>
  import { ref, watch, onMounted, onUnmounted } from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import 'primeicons/primeicons.css'

  const isOpen = ref(false)
  const router = useRouter()
  const menuDropdown = ref(false)
  const isMenuDropdownOpen = ref(false)

  watch(
    () => router.currentRoute.value.path,
    () => {
      isOpen.value = false
      isMenuDropdownOpen.value = false
    },
  )


  const toggleMenuDropdown = () => {
    isMenuDropdownOpen.value = !isMenuDropdownOpen.value
  }

</script>

<template>
  <header>
    <nav class="flex items-center justify-between p-6 lg:px-8 select-none" aria-label="Global">
      <div>
        <router-link to="/">
          <img src="@/assets/logo/logo-nav.svg" class="h-18" alt="Logo Bizony Rzeszów" />
        </router-link>
      </div>
      <button @click="isOpen = !isOpen" class="lg:hidden text-xl z-30 text-black">
        <i :class="isOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
      </button>
      <ul class="hidden lg:flex items-center gap-14 text-grey uppercase font-urbanist">
        <li>
          <router-link to="/" class="font-urbanist block p-1">Strona główna</router-link>
        </li>
        <li>
          <router-link to="/o-nas" class="block p-1">O klubie</router-link>
        </li>
        <!-- <li>
          <router-link to="/zawodnicy">Zawodnicy</router-link>
        </li> -->
        <li>
          <router-link to="/galeria" class="block p-1">Galeria</router-link>
        </li>
        <li class="relative">
          <div class="text-secondaryRed cursor-pointer flex items-center gap-2 " @click="toggleMenuDropdown"
            ref="menuDropdown">
            Rozgrywki
            <i :class="['pi', 'pi-angle-down', 'transition-transform', { 'rotate-180 transition-transform': isMenuDropdownOpen }]"
              style="font-size: 1rem">
            </i>
          </div>
          <ul v-if="isMenuDropdownOpen"
            class="absolute left-0 mt-2 py-2 bg-white shadow-sm rounded-lg w-48 z-10 text-left flex flex-col gap-4">
            <li class="ml-2">
              <router-link to="/rozgrywki/wyniki" class="block p-1 w-full hover:text-primaryRed">Wyniki</router-link>
            </li>
            <li class="ml-2">
              <router-link to="/rozgrywki/tabela-blb" class="block p-1 hover:text-primaryRed">Tabela BLB</router-link>
            </li>
          </ul>


        </li>
        <li>
          <router-link to="/blog" class="block p-1">Blog</router-link>
        </li>
        <li>
          <router-link to="/kontakt" class="block p-1">Kontakt</router-link>
        </li>
      </ul>


      <ul :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
        class="text-xl lg:hidden fixed top-0 right-0 w-72 h-full bg-white shadow-lg text-gray-500 font-urbanist text-[1rem] transition-transform transform duration-300 ease-in-out z-40 p-6 flex flex-col gap-1 font-semibold">
        <li class="py-2 mt-12">
          <router-link to="/" class="block text-gray-800 hover:opacity-50 p-3">Strona główna</router-link>
        </li>
        <li class="py-2">
          <router-link to="/o-nas" class="block text-gray-800 transition-all duration-400 hover:opacity-50 p-3">O
            klubie</router-link>
        </li>
        <li class="py-2 relative">
          <!-- <router-link to="/rozgrywki" class="block  hover:opacity-50 p-3">Rozgrywki</router-link> -->
          <div class="text-gray-800 p-3" @click="toggleMenuDropdown">Rozgrywki</div>
          <ul v-if="isMenuDropdownOpen" class=" left-0  w-max">
            <li>
              <router-link to="/rozgrywki/wyniki" class="text-base block p-3 ml-4 text-gray-800">Wyniki</router-link>
            </li>
            <li>
              <router-link to="/rozgrywki/tabela-blb" class=" text-base block p-3 ml-4 text-gray-800">Tabela
                BLB</router-link>
            </li>
          </ul>


        </li>
        <li class="py-2">
          <router-link to="/galeria" class="block text-gray-800 hover:opacity-50 p-3">Galeria</router-link>
        </li>
        <li class="py-2">
          <router-link to="/blog" class="block text-gray-800 hover:opacity-50 p-3">Blog</router-link>
        </li>
        <li class="py-2">
          <router-link to="/kontakt" class="block text-gray-800 hover:opacity-50 p-3">Kontakt</router-link>
        </li>
        <button @click="isOpen = !isOpen" class="lg:hidden text-xl z-50 absolute top-6 right-6">
          <i class="pi pi-times"></i>
        </button>
      </ul>

      <div v-if="isOpen" @click="isOpen = false"
        class="fixed inset-0 bg-white/10 backdrop-blur-lg backdrop-saturate-150 border border-white/20 shadow-lg p-6 rounded-xl z-30 lg:gidden">
      </div>
    </nav>
  </header>
</template>
