import galleryCardThumb1 from '@/assets/images/galleries/gallery-1/_IMG9301.webp'
import galleryCardThumb2 from '@/assets/images/galleries/gallery-2/IMG_5569.webp'
import galleryCardThumb3 from '@/assets/images/galleries/gallery-3/_DSC0285.webp'
import galleryCardThumb4 from '@/assets/images/galleries/gallery-4/12.webp'
import galleryCardThumb5 from '@/assets/images/galleries/gallery-5/IMG_6224.webp'

const mainGalleryCards = [
  {
    id: 1,
    title: 'Bizony Rzeszów - Kings Kraków (23.03.2024)',
    date: new Date(2024, 2, 24),
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
    date: new Date(2024, 6, 15),
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
    date: new Date(2024, 6, 28),
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
    date: new Date(2024, 7, 24),
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
    date: new Date(2024, 8, 1),
    time: '18:00',
    thumb: galleryCardThumb5,
    author: 'Krzysztof',
    slug: 'dzien-osiedla-milocin-31-08-2024',
    component: () => import('@/components/galleries/GalleryEl5.vue'),
    link: { name: 'gallerySingle', params: { slug: 'dzien-osiedla-milocin-31-08-2024' } },
  },
]

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}.${month}.${year}` // Format: DD.MM.RRRR
}

export const sortedGalleryCards = mainGalleryCards
  .sort((a, b) => {
    return b.date - a.date
  })
  .map((card) => ({
    ...card,
    formattedDate: formatDate(card.date), // Dodaj sformatowaną datę do każdego obiektu
  }))

export default sortedGalleryCards
