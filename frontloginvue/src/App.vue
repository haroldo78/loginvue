<template>
  <div id="app">
    <div class="container">
      <Errors v-if="error" :msg="error"/>
    </div>
    
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Errors from "./components/Erros.vue";
export default {
  components: {
    Errors
  },
  computed: {
    ...mapGetters(["error"])
  }
};
</script>
<style>
.card {
  border-radius: 0px;
}
.btn {
  border-radius: 0px;
}
</style>