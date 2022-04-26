<script>
export default {
  name: "BoxLiveNow",
};
</script>

<template>
  <div class="content">
    <div class="box-livenow">
      <router-link to="/live"
        ><span
          ><i class="bi bi-columns-gap"></i>Acontecendo agora</span
        ></router-link
      >
      <p>Direcionadores estratégicos 2022</p>
      <router-link to="/live"
        ><h5><i class="bi bi-play-fill"></i>Assistir</h5>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" src="./boxlivenow.scss" scoped/>