<script setup>
import { gamesSummary } from '@/data/gamesSummary.js'
import authorIcon from '@/assets/images/michal-oberc-author.webp'
import calendarIcon from '@/assets/icons/calendar-icon.svg'
import postMainThumb from '@/assets/images/galleries/gallery-4/11.webp'
import GamesSummaryTable from '@/components/GamesSummaryTable.vue';


</script>

<template>
  <section class="container mx-auto text-left my-12 font-urbanist">
    <h1 class="text-5xl font-bold text-primaryRed">Bizonowe podsumowanie 2024 roku</h1>
    <div class="flex flex-row gap-6 mt-2 mb-12">
      <div class="flex flex-row gap-2 items-center">
        <img :src="authorIcon" class="w-11 rounded-full" alt="Ikona autora" />
        <p class="text-sm text-gray-500">Redakcja</p>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <img :src="calendarIcon" class="w-5" alt="Ikona kalendarza" />
        <p class="text-sm text-gray-500">31.12.2024</p>
      </div>
    </div>
    <p class="font-semibold text-lg">
      Mijający rok obfitował w wydarzenia i emocje, które potwierdziły, że Bizony Rzeszów zmierzają we właściwym
      kierunku.
      W pierwszym pełnym roku istnienia drużyny zaliczyliśmy pierwsze zwycięstwa i pouczające przegrane boje przeciwko
      doświadczonym zespołom.
      Bizony angażowały się w życie kulturalne naszego pięknego miasta. Przedstawiliśmy lokalnej społeczności ukochaną
      dyscyplinę sportu i wzbudziliśmy ciekawość, która potem zaowocowała wzrostem frekwencji na treningach i meczach
      rozgrywanych w Rzeszowie.
      Zdobyte doświadczenie dodaje nam pewności, że baseball na stałe zagości w życiu mieszkańców Rzeszowa, a my zrobimy
      co w naszej mocy, by godnie reprezentować nasze miasto w rozgrywkach Bałtyckiej Ligi Baseballu w 2025 roku.

    </p>
    <img :src="postMainThumb" class="w-full h-auto mt-10" alt="obrazek główny wpisu" />








    <p class="font-base text-lg mt-12">
      Mijający rok obfitował w wydarzenia i emocje, które potwierdziły, że Bizony Rzeszów zmierzają we właściwym
      kierunku.
      W pierwszym pełnym roku istnienia drużyny zaliczyliśmy pierwsze zwycięstwa i pouczające przegrane boje przeciwko
      doświadczonym zespołom.
      Bizony angażowały się w życie kulturalne naszego pięknego miasta. Przedstawiliśmy lokalnej społeczności ukochaną
      dyscyplinę sportu i wzbudziliśmy ciekawość, która potem zaowocowała wzrostem frekwencji na treningach i meczach
      rozgrywanych w Rzeszowie.
      Zdobyte doświadczenie dodaje nam pewności, że baseball na stałe zagości w życiu mieszkańców Rzeszowa, a my zrobimy
      co w naszej mocy, by godnie reprezentować nasze miasto w rozgrywkach Bałtyckiej Ligi Baseballu w 2025 roku.

    </p>

    <!-- <DataTable :value="gamesSummary" stripedRows showGridlines tableStyle="min-width: 50rem" class="my-12">
      <PrimeColumn field="termin" header="Termin"></PrimeColumn>
      <PrimeColumn field="miejsce" header="Miejsce"></PrimeColumn>
      <PrimeColumn field="przeciwnik" header="Przeciwnik"></PrimeColumn>
      <PrimeColumn field="rozgrywki" header="Rozgrywki"></PrimeColumn>
      <PrimeColumn field="wynik" header="Wynik"></PrimeColumn>
      <PrimeColumn field="punktyZdobyte" header="Punkty zdobyte"></PrimeColumn>
      <PrimeColumn field="punktyStracone" header="Punkty stracone"></PrimeColumn>
    </DataTable> -->


    <div class="my-16 shadow-lg">
      <div class="text-left w-full bg-gradient-to-r from-accentBlue to-slate-950 text-white p-6 rounded-t-lg">
        <h3 class="text-white text-xl font-semibold">2024</h3>
      </div>
      <GamesSummaryTable year="2024" />
    </div>


    <h2 class="text-3xl font-semibold text-lightBlack my-12">
      Byliśmy również obecni na:
    </h2>

    <ul
      class="font-base text-lg mt-12 text-slate-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 font-semibold">
      <li class="bg-blue-800 text-white p-4">
        Rzeszowska Paniaga
      </li>
      <li class="bg-blue-800 text-white p-4">
        Piknik Polsko-Amerykański
      </li>
      <li class="bg-blue-800 text-white p-4">
        Piknik Charytatywny w Kraczkowej
      </li>
      <li class="bg-blue-800 text-white p-4">
        Dzień Osiedla Energiczny Miłocin
      </li>
      <li class="bg-blue-800 text-white p-4">
        Obchody Dnia Dziecka przy Oratorium Salezjanów
      </li>
      <li class="bg-blue-800 text-white p-4">
        Razem w Baseballu
      </li>
      <li class="bg-blue-800 text-white p-4">
        Dzień Niepodległości USA w Hotelu Ostoya
      </li>
      <li class="bg-blue-800 text-white p-4">
        Międzynarodowy Dzień Uchodźcy w Rzeszowie
      </li>
      <li class="bg-blue-800 text-white p-4">
        Otwarty Puchar Polski Mażoretek w Rzeszowie
      </li>
      <li class="bg-blue-800 text-white p-4">
        Letnia półkolonia w Zalesiu
      </li>
      <li class="bg-blue-800 text-white p-4">
        Letnia półkolonia na Białej
      </li>

    </ul>

  </section>
  <ScrollTop />
</template>
