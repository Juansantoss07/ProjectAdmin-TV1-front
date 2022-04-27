<script>
export default {
  name: "BoxRegister",

  methods: {
    openmodal1() {
      var modal1 = document.getElementById("modal1");

      modal1.style.display = "flex";
    },

    closemodal() {
      var modal1 = document.getElementById("modal1");

      modal1.style.display = "none";
    },
  },
};
</script>

<template>
  <div class="modal-box" id="modal1">
    <div class="modal1">
      <div class="btn-close">
        <h2 v-on:click="closemodal()"><i class="bi bi-x-square-fill"></i></h2>
      </div>
      <div class="text">
        <h2>Termos de Uso</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odit
          voluptatibus, ad laboriosam earum temporibus veritatis dicta esse
          quasi hic, natus qui, pariatur ea. Possimus labore magni sunt eveniet
          ut.
        </p>
      </div>
    </div>
  </div>
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
          <span v-on:click="openmodal1()">Ler termos</span>
        </div>
        <div class="btns-register">
          <button class="btn-register">Avançar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" src="./boxregister.scss" scoped/>