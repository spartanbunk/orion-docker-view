<template>
   <div class="sidebar" :style="{ width: sidebarWidth }">
       
       <span 
       class="collapse-icon"
       :class="{ 'rotate-180' : collapsed}"
       @click="toggleSidebar"
       >
       <p>"---toggle icon ----"</p>
       </span>
       

  </div>  
    
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
    name: 'SideBar',
    props: {},
    setup(){
        return { collapsed, toggleSidebar, sidebarWidth }
    }
}
</script>


<style scoped>

.sidebar{
  color:white;
  background-color: black;

  float: left;
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}

.collapse-icon{
    position: absolute;
    bottom: 0;
    padding: 20px;

    color:red;
    transition: 0.2s linear;
}

.rotate-180{
    transform: rotate(180deg);
    transition: 0.2s linear;
}


</style>