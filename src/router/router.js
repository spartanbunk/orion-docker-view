import { createRouter, createWebHistory } from 'vue-router'
import EmployeesPage from '../pages/EmployeesPage.vue'
//import EmployeesPage from '../pages/EmployeesDetailsPage.vue'
//import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    redirect: '/employees'
    // name: 'HelloWorld',
    // component: HelloWorld
    // redirect: '/employees'
  },
  {
    path: '/employees',
    name: 'EmployeesPage',
    component: EmployeesPage //loads everytime
  },
  {
    path: '/employees/:nid',
    name: 'EmployeeDetailsPage',
    component: () => import('../pages/EmployeeDetailsPage.vue'), //loads when called
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
