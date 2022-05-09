<template>
  <div class="box-login">
    <h3>Seu primeiro passo antes de se reiventar</h3>
    <span>
      Aqui começa o futuro. Insira seu e-mail e senha abaixo para fazer login e
      iniciar sua jornada conosco.
    </span>
    <form>
      <input v-model="email" type="email" placeholder="E-mail comercial" />
      <input
        v-model="password"
        type="password"
        placeholder="Senha"
        autocomplete="on"
      />
      <div class="checkbox">
        <div class="input-check">
          <input type="checkbox" name="" id="" />
          <p>Continuar conectado</p>
        </div>
        <router-link to="/recoverpassword"
          ><a href="#">Esqueci minha senha</a></router-link
        >
      </div>
      <div class="btns-login">
        <input
          type="submit"
          @click.prevent="submit"
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

<script lang="ts">
export default {
  name: "BoxLogin",

  data() {
    return {
      email: "",
      password: "",
      post: "",
    };
  },
  methods: {
    submit() {
      var data = { email: this.email, password: this.password };
      console.log(data);

      this.$http
        .post("login", data)
        .then((response) => {
          console.log(response);
        })

        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" src="./boxlogin.scss" scoped/>