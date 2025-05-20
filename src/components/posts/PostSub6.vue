<script setup>
import authorIcon from '@/assets/images/michal-oberc-author.webp'
import calendarIcon from '@/assets/icons/calendar-icon.svg'
import postMainThumb from '@/assets/images/posts/post-6/IMGP0081.webp'

const resultsTable1 = {
  dane: [
    { team: 'Bizony', 1: 7, 2: 6, 3: 1, 4: 0, 5: 0, 6: 0, 7: 0, R: 14 },
    { team: 'Wizards', 1: 4, 2: 0, 3: 1, 4: 0, 5: 2, 6: 1, 7: 5, R: 13 },
  ],
  kolumny: [
    { field: 'team', header: 'Drużyna' },
    { field: '1', header: '1' },
    { field: '2', header: '2' },
    { field: '3', header: '3' },
    { field: '4', header: '4' },
    { field: '5', header: '5' },
    { field: '6', header: '6' },
    { field: '7', header: '7' },
    { field: 'R', header: 'Suma' },
  ],
}

const resultsTable2 = {
  dane: [
    { team: 'Bizony', 1: 2, 2: 2, 3: 6, 4: 0, 5: 0, 6: 1, 7: 2, R: 13 },
    { team: 'Wizards', 1: 7, 2: 0, 3: 0, 4: 4, 5: 1, 6: 6, 7: 2, R: 20 },
  ],
  kolumny: [
    { field: 'team', header: 'Drużyna' },
    { field: '1', header: '1' },
    { field: '2', header: '2' },
    { field: '3', header: '3' },
    { field: '4', header: '4' },
    { field: '5', header: '5' },
    { field: '6', header: '6' },
    { field: '7', header: '7' },
    { field: 'R', header: 'Suma' },
  ],
}
</script>

