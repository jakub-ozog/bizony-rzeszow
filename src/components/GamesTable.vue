<script setup>
import { groupATable } from '@/data/groupATable.js';
import { groupBTable } from '@/data/groupBTable.js';
import { homeTable } from '@/data/homeTable.js';
import { timeTable } from '@/data/timeTable.js';


const modifiedGroupATable = groupATable.map((team, index) => {
  return {
    ...team,
    isTop2: index < 2, // Tylko pierwsze dwie drużyny dostają isTop2 = true
  };
});

const modifiedGroupBTable = groupBTable.map((team, index) => {
  return {
    ...team,
    isTop2: index < 2
  }
})

const modifiedGroupCTable = homeTable.map((team, index) => {
  return {
    ...team,
    isTop2: index < 2
  }
})
</script>

<template>
  <div class="my-16">
    <div class="my-16">
      <DataTable :value="groupATable" stripedRows showGridlines rowHover="" class="my-12 shadow-md">
        <div class="text-left w-full bg-accentBlue text-white p-6 rounded-t-lg ">
          <h3 class="text-white text-2xl font-semibold">Grupa A</h3>
        </div>
        <PrimeColumn field="poz" header="Poz.">
        </PrimeColumn>
        <!-- <PrimeColumn field="poz" header="Poz.">
          <template #body="slotProps">
            <div class="flex items-center justify-center rounded-lg p-4 "
              :class="{ 'bg-green-700 p-4': slotProps.data.isTop2 }">
              <p :class="{ 'text-white': slotProps.data.isTop2 }" class="text-black font-bold text-xl">
                {{ slotProps.data.poz }}
              </p>
            </div>
          </template>
</PrimeColumn> -->



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
      <DataTable :value="groupBTable" stripedRows showGridlines rowHover="" class="my-12 shadow-md">
        <div class="text-left w-full bg-accentBlue text-white p-6 rounded-t-lg ">
          <h3 class="text-white text-2xl font-semibold">Grupa B</h3>
        </div>
        <PrimeColumn field="poz" header="Poz.">
        </PrimeColumn>
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
      <DataTable :value="homeTable" stripedRows showGridlines rowHover="" class="my-12 shadow-md">
        <div class="text-left w-full bg-accentBlue text-white p-6 rounded-t-lg ">
          <h3 class="text-white text-2xl font-semibold">Grupa C</h3>
        </div>
        <PrimeColumn field="poz" header="Poz.">
        </PrimeColumn>
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
      <DataTable :value="timeTable" stripedRows showGridlines rowHover="" class="my-12 shadow-md">
        <div class="text-left w-full bg-indigo-950 text-white p-6 rounded-t-lg ">
          <h3 class="text-white text-2xl font-semibold">Terminarz</h3>
        </div>
        <PrimeColumn field="termin" header="Termin"></PrimeColumn>
        <PrimeColumn field="miejsce" header="Miejsce"></PrimeColumn>
        <PrimeColumn field="przeciwnik" header="Przeciwnik"></PrimeColumn>
      </DataTable>
    </div>
  </div>
</template>
