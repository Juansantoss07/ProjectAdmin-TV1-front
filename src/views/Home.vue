<script>
import Navbar from "../components/navbar/Navbar.vue";
import ContentHome from "../components/contentHome/ContentHome.vue";

export default {
  name: "HomeView",

  components: {
    Navbar,
    ContentHome,
  },
};
</script>

<template>
  <div class="content-home">
    <Navbar />
    <ContentHome />
  </div>
</template>

<style lang="scss" scoped>
.content-home {
  width: 100%;
  display: flex;
}
</style>