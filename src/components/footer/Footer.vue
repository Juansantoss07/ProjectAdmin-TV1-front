<script>
export default {
  name: "Footer",

  methods: {
    openmodal1() {
      var modal1 = document.getElementById("modal1");

      modal1.style.display = "flex";
    },

    closemodal() {
      modal1.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display = "none";
    },

    openmodal2() {
      var modal2 = document.getElementById("modal2");

      modal2.style.display = "flex";
    },

    openmodal3() {
      var modal3 = document.getElementById("modal3");

      modal3.style.display = "flex";
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
        <h2>Regulamento da Gamificação</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odit
          voluptatibus, ad laboriosam earum temporibus veritatis dicta esse
          quasi hic, natus qui, pariatur ea. Possimus labore magni sunt eveniet
          ut.
        </p>
      </div>
    </div>
  </div>

  <div class="modal-box" id="modal2">
    <div class="modal1">
      <div class="btn-close">
        <h2 v-on:click="closemodal()"><i class="bi bi-x-square-fill"></i></h2>
      </div>
      <div class="text">
        <h2>Politica de Privacidade</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odit
          voluptatibus, ad laboriosam earum temporibus veritatis dicta esse
          quasi hic, natus qui, pariatur ea. Possimus labore magni sunt eveniet
          ut.
        </p>
      </div>
    </div>
  </div>

  <div class="modal-box" id="modal3">
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

  <footer>
    <div class="container-footer">
      <p v-on:click="openmodal1()">Regulamento de Gamificação</p>
      <p v-on:click="openmodal2()">Politica de Privacidade</p>
      <p v-on:click="openmodal3()">Termos de uso</p>
    </div>
  </footer>
</template>

<style lang="scss" src="./footer.scss" scoped/>