<script setup>
import { homeTable } from '@/data/homeTable.js';
</script>

<template>
  <div class="my-16">
    <DataTable :value="homeTable" stripedRows showGridlines tableStyle="min-width: 50rem" class="my-12">
      <div class="text-left w-full bg-blue-800 text-white p-6 rounded-t-lg ">
        <h3 class="text-white text-2xl font-semibold">Grupa C</h3>
      </div>
      <PrimeColumn field="poz" header="poz"></PrimeColumn>
      <PrimeColumn field="druzyna" header="druzyna">
        <template #body="slotProps">
          <div class="flex items-center gap-3 flex-wrap">
            <img :src="slotProps.data.druzyna.logo" alt="" class="w-16 h-auto">
            <p class="text-xl">
              {{ slotProps.data.druzyna.nazwa }}
            </p>
          </div>
        </template>
      </PrimeColumn>
      <PrimeColumn field="mecze" header="mecze"></PrimeColumn>
      <PrimeColumn field="runyPlus" header="runyPlus"></PrimeColumn>
      <PrimeColumn field="runyMinus" header="runyMinus"></PrimeColumn>
      <PrimeColumn field="zwyciestwa" header="zwyciestwa"></PrimeColumn>
      <PrimeColumn field="remisy" header="remisy"></PrimeColumn>
      <PrimeColumn field="przegrane" header="przegrane"></PrimeColumn>
      <PrimeColumn field="punkty" header="punkty"></PrimeColumn>
    </DataTable>
  </div>
</template>
