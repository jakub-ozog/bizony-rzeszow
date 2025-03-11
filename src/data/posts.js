export const blogPosts = [
  {
    id: 1,
    title: 'Pierwszy post',
    excerpt: 'To jest krótka zapowiedź pierwszego posta.',
    date: '2025-03-11',
    slug: 'pierwszy-post',
    component: () => import('@/components/posts/PostMain.vue'),
  },
  {
    id: 2,
    title: 'Drugi post',
    excerpt: 'To jest krótka zapowiedź drugiego posta.',
    date: '2025-03-10',
    slug: 'drugi-post',
    component: () => import('@/components/posts/PostSub.vue'),
  },
  {
    id: 3,
    title: 'Trzeci post',
    excerpt: 'To jest krótka zapowiedź trzeciego posta.',
    date: '2025-03-10',
    slug: 'trzeci-post',
    component: () => import('@/components/posts/PostSub2.vue'),
  },
]
