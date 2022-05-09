<script>
import NavbarAdmin from "../components/navbarAdmin/NavbarAdmin.vue";
export default {
  name: "HomeAdmin",

  components: {
    NavbarAdmin,
  },
};
</script>

<template>
  <div class="content-home">
    <NavbarAdmin />
    <div class="container">
      <div class="container-cards">
        <div class="card">
          <p>Número de usuários cadastrados</p>
          <p>22</p>
        </div>
        <div class="card">
          <p>Likes no vídeo</p>
          <p>3</p>
        </div>
        <div class="card">
          <p>Comentários enviados</p>
          <p>2</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.content-home

  width: 100%
  display: flex
  padding: 1rem
  padding-left: 0

  .container
    width: 100%
    display: flex
    flex-direction: column
    padding-left: 6.5rem

    .container-cards
      width: 100%,
      display: flex,
      align-items: center,
      justify-content: space-around,

      .card
        border-radius: 0px,
        padding: 1rem,
        background-color: #e0e0e0,
        display: flex,
        align-items: center,
        flex-direction: column,

      p
        margin: .5rem 0
</style>