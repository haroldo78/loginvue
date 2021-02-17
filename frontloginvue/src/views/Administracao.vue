<template>
    <div class="administracao">
        <Navbar/>
        <Administracao/>
      
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Administracao from "@/components/Administracao.vue";
export default {
    name: "administracao",
    components:{
        Navbar,
        Administracao
       
    }
}
</script>