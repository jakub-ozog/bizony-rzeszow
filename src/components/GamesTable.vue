<script setup>
import { groupATable } from '@/data/groupATable.js';
import { groupBTable } from '@/data/groupBTable.js';
</script>

<template>
  <div class="my-16">
    <div class="my-16">
      <DataTable :value="groupATable" stripedRows showGridlines tableStyle="min-width: 50rem" class="my-12 shadow-md">
        <div class="text-left w-full bg-accentBlue text-white p-6 rounded-t-lg ">
          <h3 class="text-white text-2xl font-semibold">Grupa A</h3>
        </div>
        <PrimeColumn field="poz" header="Poz."></PrimeColumn>
        <PrimeColumn field="druzyna" header="Drużyna">
          <template #body="slotProps">
            <div class="flex items-center gap-3 flex-wrap">
              <img :src="slotProps.data.druzyna.logo" alt="" class="w-16 h-auto">
              <p class="text-xl">
                {{ slotProps.data.druzyna.nazwa }}
              </p>
            </div>
          </template>
        </PrimeColumn>
        <PrimeColumn field="mecze" header="Mecze"></PrimeColumn>
        <PrimeColumn field="runyPlus" header="Runy +"></PrimeColumn>
        <PrimeColumn field="runyMinus" header="Runy -"></PrimeColumn>
        <PrimeColumn field="zwyciestwa" header="Zwycięstwa"></PrimeColumn>
        <PrimeColumn field="remisy" header="Remisy"></PrimeColumn>
        <PrimeColumn field="przegrane" header="Przegrane"></PrimeColumn>
        <PrimeColumn field="punkty" header="Punkty"></PrimeColumn>
      </DataTable>
    </div>

    <div class="my-16">
      <DataTable :value="groupBTable" stripedRows showGridlines tableStyle="min-width: 50rem" class="my-12 shadow-md">
        <div class="text-left w-full bg-accentBlue text-white p-6 rounded-t-lg ">
          <h3 class="text-white text-2xl font-semibold">Grupa B</h3>
        </div>
        <PrimeColumn field="poz" header="Poz."></PrimeColumn>
        <PrimeColumn field="druzyna" header="Drużyna">
          <template #body="slotProps">
            <div class="flex items-center gap-3 flex-wrap">
              <img :src="slotProps.data.druzyna.logo" alt="" class="w-16 h-auto">
              <p class="text-xl">
                {{ slotProps.data.druzyna.nazwa }}
              </p>
            </div>
          </template>
        </PrimeColumn>
        <PrimeColumn field="mecze" header="Mecze"></PrimeColumn>
        <PrimeColumn field="runyPlus" header="Runy +"></PrimeColumn>
        <PrimeColumn field="runyMinus" header="Runy -"></PrimeColumn>
        <PrimeColumn field="zwyciestwa" header="Zwycięstwa"></PrimeColumn>
        <PrimeColumn field="remisy" header="Remisy"></PrimeColumn>
        <PrimeColumn field="przegrane" header="Przegrane"></PrimeColumn>
        <PrimeColumn field="punkty" header="Punkty"></PrimeColumn>
      </DataTable>
    </div>
  </div>
</template>
