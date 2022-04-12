<template>
  <div>

    <span>App Shell</span>

    <div class="app-container">

    <span>App Container</span>

        <base-layout>
        
        </base-layout>

        
    <sidebar-layout></sidebar-layout>
    <div :style="{'margin-left' : sidebarWidth }"></div>
    </div>
    
</div>
</template>

<script>
import BaseLayout from './components/base/BaseLayout.vue'
import SideBar from '@/components/sidebar/SideBar.vue'
import { sidebarWidth } from '@/components/sidebar/state'


export default {
  name: 'App',
  setup(){
        return { sidebarWidth }
    },
  
  components: {
    'sidebar-layout' : SideBar,
    BaseLayout,
    
  }
  
}
//console.log(sidebarWidth);
</script>


<style>
#app{
  padding: 30px;
  background-color: yellow;
  margin:5px;
  padding: 5px;
  position: relative;
}
.app-container{
  background-color: #5e4a2f;
  color:black;
  padding: 5px;
  margin:5px;
  position: relative;
}


</style>

