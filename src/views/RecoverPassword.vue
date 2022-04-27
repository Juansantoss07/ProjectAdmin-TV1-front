<script>
import Banner from "../components/banner/Banner.vue";
import BoxTerms from "../components/boxTerms/BoxTerms.vue";
import BoxRecoverPassword from "../components/boxRecoverpassword/BoxRecoverPassword.vue";

export default {
  name: "RecoverPassword",

  components: {
    Banner,
    BoxTerms,
    BoxRecoverPassword,
  },
};
</script>

<template>
  <div class="content-login">
    <div class="box-left">
      <Banner />
      <BoxTerms />
    </div>

    <div class="box-right">
      <BoxRecoverPassword />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-login {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .box-left {
    width: 40%;
    height: 95vh;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    justify-content: space-between;
  }

  .box-right {
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 812px) {
  .content-login {
    flex-direction: column-reverse;

    .box-right {
      height: auto;
      margin: 4rem 0;
    }

    .box-left {
      margin: 0;
    }

    .box-left,
    .box-right {
      width: 100%;
    }
  }
}
</style>