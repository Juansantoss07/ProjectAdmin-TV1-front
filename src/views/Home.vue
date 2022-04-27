<script>
import Navbar from "../components/navbar/Navbar.vue";
import ContentHome from "../components/contentHome/ContentHome.vue";
import BoxLiveNow from "../components/boxLiveNow/BoxLiveNow.vue";
import DescEvent from "../components/descEvent/DescEvent.vue";
import Footer from "../components/footer/Footer.vue";
import MenuMobile from "../components/menuMobile/MenuMobile.vue";

export default {
  name: "HomeView",

  components: {
    Navbar,
    ContentHome,
    BoxLiveNow,
    DescEvent,
    Footer,
    MenuMobile,
  },
};
</script>

<template>
  <div class="content-home">
    <Navbar />
    <div class="container">
      <MenuMobile />
      <ContentHome />
      <BoxLiveNow />
      <DescEvent />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-home {
  width: 100%;
  display: flex;
  padding: 1rem;
  padding-left: 0;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 6.5rem;
  }
}

@media (max-width: 787px) {
  .container {
    padding-left: 1rem !important;
    padding-top: 75px !important;
  }
}
</style>