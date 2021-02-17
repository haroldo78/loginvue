<template>
  <div class="login">
    <div class="row">
      <div class="card mx-auto">
         <h1 class="text-center"><i class="fas fa-sign-in-alt"></i>Login</h1>
         
        <div class="card-body">
          <form @submit.prevent="loginUser">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Digite o email"
                name="email"
                v-model="email"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label for="password">Senha</label>
              <input
                type="password"
                class="form-control"
                placeholder="Digite a senha"
                name="password"
                id="password"
                v-model="password"
              >
            </div>
            <input type="submit" class="btn danger btn-block" value="Login"/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p class="lead mt-4">
              Não tem conta? 
              <router-link to="/registrar" class="card-link">Registra</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        email: this.email,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/dashboard");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 40px;
}
h1.text-center {
    margin: 10px;
}
label {
    margin: 0;
}
input {
  margin: 10px 0;
  width: 100%;
  padding: 15px;
}

input.btn {
  width: 100%;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background:  #EB6864;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 15px;
  margin: 0 auto;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.btn:hover {
    color: #fff;
    background-color: #e74742;
    border-color: #e53c37;
}
p {
  margin-top: 19px;
  font-size: 16px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
  color: #EB6864;
  background-color: transparent;
}
.card {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}
.row {
    margin-right: 0px;
    margin-left: 0px;
}

</style>