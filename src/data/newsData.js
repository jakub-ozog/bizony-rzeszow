import articleImageSub1 from '@/assets/images/galleries/gallery-3/_DSC0335.webp'
import articleImageMain from '@/assets/images/article_2_thumb.webp'
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
    link: { name: 'postDetail', params: { slug: 'drugi-post' } },
  },
  {
    id: 3,
    title: 'Bizonowe podsumowanie 2024 roku',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum.".... Czytaj wiecej',
    date: '21.06.2025',
    author: '18:00',
    thumb3: articleImageSub2,
    isFeatured: false,
    link: { name: 'postDetail', params: { slug: 'trzeci-post' } },
  },
]

export default mainNews
