<script>
import Navbar from "../components/navbar/Navbar.vue";
import LiveIframe from "../components/liveIframe/LiveIframe.vue";
import Footer from "../components/footer/Footer.vue";
import MenuMobile from "../components/menuMobile/MenuMobile.vue";

export default {
  name: "Live",

  components: {
    Navbar,
    LiveIframe,
    Footer,
    MenuMobile,
  },
};
</script>

<template>
  <div class="body-live">
    <div class="content-live">
      <Navbar />

      <div class="container">
        <MenuMobile />
        <LiveIframe />
        <Footer />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body-live {
  width: 100%;
  height: 100%;
}

.content-live {
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