<template>
  <section class="container mx-auto text-left my-12 font-urbanist">
    <h1 class="text-5xl font-bold text-primaryRed">Wygrana Bizonów w debiucie ligowym!</h1>
    <div class="flex flex-row gap-6 mt-4 mb-12">
      <div class="flex flex-row gap-2 items-center">
        <img :src="authorIcon" class="w-11 rounded-full" alt="Ikona autora" />
        <p class="text-sm text-gray-500">Michał Oberc</p>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <img :src="calendarIcon" class="w-5" alt="Ikona kalendarza" />
        <p class="text-sm text-gray-500">15.04.2025</p>
      </div>
    </div>
    <p class="font-semibold text-lg"></p>
    <img :src="postMainThumb" class="w-full h-auto mt-10" alt="obrazek główny wpisu" />

    <h2 class="text-2xl font-semibold text-lightBlack my-12">
      Pierwszy mecz ligowy w historii, pierwsza wygrana ligowa i pierwsza porażka. Tak wyglądały 2.
      urodziny Bizonów Rzeszów, które świętowali, rozgrywając dwumecz przeciwko Wizards Opole w
      ramach 1. kolejki grupy C Bałtyckiej Ligi Baseballu. Siedmiogodzinne zmagania dostarczyły
      wielu emocji zarówno zawodnikom, jak i kilkunastu kibicom zgromadzonym na rybnickim stadionie.
    </h2>

    <p class="font-base text-lg my-6">
      Plan inauguracji: 6:30 – wyjazd z Rzeszowa, 10:00 – rozgrzewka, 11:00 – start meczu. Obie
      drużyny znały swoje mocne i słabe strony, mierzyły się bowiem pięciokrotnie w meczach
      towarzyskich na przestrzeni ostatnich dziewięciu miesięcy. Tym razem jednak stawką były cenne
      punkty ligowe, co przełożyło się na większą determinację w walce o każdą bazę.
    </p>

    <p class="font-base text-lg my-6">
      Pierwszy mecz rozpoczął się od pojedynku Łukasiewicza z pałkarzami Bizonów. Udane odbicie
      Jakstasa było niczym wystrzał korka od urodzinowego szampana — idealny początek nowego
      rozdziału w historii rzeszowskiego baseballu. W ślad za litewskim weteranem poszli jego
      koledzy. Kula, Niegosz i Wietecha dostali bazy za darmo, a Jakstas dotarł do bazy domowej,
      notując pierwszy run dla Bizonów. Miotacz gospodarzy miał duże problemy z trafianiem w strike
      zone, co umożliwiało kolejnym zawodnikom przesuwanie się po bazach. Udanym odbiciem popisał
      się również Nicolas i ostatecznie aż siedmiu biegaczy pokonało pełny dystans. Wynik 7:0
      zaskoczył nawet samych rzeszowian.
    </p>

    <p class="font-base text-lg my-6">
      Jednak opolanie szybko odpowiedzieli w dolnej połowie pierwszego inningu. Starter Bizonów,
      Pierre Nicolas, nie czuł się pewnie w starciu z pałkarzami rywali. Todd Schreiner, Łukasiewicz
      i Gąsior weszli na pierwszą bazę za darmo, a Symietz i Glinka zaliczyli odbicia, co przełożyło
      się na cztery punkty dla gospodarzy.
    </p>

    <p class="font-base text-lg my-6">
      Drugi inning przebiegał pod kontrolą Bizonów. Wizards sięgnęli po kolejnego miotacza —
      Grzegorza Marsollka — jednak odbicia Wietechy, Kużela i Olszowego zmusiły nowego zawodnika na
      górce do częstych, nerwowych spojrzeń na bazy zajęte przez biegaczy z Rzeszowa. Pałkarze
      Bizonów wykazali dużą cierpliwość i skuteczność, co zaowocowało kolejnymi punktami. Na koniec
      tej części meczu Bizony dopisały sześć runów, a Nicolas we współpracy z defensywą
      błyskawicznie zaliczył trzy outy na zawodnikach z Opola.
    </p>

    <p class="font-base text-lg my-6">
      Po drugim inningu Bizony prowadziły 13:4 i wydawało się, że debiutanci z Podkarpacia
      kontrolują przebieg spotkania. Kolejny miotacz Wizards, Stanisław Strumiński — leworęczny
      zawodnik wypożyczony z Gepardów Żory — zdołał zatrzymać ofensywę Bizonów. Choć nie ustrzegł
      się słabszych rzutów, rzeszowianie nie zdołali w pełni wykorzystać problemów defensywy rywali.
    </p>

    <p class="font-base text-lg my-6">
      Przy stanie 14:7 Nicolas opuścił boisko, a na górkę wszedł Krzysztof Jurczyński, jeden z
      czołowych miotaczy zespołu. To on miał postawić kropkę nad "i" i przypieczętować zwycięstwo.
      Jednak niespodziewanie — jak za dotknięciem czarodziejskiej różdżki — zawodnicy z Opola
      odzyskali rytm i zaczęli wykorzystywać każde potknięcie rywala. Najpierw Marsollek i Gąsior
      weszli na bazy, potem Jurczyński z kolegami zdołali zatrzymać Kierońskiego i Strumińskiego.
      Wydawało się, że trzeci out to kwestia kilku rzutów. Agresja i determinacja Wizardsów
      wytrąciła jednak Bizony z równowagi. Todd Schreiner, Symietz i Budzowski nie tylko dostali się
      na bazy, ale po odbiciach Łukasiewicza i Glinki — zdobyli kolejne punkty. Przewaga Bizonów
      stopniała do jednego punktu.
    </p>

    <p class="font-base text-lg my-6">
      Na szczęście Jurczyński zachował zimną krew w kluczowym momencie, odesłał z kwitkiem Filipa
      Schreinera i utrzymał jednopunktowe prowadzenie, zapewniając Bizonom historyczne, pierwsze
      zwycięstwo w lidze.
    </p>

    <!-- tabela 1 -->
    <!-- <h3>Tabela 1</h3> -->
    <DataTable :value="resultsTable1.dane">
      <!-- Nazwa drużyny bold -->
      <PrimeColumn field="team" header="Drużyna">
        <template #body="slotProps">
          <span class="font-bold">{{ slotProps.data.team }}</span>
        </template>
      </PrimeColumn>

      <!-- Pozostałe kolumny -->
      <PrimeColumn
        v-for="col in resultsTable1.kolumny.slice(1, -1)"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      />

      <!-- Kolumna suma - bold -->
      <PrimeColumn field="R">
        <template #header>
          <span class="font-bold">Suma</span>
          <!-- Pogrubiony nagłówek -->
        </template>
        <template #body="slotProps">
          <span class="font-bold">{{ slotProps.data.R }}</span>
        </template>
      </PrimeColumn>

      <template #empty> Brak danych do wyświetlenia. </template>
    </DataTable>

    <p class="font-base text-lg my-6">
      <b> Bizony: </b><br />
      Jakstas SS, Kula CF, Niegosz 3B-RF, Wietecha 1B, Kużel RF, Oberc 2B, Olszowy LF, Kluz C,
      Nicolas P <b>Zmiennicy</b>: P. Piekarz 3B ,Gawlik RF, Jurczyński P
      <br />
      <b>Wizards:</b><br />
      T. Shreiner C, Symietz SS, Budzowski LF-3B, Łukasiewicz P-2B, Glinka 1B, Marsollek 2B-P-RF,
      Gąsior 3B-LF, Kieroński CF, Ćwikła RF <b>Zmiennicy:</b> Strumiński P, F. Schreiner RF,
      Smoliński LF
    </p>

    <p class="font-base text-lg my-6">
      Końcówka pierwszego starcia pozostawiła obie drużyny w skrajnie różnych nastrojach. Bizony
      odetchnęły z ulgą i w drugim meczu chciały przerwać niekorzystną passę, jaką notowały od
      piątego inningu poprzedniego pojedynku. Z kolei Wizards byli bliscy odwrócenia losów spotkania
      i z każdą kolejną wizytą pałkarza na bazie zyskiwali coraz większą pewność siebie.
    </p>
    <p class="font-base text-lg my-6">
      Na nieszczęście Bizonów, gospodarze od razu zadali serię mocnych ciosów i szybko odesłali
      rywali do defensywy. Tym razem to rzeszowianie zaczynali od obrony, a na górce pojawił się
      Jurczyński. Dało się wyczuć nerwowość w poczynaniach gości, a opolanie bezlitośnie
      wykorzystywali każdy przejaw nieporadności. Jurczyński i spółka dopuścili pierwszych siedmiu
      pałkarzy do udanych odbić lub darmowych wejść na pierwszą bazę. Poziom emocji dodatkowo
      podnieśli T. Schreiner z Opola i Oberc z Rzeszowa. Drugobazowy Bizonów popełnił błąd, blokując
      bazę biegaczowi, co wywołało irytację rywala. Panowie wymienili się mało uprzejmymi gestami,
      jednak sędzia wykazał się dużą wyrozumiałością dla obu stron.
    </p>
    <p class="font-base text-lg my-6">
      Słabość Bizonów zaczęła ustępować po stracie siódmego punktu. Rzeszowianie ruszyli do boju i
      rozpoczęli odrabianie strat. Niegosz i Jakstas otrzymali „prezenty” od miotacza Kierońskiego,
      a Olszowy odbiciem posłał piłkę na tyle daleko, że biegacze zdobyli dwa punkty.
    </p>

    <p class="font-base text-lg my-6">
      Stan 7:2 nie utrzymał się długo. Jurczyński zyskał nową energię, a ofensywa Bizonów znów
      zaczęła punktować. Kieroński nadal miał problemy z trafieniem w strike zone, co wykorzystali
      Oberc i Kula — obaj pokonali pełen dystans dzięki skutecznym odbiciom Niegosza i Jakstasa. Po
      zakończeniu drugiego inningu strata stopniała do trzech punktów, a świetny trzeci inning
      pozwolił Bizonom wyjść na prowadzenie. Olszowy i Jurczyński dwukrotnie wygrali pojedynki z
      miotaczem Wizards, a w ich ślady poszli Gawlik, Kula, Niegosz, Jakstas i Wietecha. Bizony
      zdobyły sześć punktów i objęły prowadzenie 10:7.
    </p>

    <p class="font-base text-lg my-6">
      Od tego momentu Czarodzieje odzyskali równowagę. Na górce pojawili się kolejno T. Schreiner i
      Strumiński, którzy — wspierani solidną defensywą — skutecznie powstrzymywali napór rywala.
      Natomiast roszady w składzie Bizonów, wymuszone kontuzjami, oraz zmiana miotacza na Jakstasa
      nie przyniosły spodziewanych rezultatów. W czwartym inningu Wizards zdobyli cztery punkty
      dzięki dobrym odbiciom i darmowym wejściom na bazy. W kolejnej odsłonie dołożyli jeden pełny
      obieg i, przy niemocy ofensywnej gości, objęli prowadzenie 12:10.
    </p>

    <p class="font-base text-lg my-6">
      Przed rozpoczęciem szóstego inningu zwycięstwo wciąż było w zasięgu Bizonów, jednak końcówka
      należała do Opola. Na osiem zdobytych punktów Wizards, Bizony odpowiedziały zaledwie jednym
      runem i do decydującej fazy meczu przystępowały z dziewięciopunktowym deficytem. Jakiekolwiek
      zaklęcia zastosowali Czarodzieje — zadziałały. Nie przydarzył im się nagły spadek formy, jak w
      przypadku Bizonów pod koniec pierwszego spotkania. Goście zdołali zdobyć jeszcze dwa punkty za
      sprawą runów Kuli i Niegosza, ale to nie wystarczyło, by odrobić straty.
    </p>

    <p class="font-base text-lg my-6">
      Bizonom w pamięci pozostał debiut i pierwsze ligowe zwycięstwo w historii, natomiast Wizards
      zdobyli cenne punkty i dzięki lepszemu bilansowi zdobytych i straconych runów objęli
      prowadzenie w grupie C.
    </p>

    <!-- tabela 2 -->

    <DataTable :value="resultsTable2.dane">
      <!-- Nazwa drużyny bold -->
      <PrimeColumn field="team" header="Drużyna">
        <template #body="slotProps">
          <span class="font-bold">{{ slotProps.data.team }}</span>
        </template>
      </PrimeColumn>

      <!-- Pozostałe kolumny -->
      <PrimeColumn
        v-for="col in resultsTable2.kolumny.slice(1, -1)"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      />

      <!-- Kolumna suma - bold -->
      <PrimeColumn field="R">
        <template #header>
          <span class="font-bold">Suma</span>
          <!-- Pogrubiony nagłówek -->
        </template>
        <template #body="slotProps">
          <span class="font-bold">{{ slotProps.data.R }}</span>
        </template>
      </PrimeColumn>

      <template #empty> Brak danych do wyświetlenia. </template>
    </DataTable>

    <p class="font-base text-lg my-6">
      <b> Bizony: </b><br />
      Kula CF, Niegosz 3B-SS, Jakstas SS-P, Olszowy LF-3B, Jurczyński P-LF-RF, Gawlik RF, Kluz C,
      Oberc 2B <b>Zmiennicy:</b> Nicolas P, P. Piekarz 2B, Kużel 2B
      <br />
      <b>Wizards:</b><br />
      T. Schreiner SS-P-1B, Symietz CF, Budzowski LF-C, Glinka 1B, Gąsior C, Foryś 3B-CF, F.
      Schreiner 2B, Smoliński RF, Kieroński P <b>Zmiennicy:</b> Strumiński P-1B, Łukasiewicz 3B,
      Ćwikła LF, Smolińska RF, E.Piekarz RF, Marsollek SS
    </p>
  </section>
</template>
