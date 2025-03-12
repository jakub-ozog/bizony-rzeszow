export const blogPosts = [
  {
    id: 1,
    title: 'Pierwszy post',
    excerpt:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum.".... ',
    date: '2025-03-11',
    slug: 'pierwszy-post',
    component: () => import('@/components/posts/PostMain.vue'),
  },
  {
    id: 2,
    title: 'Drugi post',
    excerpt:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequunt  mollit anim id est laborum.".... .',
    date: '2025-03-10',
    slug: 'drugi-post',
    component: () => import('@/components/posts/PostSub.vue'),
  },
  {
    id: 3,
    title: 'Trzeci post',
    excerpt:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation',
    date: '2025-03-10',
    slug: 'trzeci-post',
    component: () => import('@/components/posts/PostSub2.vue'),
  },
]
