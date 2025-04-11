<script setup>
import authorIcon from '@/assets/images/michal-oberc-author.webp'
import calendarIcon from '@/assets/icons/calendar-icon.svg'
import postMainThumb from '@/assets/images/galleries/gallery-3/_DSC0443.webp'
</script>

<template>
  <section class="container mx-auto text-left my-12 font-urbanist">
    <h1 class="text-5xl font-bold text-primaryRed">
      Wielki start sezonu BLB! Bizony Rzeszów zmierzą się z Wizards Opole
    </h1>
    <div class="flex flex-row gap-6 mt-2 mb-12">
      <div class="flex flex-row gap-2 items-center">
        <img :src="authorIcon" class="w-11 rounded-full" alt="Ikona autora" />
        <p class="text-sm text-gray-500">Redakcja</p>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <img :src="calendarIcon" class="w-5" alt="Ikona kalendarza" />
        <p class="text-sm text-gray-500">12.04.2025</p>
      </div>
    </div>
    <h2 class="font-semibold text-2xl">
      Już w najbliższą niedzielę, 13 kwietnia 2025 roku, rusza nowy sezon Bałtyckiej Ligi Baseballu. Jeśli pogoda pozwoli, na boisku w Rybniku czeka nas prawdziwe sportowe święto – debiutujące w lidze Bizony Rzeszów zmierzą się z dobrze znanym rywalem, Wizards Opole. Obie ekipy spotkały się niedawno w sparingach, więc emocji z pewnością nie zabraknie.
    </h2>
    <img :src="postMainThumb" class="w-full h-auto mt-10" alt="obrazek główny wpisu" />

    <p class="font-base text-lg mt-8">
      Dla Wizards będzie to kolejna kampania w ramach BLB. Choć w ostatnich latach nie należeli do
      ligowej czołówki, zgromadzone doświadczenie i umiejętności czynią z nich solidnego
      przeciwnika. Poprzedni sezon zakończyli na 5. miejscu Dywizji B, zdobywając 7 punktów.
    </p>

    <p class="font-base text-lg mt-8">
      Rzeszowianie przystąpią do gry w najsilniejszym zestawieniu, a trener Jurczyński do ostatnich
      chwil trzyma w tajemnicy szczegóły rotacji miotaczy. Skład Bizonów to mieszanka rutyny i
      świeżej energii – obok doświadczonych ligowców jak Wietecha, Niegosz, Jakstas, Nicolas czy sam
      Jurczyński, na boisku zobaczymy również młodych zawodników, którzy dopiero niedawno rozpoczęli
      swoją przygodę z baseballem.
    </p>

    <p class="font-base text-lg mt-8">
      Dla Bizonów to pierwszy w historii mecz o ligowe punkty – i od razu spotkanie z wysoką stawką.
      Dwie wygrane w inauguracyjnym dwumeczu dałyby rzeszowianom wymarzony start w rozgrywkach i
      pozwoliły realnie myśleć o walce o miejsce w ligowej czołówce.
    </p>

    <p class="font-base text-lg mt-6">
      <b>Start dwumeczu:</b> niedziela, 13 kwietnia 2025, godz. 11:00 <br> <b>Miejsce</b>: Stadion
      Silesii, ul. Partyzantów 44, Rybnik
    </p>

    <h3 class="font-base text-2xl mt-8">
      <b>Kadra Bizonów Rzeszów na mecz z Wizards Opole:</b>
    </h3>
    <p class="font-base text-lg mt-8">
      <b>Miotacze (Pitchers):</b> Jurczyński, Nicolas <br />
      <b> Gracze pozycyjni (Position players):</b> Gawlik, Jakstas, Kluz, Kula, Kużel, Lasik,
      Niegosz, Oberc, Olszowy, Piekarz, Wietecha
    </p>
    <h3 class="font-bold text-2xl mt-8">Dotychczasowy bilans Bizony vs. Wizards:</h3>
    <p class="font-base text-lg mt-8">
      <b>Zwycięstwa–Porażki (W–L):</b> 2–3 <br><b>Punkty zdobyte–stracone (Runs):</b> 50–62
    </p>
  </section>
  <ScrollTop />
</template>
