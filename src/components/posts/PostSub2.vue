<script setup>
import { ref } from 'vue'
import { gamesSummary } from '@/data/gamesSummary.js'

// const gamesData = ref(gamesSummary)


import authorIcon from '@/assets/images/michal-oberc-author.webp'
import calendarIcon from '@/assets/icons/calendar-icon.svg'
import postMainThumb from '@/assets/images/post-main-thumb.webp'
</script>

<template>
  <section class="container mx-auto text-left my-12 font-urbanist">
    <h1 class="text-5xl font-bold text-primaryRed">Bizonowe podsumowanie 2024 roku</h1>
    <div class="flex flex-row gap-6 mt-2 mb-12">
      <div class="flex flex-row gap-2 items-center">
        <img :src="authorIcon" class="w-7" alt="Ikona autora" />
        <p class="text-sm text-gray-500">Michał Oberc</p>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <img :src="calendarIcon" class="w-5" alt="Ikona kalendarza" />
        <p class="text-sm text-gray-500">20.03.2025</p>
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

    <DataTable :value="gamesSummary" stripedRows showGridlines tableStyle="min-width: 50rem" class="my-12">
      <PrimeColumn field="termin" header="Termin"></PrimeColumn>
      <PrimeColumn field="miejsce" header="Miejsce"></PrimeColumn>
      <PrimeColumn field="przeciwnik" header="Przeciwnik"></PrimeColumn>
      <PrimeColumn field="rozgrywki" header="Rozgrywki"></PrimeColumn>
      <PrimeColumn field="wynik" header="Wynik"></PrimeColumn>
      <PrimeColumn field="punktyZdobyte" header="Punkty zdobyte"></PrimeColumn>
      <PrimeColumn field="punktyStracone" header="Punkty stracone"></PrimeColumn>
    </DataTable>

    <h2 class="text-3xl font-semibold text-lightBlack my-12">
      Byliśmy również obecni na:
    </h2>

    <ul class="font-base text-lg mt-12 text-black">
      <li>
        1.Rzeszowska Paniaga

      </li>
      <li>

        2.Piknik Polsko-Amerykański
      </li>
      <li>

        3.Piknik Charytatywny w Kraczkowej
      </li>
      <li>

        4.Dni osiedla Miłocin
      </li>
      <li>

        5.Obchody Dnia Dziecka przy Oratorium Salezjanów
      </li>
      <li>

        6.Razem w Baseballu
      </li>
      <li>
        7.Dzień Niepodległości USA w Hotelu Ostoya

      </li>
      <li>
        8. Międzynarodowy Dzień Uchodźcy w Rzeszowie
      </li>
      <li>
        9.I Otwarty Puchar Polski Mażoretek w Rzeszowie

      </li>
      <li>
        10. Letnia półkolonia w Zalesiu
      </li>
      <li>

        11. Letnia półkolonia na Białej
      </li>

    </ul>

  </section>
  <ScrollTop />
</template>
