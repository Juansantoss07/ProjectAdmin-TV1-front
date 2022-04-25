<script>
export default {
  name: "BoxRegister",
};
</script>

<template>
  <div class="container">
    <div class="back">
      <router-link to="/">
        <p><i class="bi bi-backspace"></i> Voltar para o login</p></router-link
      >
    </div>

    <div class="box-register">
      <h3>Dados pessoais</h3>
      <form action="">
        <div class="input">
          <label for="">Nome completo</label>
          <input type="text" name="" id="" placeholder="Seu nome" />
        </div>
        <div class="input">
          <label for="">E-mail</label>
          <input type="email" name="" id="" placeholder="nome@mail.com" />
        </div>
        <div class="input">
          <label for="">Senha</label>
          <input type="password" name="" id="" placeholder="* * * *" />
        </div>
        <div class="input">
          <input type="file" name="" id="" />
        </div>
        <div class="check">
          <div class="input-check">
            <input type="checkbox" name="" id="" />
            <p>Concordo com o termos de uso</p>
          </div>
          <span>Ler termos</span>
        </div>
        <div class="btns-register">
          <button class="btn-register">Avançar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" src="./boxregister.scss" scoped/>