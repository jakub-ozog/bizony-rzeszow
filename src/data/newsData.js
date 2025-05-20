import articleImageSub1 from '@/assets/images/galleries/gallery-3/_DSC0335.webp'
import articleImageMain from '@/assets/images/posts/main/14.webp'
import articleImageSub2 from '@/assets/images/galleries/gallery-4/11.webp'
import articleImageSub3 from '@/assets/images/galleries/gallery-6/11.webp'
import articleImageSub4 from '@/assets/images/galleries/gallery-3/_DSC0443.webp'
import articleImageSub5 from '@/assets/images/posts/main/DSC0113.webp'
import articleImageSub6 from '@/assets/images/posts/post-6/IMGP0081.webp'

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
      'Żory powitały zawodników piękną, wiosenną aurą  W takich okolicznościach drużyny z Rzeszowa i Opola rozegrały swoje pierwsze mecze w sezonie 2025.',
    date: '22.03.2025',
    author: '18:00',
    thumb4: articleImageSub3,
    isFeatured: false,
    link: {
      name: 'postDetail',
      params: { slug: 'relacja-z-dwumeczu-towarzyskiego-z-wizards-opole' },
    },
  },
  {
    id: 5,
    title: 'Wielki start sezonu BLB! Bizony Rzeszów zmierzą się z Wizards Opole',
    description:
      '13 kwietnia rusza nowy sezon Bałtyckiej Ligi Baseballu. Ekipa z Rzeszowa zmierzy się z dobrze znanym rywalem. Czy Bizony przywiozą komplet punktów z Rybnika?',
    date: '12.04.2025',
    author: '18:00',
    thumb5: articleImageSub4,
    isFeatured: false,
    link: {
      name: 'postDetail',
      params: { slug: 'wielki-start-sezonu-blb-bizony-rzeszow-zmierza-sie-z-wizards-opole' },
    },
  },
  {
    id: 6,
    title: 'Poznaj Bizona: Norbert Wietecha',
    description:
      'O tym, jak Pantera stała się Bizonem. Poznajcie Norberta Wietechę – pierwszoligowca z Jasła, który po latach przerwy wrócił do baseballu, tym razem jako zawodnik i mentor rzeszowskich Bizonów.',
    date: '25.04.2025',
    author: '18:00',
    thumb6: articleImageSub5,
    isFeatured: false,
    link: {
      name: 'postDetail',
      params: { slug: 'poznaj-bizona-norbert-wietecha' },
    },
  },

  {
    id: 7,
    title: 'Wygrana Bizonów w debiucie ligowym!',
    description:
      'Pierwszy mecz ligowy w historii, pierwsza wygrana ligowa i pierwsza porażka. Tak wyglądały 2. urodziny Bizonów Rzeszów, które świętowali, rozgrywając dwumecz przeciwko Wizards Opole w ramach 1. kolejki grupy C Bałtyckiej Ligi Baseballu. Siedmiogodzinne zmagania dostarczyły wielu emocji zarówno zawodnikom, jak i kilkunastu kibicom zgromadzonym na rybnickim stadionie.',
    date: '15.04.2025',
    author: '18:00',
    thumb7: articleImageSub6,
    isFeatured: false,
    link: {
      name: 'postDetail',
      params: { slug: 'wygrana-bizonow-w-debucie-ligowym' },
    },
  },
]

export default mainNews
