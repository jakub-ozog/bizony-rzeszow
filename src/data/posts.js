import post1Thumb from '@/assets/images/posts/main/14.webp'
import post2Thumb from '@/assets/images/galleries/gallery-4/11.webp'
import post3Thumb from '@/assets/images/galleries/gallery-4/16.webp'
import post4Thumb from '@/assets/images/galleries/gallery-6/11.webp'
import post5Thumb from '@/assets/images/galleries/gallery-3/_DSC0443.webp'
import post6Thumb from '@/assets/images/posts/main/DSC0113.webp'
import post7Thumb from '@/assets/images/posts/post-6/IMGP0081.webp'
import post8Thumb from '@/assets/images/posts/main/article-main-thumb-4.webp'

export const blogPosts = [
  {
    id: 1,
    title: 'Poznaj Bizona: Krzysztof Jurczyński',
    excerpt:
      'Krzysztof Jurczyński, kluczowy zawodnik naszego zespołu, opowiada o swojej pasji do sportu, najtrudniejszych momentach sezonu i planach na przyszłość. Nie zabrakło też pytań o atmosferę w drużynie oraz osobiste cele na nadchodzące rozgrywki!',
    date: '2025-03-11',
    slug: 'poznaj-bizona-krzysztof-jurczynski',
    component: () => import('@/components/posts/PostMain.vue'),
    thumb: post1Thumb,
  },
  {
    id: 2,
    title: 'Bizony Rzeszów: Drużyna, która narodziła się z pasji z baseballu',
    excerpt:
      'Na hasło „baseball” wielu Polaków wzrusza ramionami. Niektórzy nie wiedzą, o czym mowa, inni kojarzą z grą w palanta. Ktoś jeszcze może dodać, że jedna drużyna odbija piłkę i biega, podczas gdy przeciwnicy rzucają i łapią. W dużym uproszczeniu taki opis oddaje przebieg gry, ale tylko dla postronnego widza. Baseball ma w sobie magię wynikającą z unikalnej kombinacji elegancji, taktyki i zasad gry. Dopiero głębsze zanurzenie się w tym świecie pozwala zrozumieć motywację grupy ludzi spędzających każdy weekend na doskonaleniu swoich umiejętności.',
    date: '2025-03-10',
    slug: 'bizony-rzeszow-druzyna-ktora-narodila-sie-z-pasji-do-baseballu',
    component: () => import('@/components/posts/PostSub.vue'),
    thumb: post2Thumb,
  },
  {
    id: 3,
    title: 'Bizonowe podsumowanie 2024 roku',
    excerpt:
      'Mijający rok obfitował w wydarzenia i emocje, które potwierdziły, że Bizony Rzeszów zmierzają we właściwym kierunku. W pierwszym pełnym roku istnienia drużyny zaliczyliśmy pierwsze zwycięstwa i pouczające przegrane boje przeciwko doświadczonym zespołom. Bizony angażowały się w życie kulturalne naszego pięknego miasta. Przedstawiliśmy lokalnej społeczności ukochaną dyscyplinę sportu i wzbudziliśmy ciekawość, która potem zaowocowała wzrostem frekwencji na treningach i meczach rozgrywanych w Rzeszowie. Zdobyte doświadczenie dodaje nam pewności, że baseball na stałe zagości w życiu mieszkańców Rzeszowa, a my zrobimy co w naszej mocy, by godnie reprezentować nasze miasto w rozgrywkach Bałtyckiej Ligi Baseballu w 2025 roku.',
    date: '2025-03-10',
    slug: 'bizonowe-podsumowanie-2024-roku',
    component: () => import('@/components/posts/PostSub2.vue'),
    thumb: post3Thumb,
  },
  {
    id: 4,
    title:
      'Wiosenne słońce, pierwsze zwycięstwo. Relacja z dwumeczu towarzyskiego z Wizards Opole.',
    excerpt:
      'Żory powitały zawodników piękną, wiosenną aurą - błękitne niebo, słońce i temperatura, która idealnie współgrała z rosnącym napięciem na boisku. W takich okolicznościach drużyny z Rzeszowa i Opola rozegrały swoje pierwsze starcie w sezonie 2025.',
    date: '2025-03-10',
    slug: 'relacja-z-dwumeczu-towarzyskiego-z-wizards-opole',
    component: () => import('@/components/posts/PostSub3.vue'),
    thumb: post4Thumb,
  },
  {
    id: 5,
    title: 'Wielki start sezonu BLB! Bizony Rzeszów zmierzą się z Wizards Opole',
    excerpt:
      '13 kwietnia rusza nowy sezon Bałtyckiej Ligi Baseballu. Ekipa z Rzeszowa zmierzy się z dobrze znanym rywalem. Czy Bizony przywiozą komplet punktów z Rybnika?',
    date: '2025-03-10',
    slug: 'wielki-start-sezonu-blb-bizony-rzeszow-zmierza-sie-z-wizards-opole',
    component: () => import('@/components/posts/PostSub4.vue'),
    thumb: post5Thumb,
  },

  {
    id: 6,
    title: 'Poznaj Bizona: Norbert Wietecha',
    excerpt:
      'O tym, jak Pantera stała się Bizonem. Poznajcie Norberta Wietechę – pierwszoligowca z Jasła, który po latach przerwy wrócił do baseballu, tym razem jako zawodnik i mentor rzeszowskich Bizonów.',
    date: '2025-04-25',
    slug: 'poznaj-bizona-norbert-wietecha',
    component: () => import('@/components/posts/PostSub5.vue'),
    thumb: post6Thumb,
  },
  {
    id: 7,
    title: 'Wygrana Bizonów w debiucie ligowym!',
    excerpt:
      'Pierwszy mecz ligowy w historii, pierwsza wygrana ligowa i pierwsza porażka. Tak wyglądały 2. urodziny Bizonów Rzeszów, które świętowali, rozgrywając dwumecz przeciwko Wizards Opole w ramach 1. kolejki grupy C Bałtyckiej Ligi Baseballu. Siedmiogodzinne zmagania dostarczyły wielu emocji zarówno zawodnikom, jak i kilkunastu kibicom zgromadzonym na rybnickim stadionie.',
    date: '2025-04-15',
    slug: 'wygrana-bizonow-w-debucie-ligowym',
    component: () => import('@/components/posts/PostSub6.vue'),
    thumb: post7Thumb,
  },
   {
    id: 8,
    title: 'Bizony kontra Kings. Kto przybliży się do finałów?',
    excerpt:
      'W najbliższą sobotę Bizony rozegrają kolejne mecze w ramach BLB. Czy postawią krok w kierunku awansu do TOP8?',
    date: '2025-06-05',
    slug: 'bizony-kontra-kings-kto-przyblizy-sie-do-finalow',
    component: () => import('@/components/posts/PostSub7.vue'),
    thumb: post8Thumb,
  },
]
