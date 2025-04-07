<script setup>
import { computed } from 'vue';
import gamesSummary from '@/data/gamesSummary.js';


const props = defineProps({
  year: {
    type: String,
    required: true,
  }
})




const filteredGames = computed(() => {
  return gamesSummary.filter((game) => game.termin.startsWith(props.year))
})

const yearSummary = computed(() => {
  if (props.year === '2024') {
    return [
      {
        W: 3,
        L: 10,
        D: 0,
        punktyZdobyte: 125,
        punktyStracone: 196,
      },
    ];
  } else {
    return null;
  }
});
</script>

<template>
  <DataTable :value="filteredGames" removableSort stripedRows showGridlines tableStyle="min-width: 50rem">
    <PrimeColumn field="termin" header="Termin" sortable></PrimeColumn>
    <PrimeColumn field="miejsce" header="Miejsce" sortable></PrimeColumn>
    <PrimeColumn field="przeciwnik" header="Przeciwnik" sortable></PrimeColumn>
    <PrimeColumn field="rozgrywki" header="Rozgrywki" sortable></PrimeColumn>
    <PrimeColumn field="wynik" header="Wynik" sortable></PrimeColumn>
    <PrimeColumn field="punktyZdobyte" header="Punkty Zdobyte" sortable></PrimeColumn>
    <PrimeColumn field="punktyStracone" header="Punkty Stracone" sortable></PrimeColumn>
  </DataTable>


  <DataTable v-if="yearSummary" :value="yearSummary" stripedRows showGridlines class="my-12">
    <div class="text-left w-full bg-gradient-to-r from-accentBlue to-slate-950 text-white p-6 rounded-t-lg">
      <h3 class="text-white text-xl font-semibold">Podsumowanie 2024 (Mecze towarzyskie)</h3>
    </div>
    <PrimeColumn field="W" header="Wygrane">
    </PrimeColumn>
    <PrimeColumn field="L" header="Przegrane"></PrimeColumn>
    <PrimeColumn field="D" header="Remisy"></PrimeColumn>
    <PrimeColumn field="punktyZdobyte" header="Punkty Zdobyte"></PrimeColumn>
    <PrimeColumn field="punktyStracone" header="Punkty Stracone"></PrimeColumn>
  </DataTable>
</template>
