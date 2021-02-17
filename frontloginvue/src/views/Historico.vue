<template>
    <div class="historico">
        <Navbar/>
        <Historico/>
      
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Historico from "@/components/Historico.vue";
export default {
    name: "historico",
    components:{
        Navbar,
        Historico
       
    }
}
</script>