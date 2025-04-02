<script setup>
import { playersStatistics } from '@/data/playersStatistics.js'
import { pitchersStatistics } from '@/data/pitchersStatistics';
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
      </div>

      <DataTable :value="playersStatistics" removableSort row-hover="">
        <PrimeColumn field="nr" header="Nr" sortable></PrimeColumn>
        <PrimeColumn field="zawodnik" header="ZAWODNIK" sortable class="font-bold text-primaryRed"></PrimeColumn>
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
  </section>
</template>
