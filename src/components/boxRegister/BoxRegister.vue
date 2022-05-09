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
      <form>
        <div class="input">
          <label for="">Nome completo</label>
          <input type="text" placeholder="Seu nome" required />
        </div>
        <div class="input">
          <label for="">E-mail</label>
          <input type="email" placeholder="nome@mail.com" required />
        </div>
        <div class="input">
          <label for="">Senha</label>
          <input
            type="password"
            placeholder="* * * *"
            autocomplete="on"
            required
          />
        </div>
        <div class="input">
          <input type="file" />
        </div>
        <div class="check">
          <div class="input-check">
            <input type="checkbox" />
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

<script lang="ts">
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

<style lang="scss" src="./boxregister.scss" scoped/>