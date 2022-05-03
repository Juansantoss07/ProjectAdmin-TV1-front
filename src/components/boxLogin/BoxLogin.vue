<template>
  <div class="box-login">
    <h3>Seu primeiro passo antes de se reiventar</h3>
    <span>
      Aqui começa o futuro. Insira seu e-mail e senha abaixo para fazer login e
      iniciar sua jornada conosco.
    </span>
    <form>
      <input
        v-model="form.email"
        type="form.email"
        name=""
        id=""
        placeholder="E-mail comercial"
      />
      <input
        v-model="form.password"
        type="password"
        name=""
        id=""
        placeholder="Senha"
      />
      <div class="checkbox">
        <div class="input-check">
          <input type="checkbox" name="" id="" />
          <p>Continuar conectado</p>
        </div>
        <router-link to="recoverpassword"
          ><a href="#">Esqueci minha senha</a></router-link
        >
      </div>
      <div class="btns-login">
        <input
          @click.prevent="loginUser"
          type="submit"
          class="btn-login"
          value="ENTRAR"
        />

        <router-link to="/register"
          ><button class="btn-register">Registrar-se</button></router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "BoxLogin",

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },

  methods: {
    loginUser() {
      const axios = require("axios").default;
      axios
        .post("http://127.0.0.1:8000/api/login", this.form)
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<style lang="scss" src="./boxlogin.scss" scoped/>