import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue';
import AddOrder from '@/views/AddOrder.vue';

const routes = [
   {path: '/', name: 'Home', component: Home},
   {path: '/add-order', name: 'Add Order', component: AddOrder}
];
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router