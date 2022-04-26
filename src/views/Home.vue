<script>
import Navbar from "../components/navbar/Navbar.vue";
import ContentHome from "../components/contentHome/ContentHome.vue";
import BoxLiveNow from "../components/boxLiveNow/BoxLiveNow.vue";

export default {
  name: "HomeView",

  components: {
    Navbar,
    ContentHome,
    BoxLiveNow,
  },
};
</script>

<template>
  <div class="content-home">
    <Navbar />
    <div class="container">
      <ContentHome />
      <BoxLiveNow />
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
</style>