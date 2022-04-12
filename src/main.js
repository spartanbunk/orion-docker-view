import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import BaseLayout from './components/base/BaseLayout.vue'
import EmployeesPage from './pages/EmployeesPage.vue'
import SideBar from './components/sidebar/SideBar.vue'




const app = createApp(App)
  
  .use(router)
  //.use(store);

  app.component('employees-page', EmployeesPage);

  app.component('base-layout', BaseLayout);
  app.component('sidebar-layout', SideBar);
  
router.isReady().then(() => {
  app.mount('#app');
});