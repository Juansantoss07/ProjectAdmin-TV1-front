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
        <a href="#">Esqueci minha senha</a>
      </div>
      <div class="btns-login">
        <button class="btn-login">Entrar</button>
        <a href="google.com"
          ><button class="btn-register">Registrar-se</button></a
        >
      </div>
    </form>
  </div>
</template>

<style lang="scss" src="./boxlogin.scss" scoped/>