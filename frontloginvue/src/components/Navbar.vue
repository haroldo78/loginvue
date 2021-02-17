<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/dashboard">Dashboard</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/dashboard" class="nav-link">
            Home
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/historico" class="nav-link">Histórico de Coversa</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/checagem" class="nav-link">Checagem de eficácia</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/curadoria" class="nav-link">Curadoria automatizada</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/administracao" class="nav-link">Administração</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <a to="/logout" class="nav-link" @click.prevent="logoutUser">Sair</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    }
  }
};
</script>

<style>
  a.nav-link {
      cursor: pointer;
  }
</style>