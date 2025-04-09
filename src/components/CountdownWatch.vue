<script setup>
import { ref, onMounted, onUnmounted } from 'vue';


const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

const matchDates = [
  { date: new Date('2025-04-13T11:00:00') },
  { date: new Date('2025-06-08T11:00:00') },
  { date: new Date('2025-06-15T11:00:00') },
]


const currentIndex = ref(0)
const targetDate = ref(matchDates[currentIndex.value].date)

let interval = null

const updateCountdown = () => {
  const now = new Date()
  const diff = targetDate.value - now

  if (diff <= 0) {
    currentIndex.value++
    if (currentIndex.value < matchDates.length) {
      targetDate.value = matchDates[currentIndex.value].date
    } else {
      clearInterval(interval)
      countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
    return
  }

  const seconds = Math.floor((diff / 1000) % 60)
  const minutes = Math.floor((diff / 1000 / 60) % 60)
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24)
  const days = Math.floor(diff / 1000 / 60 / 60 / 24)

  countdown.value = { days, hours, minutes, seconds }
}

onMounted(() => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})


</script>

<template>





  <div class=" mx-auto flex flex-col justify-center items-center">
    <p class="text-xl text-center px-1 font-semibold text-white">Do najbliższego meczu pozostało</p>
    <div class="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 mt-8">
      <div class="flex flex-col items-center text-white">
        <p class="text-4xl md:text-5xl font-bold text-white ">{{ countdown.days }}</p>
        <p class="text-sm font-light text-white">dni</p>
      </div>
      <p class="text-white text-2xl font-bold">:</p>
      <div class="flex flex-col items-center">
        <p class="text-4xl md:text-5xl font-bold text-white "> {{ countdown.hours }}</p>
        <p class="text-sm font-light text-white">godzin</p>
      </div>
      <p class="text-white text-2xl font-bold">:</p>
      <div class="flex flex-col items-center">
        <p class="text-4xl md:text-5xl font-bold text-white ">{{ countdown.minutes }}</p>
        <p class="text-sm font-light text-white">minut</p>
      </div>
      <p class="text-white text-2xl font-bold">:</p>
      <div class="flex flex-col items-center">
        <p class="text-4xl md:text-5xl font-bold text-white ">{{ countdown.seconds }}</p>
        <p class="text-sm font-light text-white">sekund</p>
      </div>
    </div>
  </div>
</template>
