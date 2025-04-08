import articleImageSub1 from '@/assets/images/galleries/gallery-3/_DSC0335.webp'
import articleImageMain from '@/assets/images/posts/main/14.webp'
import articleImageSub2 from '@/assets/images/galleries/gallery-4/11.webp'
import articleImageSub3 from '@/assets/images/galleries/gallery-6/11.webp'

const mainNews = [
  {
    id: 1,
    title: 'Poznaj Bizona: Krzysztof Jurczyński',
    description:
      'Krzysztof, kluczowy zawodnik naszego zespołu, opowiada o swojej pasji do baseballu, najważniejszych momentach poprzedniego sezonu oraz planach na przyszłość. Nie zabrakło też pytań o atmosferę w drużynie oraz osobiste cele na nadchodzące rozgrywki!',
    date: '09.04.2025',
    author: '18:00',
    thumb1: articleImageMain,
    isFeatured: true,
    link: { name: 'postDetail', params: { slug: 'poznaj-bizona-krzysztof-jurczynski' } },
  },
  {
    id: 2,
    title: 'Bizony Rzeszów: Drużyna, która narodziła się z pasji do baseballu.',
    description:
      'Baseball ma w sobie magię wynikającą z unikalnej kombinacji elegancji, taktyki i zasad gry. Dopiero głębsze zanurzenie się w tym świecie pozwala zrozumieć motywację grupy ludzi spędzających każdy weekend na doskonaleniu swoich umiejętności.',
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
  {
    id: 4,
    title:
      'Wiosenne słońce, pierwsze zwycięstwo. Relacja z dwumeczu towarzyskiego z Wizards Opole.',
    description:
      'Żory powitały zawodników piękną, wiosenną aurą – błękitne niebo, słońce i temperatura, która idealnie współgrała z rosnącym napięciem na boisku. W takich okolicznościach drużyny z Rzeszowa i Opola rozegrały swoje pierwsze starcie w sezonie 2025.',
    date: '22.03.2025',
    author: '18:00',
    thumb4: articleImageSub3,
    isFeatured: false,
    link: {
      name: 'postDetail',
      params: { slug: 'relacja-z-dwumeczu-towarzyskiego-z-wizards-opole' },
    },
  },
]

export default mainNews
