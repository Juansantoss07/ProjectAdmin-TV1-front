<script>
import BoxTerms from "../components/boxTerms/BoxTerms.vue";
import Banner from "../components/banner/Banner.vue";
import BoxRegister from "../components/boxRegister/BoxRegister.vue";

export default {
  name: "Register",

  components: {
    BoxTerms,
    Banner,
    BoxRegister,
  },
};
</script> 

<template>
  <div class="content-register">
    <div class="box-left">
      <BoxRegister />
    </div>
    <div class="box-right">
      <Banner />
      <BoxTerms />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-register {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .box-right {
    width: 40%;
    height: 95vh;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    justify-content: space-between;
  }

  .box-left {
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 812px) {
  .content-register {
    flex-direction: column;

    .box-left,
    .box-right {
      width: 100%;
    }

    .box-right {
      margin: 0 !important;
    }

    .box-left {
      height: 100vh;
    }
  }
}
</style>
