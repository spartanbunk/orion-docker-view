<template>

    <div class="employees">
    <span>This is the nested Component EmployeesPage.Vue in BaseLayout.vue as "employees-page". This is an example of a remote data source.</span>
            
            <ul class="employee-list">
                <li v-for="employee in employees" :key="employee.nid[0].value">
                    <!-- <router-link :to="{ name: 'Employee Details', params:{ nid: employee.nid[0].value}}">{{employee.title[0].value}}</router-link> -->
                    <p>{{employee.title[0].value}}</p>
                </li>
            </ul>
    </div>  
    
</template>

<script>


export default {
    name:'EmployeesPage',
    data() {
        return {
            employees: [],
        };
    },
    mounted(){
        fetch('http://34.67.17.206/employees/admin-list')
        .then(res => res.json())
        .then(data => this.employees = data )
    },
    components: {
    
    
    }
}
</script>

<style>
.employees{
    margin:10px;
    padding: 10px;
    background-color: burlywood;
}
.employee-list.li{
    text-decoration: none;
}

</style>
