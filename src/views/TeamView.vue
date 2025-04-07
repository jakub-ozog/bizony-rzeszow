<script setup>
import { ref } from 'vue';
import { playersStatistics } from '@/data/playersStatistics.js'
import { pitchersStatistics } from '@/data/pitchersStatistics.js';
import { positionsData } from '@/data/positionsData.js'
import diagramImg from '@/assets/images/baseball_diagram_with_positions.webp'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const selectedPlayer = ref(null)
const isDialogOpen = ref(false)

function openPlayerDialog(player) {
  selectedPlayer.value = player
  isDialogOpen.value = true
}


const trainerDetails = [{
  Trener: 'Jurczyński Krzysztof',
}]

</script>

<template>
  <main class="container mx-auto grid place-content-center mt-8 font-urbanist font-bold">
    <img src="@/assets/images/bison-bg.svg" alt="obrazek bizona" class="hidden sm:block w-[24rem] absolute left-0" />
    <div class="flex justify-center items-center mt-[6rem] mb-16 ">
      <h1
        class="text-3xl text-primaryRed md:text-4xl lg:text-5xl text-primary-red uppercase relative leading-[4rem] after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:w-full after:h-[2px] after:text-center after:mx-auto after:rounded-full after:z-20 after:bg-primaryRed">
        kadra
      </h1>
    </div>
  </main>


  <section class="container mx-auto my-12 font-urbanist px-2 md:px-0 text-center">

    <h2 class="text-3xl font-bold text-midGrayupper uppercase">Skład drużyny (sezon 2025)
    </h2>

    <div class="my-16 shadow-lg">
      <div class="text-left w-full bg-gradient-to-r from-accentBlue to-slate-950 text-white p-6 rounded-t-lg ">
        <h3 class="text-white text-xl font-semibold">Statystki pałkarzy</h3>
        <p class="text-blue-100">Kliknij na zawodnika aby wyświetlić jego statystyki</p>
      </div>

      <!-- Dialog component Shadcn -->

      <Dialog v-model:open="isDialogOpen">
        <DialogContent class="max-w-xl">
          <DialogHeader>
            <DialogTitle>{{ selectedPlayer?.zawodnik }}</DialogTitle>
            <DialogDescription>
              Pozycja: {{ selectedPlayer?.poz }} | Numer: {{ selectedPlayer?.nr }}
            </DialogDescription>
          </DialogHeader>

          <div class="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div><strong>H:</strong> {{ selectedPlayer?.h }}</div>
            <div><strong>HR:</strong> {{ selectedPlayer?.hr }}</div>
            <div><strong>BA:</strong> {{ selectedPlayer?.ba }}</div>
            <div><strong>OBP:</strong> {{ selectedPlayer?.obp }}</div>
            <!-- Dodaj więcej statystyk wg uznania -->
          </div>

          <DialogFooter class="mt-6">
            <button @click="isDialogOpen = false" class="btn btn-secondary">Zamknij</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>


      <!-- PrimeVue DataTables structure -->

      <DataTable :value="playersStatistics" removableSort row-hover="">
        <PrimeColumn field="nr" header="Nr" sortable></PrimeColumn>
        <PrimeColumn field="zawodnik" header="ZAWODNIK" sortable class="font-bold text-primaryRed">
          <template #body="slotProps">
            <button @click="openPlayerDialog(slotProps.data)"
              class="text-primaryRed underline hover:opacity-80 transition">
              {{ slotProps.data.zawodnik }}
            </button>
          </template>
        </PrimeColumn>

        <PrimeColumn field="poz" header="POZ" sortable></PrimeColumn>
        <PrimeColumn field="g" header="G" sortable></PrimeColumn>
        <PrimeColumn field="pa" header="PA" sortable></PrimeColumn>
        <PrimeColumn field="ab" header="AB" sortable></PrimeColumn>
        <PrimeColumn field="r" header="R" sortable></PrimeColumn>
        <PrimeColumn field="h" header="H" sortable></PrimeColumn>
        <PrimeColumn field="2b" header="2B" sortable></PrimeColumn>
        <PrimeColumn field="3b" header="3B" sortable></PrimeColumn>
        <PrimeColumn field="hr" header="HR" sortable></PrimeColumn>
        <PrimeColumn field="rbi" header="RBI" sortable></PrimeColumn>
        <PrimeColumn field="sb" header="SB" sortable></PrimeColumn>
        <PrimeColumn field="cs" header="CS" sortable></PrimeColumn>
        <PrimeColumn field="bb" header="BB" sortable></PrimeColumn>
        <PrimeColumn field="so" header="SO" sortable></PrimeColumn>
        <PrimeColumn field="ba" header="BA" sortable></PrimeColumn>
        <PrimeColumn field="obp" header="OBP" sortable></PrimeColumn>
        <PrimeColumn field="hbp" header="HBP" sortable></PrimeColumn>
      </DataTable>
      <div>

        <DataTable :value="trainerDetails" row-hover="" class="mt-6">
          <PrimeColumn field="Trener" header="Trener" class="font-bold bg-primaryRed text-white">
          </PrimeColumn>
        </DataTable>
      </div>
    </div>

    <div class="my-16 shadow-lg">
      <div class="text-left w-full bg-gradient-to-r from-accentBlue to-slate-950 text-white p-6 rounded-t-lg ">
        <h3 class="text-white text-xl font-semibold">Statystki miotaczy</h3>
      </div>
      <DataTable :value="pitchersStatistics" removableSort row-hover="">
        <PrimeColumn field="nr" header="Nr" sortable></PrimeColumn>
        <PrimeColumn field="zawodnik" header="ZAWODNIK" sortable class="font-bold text-primaryRed"></PrimeColumn>
        <PrimeColumn field="poz" header="POZ" sortable></PrimeColumn>
        <PrimeColumn field="g" header="G" sortable></PrimeColumn>
        <PrimeColumn field="ip" header="IP" sortable></PrimeColumn>
        <PrimeColumn field="er" header="ER" sortable></PrimeColumn>
        <PrimeColumn field="r" header="R" sortable></PrimeColumn>
        <PrimeColumn field="so" header="SO" sortable></PrimeColumn>
        <PrimeColumn field="h" header="H" sortable></PrimeColumn>
        <PrimeColumn field="bb" header="BB" sortable></PrimeColumn>
      </DataTable>
    </div>


    <div class="my-16 shadow-lg">
      <div class="text-left w-full bg-gradient-to-r from-accentBlue to-slate-950 text-white p-6 rounded-t-lg ">
        <h3 class="text-white text-xl font-semibold">Legenda pozycji</h3>
      </div>




      <div class="flex flex-col lg:flex-row gap-4 items-center">




        <img :src="diagramImg" alt="" class="w-full lg:w-[580px] ">


        <div class="w-full">
          <DataTable :value="positionsData" row-hover="">
            <PrimeColumn field="position" header="Pozycja"></PrimeColumn>
            <PrimeColumn field="polskaNazwa" header="PL"></PrimeColumn>
            <PrimeColumn field="angielskaNazwa" header="EN"></PrimeColumn>
          </DataTable>
        </div>
      </div>

    </div>
  </section>
</template>
