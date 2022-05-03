<script>
import Cookie from "js-cookie";

export default {
  name: "BoxLogin",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  /*created() {
    Cookie.remove("_myapp_token");
  },*/

  methods: {
    submit() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      fetch(`http://127.0.0.1:8000/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Acess: "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((res) => {
          Cookie.set("_myapp_token", res.access_token);
        });
    },

    if(_myapp_token) {
      next("/home");
    },
  },
};
</script>

<template>
  <div class="box-login">
    <h3>Seu primeiro passo antes de se reiventar</h3>
    <span>
      Aqui começa o futuro. Insira seu e-mail e senha abaixo para fazer login e
      iniciar sua jornada conosco.
    </span>
    <form @submit.stop.prevent="submit">
      <input
        v-model="email"
        type="email"
        name=""
        id=""
        placeholder="E-mail comercial"
      />
      <input
        v-model="password"
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
        <input type="submit" class="btn-login" value="ENTRAR" />

        <router-link to="/register"
          ><button class="btn-register">Registrar-se</button></router-link
        >
      </div>
    </form>
  </div>
</template>

<style lang="scss" src="./boxlogin.scss" scoped/>