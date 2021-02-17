<template>
    <div class="curadoria">
        <Navbar/>
        <Curadoria/>
      
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Curadoria from "@/components/Curadoria.vue";
export default {
    name: "curadoria",
    components:{
        Navbar,
        Curadoria
       
    }
}
</script>