<script setup>
import playerFeaturedImg from '@/assets/images/player_featured_img.png'
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8 mt-8 align-baseline">
    <div>
      <h5 class="font-bold text-accentBlue text-3xl">Krzysztof Jurczyński</h5>
      <p class="text-lightGrey font-thin">zawodnik, trener, organizator</p>

      <div class="md:w-3/4">
        <p class="font-semibold text-base mt-8 mb-4">
          Chyba nie zaskoczę Cię moim pierwszym pytaniem. Dlaczego wybrałeś baseball?
        </p>
        <p class="text-base font-normal">
          W dzieciństwie oglądałem dużo filmów amerykańskich, w których często pokazywano baseball.
          To dlatego zauroczyłem się w tym sporcie. W wieku 13 lat poznałem starszych kolegów, z
          którymi zaczęliśmy wspólną przygodę baseballową. Szczęśliwym trafem nawiązaliśmy kontakt z
          panią, która występowała w polskiej kadrze narodowej. Pokazała nam technikę narzutu i jak
          poprawnie wybijać piłkę. Właśnie tak rozpoczęła się moja przygoda z baseballem. Niestety
          wtedy w Rzeszowie nie udało się zorganizować więcej, a moje marzenia prysły. Po ukończeniu
          szkoły średniej przeprowadziłem się do Warszawy, gdzie rozpocząłem treningi w zespole
          Pasikoników (obecnie Dragons), jednak trudno mi było łączyć obowiązki w pracy ze sportem.
        </p>

        <p class="font-semibold text-base mt-8 mb-4">
          Marzenia powróciły w mało oczekiwanym momencie?
        </p>
        <div class="relative">
          <p class="text-base font-normal">
            To trochę prawda. Po latach powróciliśmy z żoną do Rzeszowa, a pewnego wieczoru
            przeglądałem Facebooka i nagle znalazłem ogłoszenie o treningach baseballowych.
            Natychmiast obudziły się we mnie te dziecięce marzenia i postanowiłem podjąć rękawicę
            kolejny raz. Szczęśliwie spotkałem innych pasjonatów baseballu w Rzeszowie.
          </p>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#f6f6f6]"></div>
        </div>
      </div>

      <button
        class="flex justify-center items-center text-center border border-primaryRed text-primaryRed rounded-2xl py-2 px-4 my-4 mt-8"
      >
        <span class="text-[0.75rem] font-normal mr-2">Przeczytaj cały wywiad z Bizonem tutaj </span>
      </button>
    </div>

    <div class="relative w-full">
      <img :src="playerFeaturedImg" class="absolute top-0 right-0 max-w-[1000px]" alt="" />
    </div>
  </div>
</template>
