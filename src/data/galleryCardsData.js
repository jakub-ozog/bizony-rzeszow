import galleryCardThumb1 from '@/assets/images/main_gallery_card_1.png'
import galleryCardThumb2 from '@/assets/images/main_gallery_card_2.png'
import galleryCardThumb3 from '@/assets/images/main_gallery_card_3.png'

export const mainGalleryCards = [
  {
    id: 1,
    title: 'Bizony - Kings',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum.',
    date: '21.06.2025',
    time: '18:00',
    thumb: galleryCardThumb1,
    author: 'Michał',
    slug: 'fotorelacja-ze-spotkania-z-wizards-opole',
    component: () => import('@/components/galleries/GalleryEl1.vue'),
    link: { name: 'gallerySingle', params: { slug: 'fotorelacja-ze-spotkania-z-wizards-opole' } },
  },
  {
    id: 2,
    title: 'Fotorelacja ze spotkania z Wizards Opole',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum.',
    date: '21.06.2025',
    time: '18:00',
    thumb: galleryCardThumb2,
    author: 'Michał',
    slug: 'fotorelacja-ze-spotkania-z-wizards-opole-2',
    component: () => import('@/components/galleries/GalleryEl2.vue'),
    link: { name: 'gallerySingle', params: { slug: 'fotorelacja-ze-spotkania-z-wizards-opole-2' } },
  },
  {
    id: 3,
    title: 'Fotorelacja ze spotkania z Wizards Opole',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum.',
    date: '21.06.2025',
    time: '18:00',
    thumb: galleryCardThumb3,
    author: 'Krzysztof',
    slug: 'fotorelacja-ze-spotkania-z-wizards-opole-3',
    component: () => import('@/components/galleries/GalleryEl3.vue'),
    link: { name: 'gallerySingle', params: { slug: 'fotorelacja-ze-spotkania-z-wizards-opole-3' } },
  },
  {
    id: 4,
    title: 'Fotorelacja ze spotkania z Wizards Opole',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum.',
    date: '21.06.2025',
    time: '18:00',
    thumb: galleryCardThumb3,
    author: 'Krzysztof',
    slug: 'fotorelacja-ze-spotkania-z-wizards-opole-3',
    component: () => import('@/components/galleries/GalleryEl4.vue'),
    link: { name: 'gallerySingle', params: { slug: 'fotorelacja-ze-spotkania-z-wizards-opole-4' } },
  },
  {
    id: 5,
    title: 'Fotorelacja ze spotkania z Wizards Opole',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum.',
    date: '21.06.2025',
    time: '18:00',
    thumb: galleryCardThumb3,
    author: 'Krzysztof',
    slug: 'fotorelacja-ze-spotkania-z-wizards-opole-3',
    component: () => import('@/components/galleries/GalleryEl5.vue'),
    link: { name: 'gallerySingle', params: { slug: 'fotorelacja-ze-spotkania-z-wizards-opole-5' } },
  },
]

export default mainGalleryCards
