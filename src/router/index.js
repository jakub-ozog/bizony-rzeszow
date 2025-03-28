import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PlayersView from '../views/PlayersView.vue'
import BlogView from '@/views/BlogView.vue'
import PostSingle from '@/components/PostSingle.vue'
import GalleryView from '@/views/GalleryView.vue'
import GallerySingle from '@/components/GallerySingle.vue'
import ContactView from '@/views/ContactView.vue'
import GamesView from '@/views/GamesView.vue'
import ResultsView from '@/views/ResultsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/o-nas',
      name: 'o-nas',
      component: AboutView,
    },
    {
      path: '/zawodnicy',
      name: 'zawodnicy',
      component: PlayersView,
    },
    {
      path: '/rozgrywki/tabela-blb',
      name: 'rozgrywki',
      component: GamesView,
    },
    {
      path: '/rozgrywki/wyniki',
      name: 'wyniki',
      component: ResultsView,
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: GalleryView,
    },
    {
      path: '/galeria/:slug',
      name: 'gallerySingle',
      component: GallerySingle, // Komponent wyświetlający szczegóły posta
      props: true,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/:slug',
      name: 'postDetail',
      component: PostSingle, // Komponent wyświetlający szczegóły posta
      props: true,
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: ContactView,
    },
  ],
})

export default router
