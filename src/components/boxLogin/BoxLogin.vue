<script>
export default {
  name: "BoxLogin",
};
</script>

<template>
  <div class="box-login">
    <h3>Seu primeiro passo antes de se reiventar</h3>
    <span>
      Aqui começa o futuro. Insira seu e-mail e senha abaixo para fazer login e
      iniciar sua jornada conosco.
    </span>
    <form action="">
      <input type="email" name="" id="" placeholder="E-mail comercial" />
      <input type="password" name="" id="" placeholder="Senha" />
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
        <router-link to="/home">
          <button class="btn-login">Entrar</button>
        </router-link>

        <router-link to="/register"
          ><button class="btn-register">Registrar-se</button></router-link
        >
      </div>
    </form>
  </div>
</template>

<style lang="scss" src="./boxlogin.scss" scoped/>