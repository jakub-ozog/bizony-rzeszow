import galleryCardThumb1 from '@/assets/images/galleries/gallery-1/_IMG9301.webp'
import galleryCardThumb2 from '@/assets/images/galleries/gallery-2/IMG_5569.webp'
import galleryCardThumb3 from '@/assets/images/galleries/gallery-3/_DSC0285.webp'
import galleryCardThumb4 from '@/assets/images/galleries/gallery-4/1.webp'
import galleryCardThumb5 from '@/assets/images/galleries/gallery-5/IMG_6224.webp'

export const mainGalleryCards = [
  {
    id: 1,
    title: 'Bizony Rzeszów - Kings Kraków (23.03.2024)',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum.',
    date: '24.03.2024',
    time: '18:00',
    thumb: galleryCardThumb1,
    author: 'Michał',
    slug: 'bizony-rzeszow-vs-kings-krakow-23-03-2024',
    component: () => import('@/components/galleries/GalleryEl1.vue'),
    link: { name: 'gallerySingle', params: { slug: 'bizony-rzeszow-vs-kings-krakow-23-03-2024' } },
  },

  {
    id: 2,
    title: 'Bizony Rzeszów - Kings Kraków (14.07.2024)',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum.',
    date: '15.07.2024',
    time: '18:00',
    thumb: galleryCardThumb2,
    author: 'Admin',
    slug: 'bizony-rzeszow-vs-kings-krakow-14-07-2024',
    component: () => import('@/components/galleries/GalleryEl2.vue'),
    link: { name: 'gallerySingle', params: { slug: 'bizony-rzeszow-vs-kings-krakow-14-07-2024' } },
  },
  {
    id: 3,
    title: 'Bizony Rzeszów - Wizards Opole (27.07.2024)',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum.',
    date: '28.07.2024',
    time: '18:00',
    thumb: galleryCardThumb3,
    author: 'Krzysztof',
    slug: 'bizony-rzeszow-vs-wizards-opole-27-07-2024',
    component: () => import('@/components/galleries/GalleryEl3.vue'),
    link: { name: 'gallerySingle', params: { slug: 'bizony-rzeszow-vs-wizards-opole-27-07-2024' } },
  },
  {
    id: 4,
    title: 'Razem w Baseballu (24.08.2024)',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum.',
    date: '24.08.2024',
    time: '18:00',
    thumb: galleryCardThumb4,
    author: 'Krzysztof',
    slug: 'razem-w-baseballu-24-08-2024',
    component: () => import('@/components/galleries/GalleryEl4.vue'),
    link: { name: 'gallerySingle', params: { slug: 'razem-w-baseballu-24-08-2024' } },
  },
  {
    id: 5,
    title: 'Dzień Osiedla Miłocin (31.08.2024)',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum.',
    date: '21.06.2025',
    time: '18:00',
    thumb: galleryCardThumb5,
    author: 'Krzysztof',
    slug: 'dzien-osiedla-milocin-31-08-2024',
    component: () => import('@/components/galleries/GalleryEl5.vue'),
    link: { name: 'gallerySingle', params: { slug: 'dzien-osiedla-milocin-31-08-2024' } },
  },
]

export default mainGalleryCards
