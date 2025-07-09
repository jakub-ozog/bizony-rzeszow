<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'


import joinUsBg from '@/assets/images/join-us-bg.webp'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const joinBgImg = {
  backgroundImage: `url(${joinUsBg})`,
  backgroundSize: 'cover',
}

// Watch for route changes to update content from Strapi
const route = useRoute()
const heroData = ref(null)



const fetchHeroData = async () => {
  try {
    const response = await fetch('https://bizony-strapi-cms.onrender.com/api/hero-section')
    const data = await response.json()
    heroData.value = data.data
  } catch (error) {
    console.error('Error fetching hero data:', error)
  }
}

// Computed properties - cached and reusable
const title = computed(() => heroData.value?.Title || 'Loading...')
const subtitle = computed(() => heroData.value?.Subtitle || 'Loading...')
const buttonText = computed(() => heroData.value?.Button || 'Loading...')

onMounted(fetchHeroData)
watch(route, fetchHeroData)
</script>

<template>
  <div class="flex flex-col justify-center items-center relative font-urbanist min-h-[22rem] p-6 my-12"
    :style="joinBgImg">
    <h3 class="text-5xl text-white mx-auto text-center font-semibold mb-4 mt-4">
      <!-- Zostań jednym z Bizonów -->
      {{ title }}

    </h3>
    <p class="text-white mx-auto text-center w-3/4 my-4">
      <!-- Lubisz sport? Chcesz trenować i grać w zgranej drużynie? Bizony Rzeszów czekają na Ciebie! Niezależnie od Twojego
      doświadczenia, jeśli masz zapał i chęć do nauki, dołącz do naszej ekipy. Kliknij poniżej i skontaktuj się, aby
      dowiedzieć się więcej o treningach i naborze! -->
      {{ subtitle }}
    </p>

    <Dialog>
      <DialogTrigger
        class="text-[0.75rem] font-normal mr-2 m-0 flex justify-center items-center text-center bg-white text-black rounded-2xl py-2 px-4 mt-4 mb-5">
        <span class="flex flex-row gap-3 items-center text-center">
          <!-- Dołącz do klubu -->
          {{ buttonText }}
          <img class="w-3 h-3" src="/src/assets/icons/join-us-icon.svg" />
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle class="mx-auto text-2xl">Dołącz do klubu</DialogTitle>
          <DialogDescription>



            <a href="mailto:mailto:jurczynski95@gmail.com"
              class="flex items-center gap-4 bg-secondaryRed text-center mx-auto justify-center text-white rounded-2xl  py-2 px-4 mt-4 mb-5 w-3/4 md:w-1/2">
              <i class="pi pi-at" style="color: white;"></i>
              Napisz do nas!

            </a>

            <a href="tel:"
              class="flex items-center gap-4 bg-midBlack text-center mx-auto justify-center text-white rounded-2xl py-2 px-4 mt-4 mb-5 w-3/4 md:w-1/2">
              <i class="pi pi-phone" style="color: white;"></i>
              Zadzwoń teraz!
            </a>

            <a href="https://www.facebook.com/BizonyRzeszow" target="_blank"
              class="flex items-center gap-4 bg-accentBlue text-center mx-auto justify-center text-white rounded-2xl py-2 px-4 mt-4 mb-5 w-3/4 md:w-1/2">
              <i class="pi pi-facebook" style="color: white;"></i>
              Znajdź nas na Facebook

            </a>


          </DialogDescription>
        </DialogHeader>


      </DialogContent>
    </Dialog>

  </div>
</template>
