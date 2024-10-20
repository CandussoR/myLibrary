import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ebooks/:key/:value',
      name: 'ebooks',
      component: () => import('../views/EbooksView.vue'),
    },
    {
      path: '/authors',
      name: 'authors',
      component: () => import('../views/AuthorsView.vue')
    },
    {
      path: '/readingLists/:guid',
      name: 'readingLists',
      component: () => import('../views/ReadingListView.vue')
    },
    {
      path: '/ebooks/new',
      name: 'newEbook',
      component: () => import('../views/AddBookView.vue')
    },
    {
      path: '/addingList',
      name: 'addingList',
      component: () => import('../views/AddingListView.vue')
    }
  ]
})

export default router
