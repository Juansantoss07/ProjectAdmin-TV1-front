<script>
export default {
  name: "BoxRegister",
};
</script>

<template>
  <div class="container">
    <div class="back">
      <router-link to="/"> <p>Voltar para o login</p></router-link>
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
      </form>
    </div>
  </div>
</template>

<style lang="scss" src="./boxregister.scss" scoped/>