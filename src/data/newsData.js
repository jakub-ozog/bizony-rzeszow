import articleImageMain from '@/assets/images/article_1_thumb.webp';
import articleImageSub1 from '@/assets/images/article_2_thumb.webp';
import articleImageSub2 from '@/assets/images/article_3_thumb.webp';

const mainNews = [
  {
    id: 1,
    title: 'Bizony wygrywają w pierwszej rundzie!',
    description: 'W miniony weekend drużyna Bizonów Rzeszów ponownie stanęła do walki na boisku baseballowym, dostarczając kibicom niezapomnianych emocji. Dynamiczne zagrania, precyzyjne rzuty i zacięta rywalizacja sprawiły, że serca fanów biły szybciej. Czy Bizonom udało się przechylić szalę zwycięstwa na swoją korzyść? Zapraszamy do relacji z meczu, w której znajdziecie najciekawsze momenty, kluczowe zagrania oraz komentarze zawodników i trenera!',
    date: '21.06.2025',
    author: '18:00',
    thumb1: articleImageMain,
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Perfect game Jurczyńskiego',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum Czytaj wiecej',
    date: '21.06.2025',
    author: '18:00',
    thumb2: articleImageSub1,
    isFeatured: false,
  },
  {
    id: 3,
    title: 'Piknik rodzinny w Kraczkowej',
    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum.".... Czytaj wiecej',
    date: '21.06.2025',
    author: '18:00',
    thumb3: articleImageSub2,
    isFeatured: false,
  }
];

export default mainNews;
