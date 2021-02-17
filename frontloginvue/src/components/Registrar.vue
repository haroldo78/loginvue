<template>
  <div class="sign-up">
    <div class="row">
      <div class="card mx-auto">
        <h1 class="text-center mb-3">
          <i class="fas fa-user-plus"></i> Cadastro
        </h1>
        <div class="card-body">
          <form @submit.prevent="registerUser">
            <div class="form-group">
              <label for="name">*Nome</label>
              <input
                id="name"
                type="text"
                placeholder="Digite o nome"
                name="name"
                v-model="name"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label for="email">*Email</label>
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
              <label for="password">*Senha</label>
              <input
                type="password"
                class="form-control"
                placeholder="Criar a senha"
                name="password"
                id="password"
                v-model="password"
              >
            </div>
            <div class="form-group">
              <label for="confirm_password">*Confirme a Senha</label>
              <input
                type="password"
                class="form-control"
                placeholder="Confirme a Senha"
                name="confirm_password"
                id="confirm_password"
                v-model="confirm_password"
              >
            </div>
            <button class="btn danger btn-block">Registrar</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p class="lead mt-4">Tem uma conta?
              <router-link to="/" class="card-link"> login.</router-link>
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
      name: "",
      email: "",
      password: "",
      confirm_password: ""
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
         name: this.name,
         email: this.email,
        password: this.password,
        confirm_password: this.confirm_password
      };
      this.register(user).then(res => {
        if (res.data.success) {
          this.$router.push("/");
        }
      });
    }
  }
};
</script>

<style scoped>
.sign-up {
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

button.btn {
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