import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '@/pages/ProductList.vue';
import ProductDetails from '@/components/products/ProductDetails.vue';

const routes = [
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/products',
    component: ProductList,
  },
  {
    path: '/products/:id',
    component: ProductDetails,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
