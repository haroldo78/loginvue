<template>
    <div class="checagem">
        <Navbar/>
        <Checagem/>
      
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Checagem from "@/components/Checagem.vue";
export default {
    name: "checagem",
    components:{
        Navbar,
        Checagem
       
    }
}
</script>