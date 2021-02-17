<template>
    <div class="dashboard">
        <Navbar/>
        <Dashboard/>
      
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Dashboard from "@/components/Dashboard.vue";
export default {
    name: "dashboard",
    components:{
        Navbar,
        Dashboard
       
    }
}
</script>