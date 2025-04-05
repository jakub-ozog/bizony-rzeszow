import post1Thumb from '@/assets/images/posts/main/14.webp'
import post2Thumb from '@/assets/images/galleries/gallery-4/11.webp'
import post3Thumb from '@/assets/images/galleries/gallery-4/16.webp'

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
]
