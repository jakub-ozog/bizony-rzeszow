<script setup>
import authorIcon from '@/assets/images/michal-oberc-author.webp'
import calendarIcon from '@/assets/icons/calendar-icon.svg'
import postMainThumb from '@/assets/images/posts/main/article-main-thumb-4.webp'
</script>

<template>
  <section class="container mx-auto text-left my-12 font-urbanist">
    <h1 class="text-5xl font-bold text-primaryRed">Bizony kontra Kings. Kto przybliży się do finałów?</h1>
    <div class="flex flex-row gap-6 mt-4 mb-12">
      <div class="flex flex-row gap-2 items-center">
        <img :src="authorIcon" class="w-11 rounded-full" alt="Ikona autora" />
        <p class="text-sm text-gray-500">Michał Oberc</p>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <img :src="calendarIcon" class="w-5" alt="Ikona kalendarza" />
        <p class="text-sm text-gray-500">05.06.2025</p>
      </div>
    </div>
    <p class="font-semibold text-lg">

    </p>
    <img :src="postMainThumb" class="w-full h-auto mt-10" alt="obrazek główny wpisu" />


    <h2 class="text-2xl font-semibold text-lightBlack my-6">
      W najbliższą sobotę Bizony rozegrają kolejne mecze w ramach BLB. Czy postawią krok w kierunku awansu do TOP8?
    </h2>


    <p class="font-base text-lg my-6">
      W najbliższą sobotę Żory będą gospodarzem jednego z kluczowych pojedynków rundy zasadniczej Bałtyckiej Ligi
      Baseballu. Na boisku spotkają się dwie drużyny, które liczą się w walce o awans do TOP 8 – Bizonów Rzeszów i
      Kraków Kings.
    </p>

    <p class="font-base text-lg my-6">
      To rywalizacja, która ma już swoją historię. Obie ekipy mierzyły się ośmiokrotnie w ostatnich miesiącach, choć
      dotąd były to mecze towarzyskie. Tym razem stawką są nie tylko punkty, ale także być albo nie być w fazie
      finałowej rozgrywek.
    </p>


    <h3 class="font-semibold text-xl">Aktualna sytuacja w Grupie C:</h3>
    <ul class=" font-base my-6">
      <li class="font-base text-lg list-disc ml-8 mt-3">
        Kraków Kings mają na koncie <b>4 punkty</b> po dwumeczu z Wizards Opole.
      </li>
      <li class="font-base text-lg list-disc ml-8">
        Bizony Rzeszów zdobyły <b>2 punkty</b> również w starciu z opolanami.
      </li>
    </ul>

    <p class="font-base text-lg my-6">
      To właśnie te wyniki sprawiają, że sobotnie mecze mogą przesądzić o losach awansu. Podwójna wygrana jednej z
      drużyn znacznie przybliży ją do miejsca w TOP 8 i pozwoli ze spokojem podejść do ostatniego starcia z Rawą
      Katowice. Dla Bizonów to mecze o wszystko – by liczyć się w walce o finały, powinni zdobyć przynajmniej dwa
      punkty.
    </p>


    <h3 class="font-semibold text-xl my-6">
      Bilans Bizony vs. Kings w latach 2024-2025
    </h3>

    <p class="font-base text-lg my-6">
      <strong>Zwycięstwa–Porażki (W–L):</strong> 2–6 <br>
      <strong>Punkty zdobyte–Stracone (Runs):</strong> 50–62
    </p>

    <p class="font-base text-lg my-6">
      <strong> Start dwumeczu:</strong> sobota, 7 czerwca 2025, godz. 11:00 <br>
      <strong> Miejsce:</strong> Stadion Gepardów, ul. Minimalna 2, Żory
    </p>


  </section>
</template>
