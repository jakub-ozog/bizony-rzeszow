import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PlayersView from '../views/PlayersView.vue'
import StatisticsView from '@/views/StatisticsView.vue'
import BlogView from '@/views/BlogView.vue'
import GalleryView from '@/views/GalleryView.vue'
import PostSingle from '@/components/PostSingle.vue'

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
      path: '/statystyki',
      name: 'statystyki',
      component: StatisticsView,
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: GalleryView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/post/:slug',
      component: PostSingle,
    },
  ],
})

export default router
