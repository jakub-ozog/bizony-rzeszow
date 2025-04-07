import articleImageSub1 from '@/assets/images/galleries/gallery-3/_DSC0335.webp'
import articleImageMain from '@/assets/images/posts/main/14.webp'
import articleImageSub2 from '@/assets/images/galleries/gallery-4/11.webp'

const mainNews = [
  {
    id: 1,
    title: 'Poznaj Bizona: Krzysztof Jurczyński',
    description:
      'W ekskluzywnym wywiadzie Krzysztof, kluczowy zawodnik naszego zespołu bejsbolowego, opowiada o swojej pasji do sportu, najtrudniejszych momentach sezonu i planach na przyszłość. Zdradza, jak radzi sobie z presją na boisku i co najbardziej motywuje go do walki o zwycięstwo. Nie zabrakło też pytań o atmosferę w drużynie oraz osobiste cele na nadchodzące rozgrywki!',
    date: '21.06.2025',
    author: '18:00',
    thumb1: articleImageMain,
    isFeatured: true,
    link: { name: 'postDetail', params: { slug: 'poznaj-bizona-krzysztof-jurczynski' } },
  },
  {
    id: 2,
    title: 'Bizony Rzeszów: Historia drużyny, która narodziła się z pasji',
    description:
      'W artykule przyglądamy się historii baseballu i jej wpływowi na rozwój tej dyscypliny w Polsce. Przechodzimy do opowieści o powstaniu Bizonów Rzeszów - drużyny, która zrodziła się z pasji i determinacji jej założycieli.',
    author: '18:00',
    thumb2: articleImageSub1,
    isFeatured: false,
    link: {
      name: 'postDetail',
      params: { slug: 'bizony-rzeszow-druzyna-ktora-narodila-sie-z-pasji-do-baseballu' },
    },
  },
  {
    id: 3,
    title: 'Bizonowe podsumowanie 2024 roku',
    description:
      'Mijający rok obfitował w wydarzenia i emocje, które potwierdziły, że Bizony Rzeszów zmierzają we właściwym kierunku. W pierwszym pełnym roku istnienia drużyny zaliczyliśmy pierwsze zwycięstwa i pouczające przegrane boje przeciwko doświadczonym zespołom. Bizony angażowały się w życie kulturalne naszego pięknego miasta.',
    date: '21.06.2025',
    author: '18:00',
    thumb3: articleImageSub2,
    isFeatured: false,
    link: { name: 'postDetail', params: { slug: 'bizonowe-podsumowanie-2024-roku' } },
  },
]

export default mainNews
