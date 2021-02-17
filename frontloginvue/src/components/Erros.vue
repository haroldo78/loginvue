<template>
  <div class="alert alert-danger">{{ msg }}
       <a to="/close" class="nav-link" @click.prevent="CloseMsg">&times;</a>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["msg"],
  methods:{
   ...mapActions(["close"]),
    CloseMsg() {
      this.close();
    }
  }
};
</script>

<style scoped>

.alert {
  border-radius: 0px;
}
.alert-danger {
  background: red;
  color: #fff;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  margin-top: 4px;
}
a.nav-link {
    margin-top: -8px;
    margin-right: -15px;
    float: right;
}
</style>