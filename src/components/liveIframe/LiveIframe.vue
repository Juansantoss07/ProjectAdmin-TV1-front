<script>
export default {
  name: "LiveIframe",
};
</script>

<template>
  <div class="conteiner-live">
    <iframe
      src="https://www.youtube.com/embed/vJz8QzO1VzQ?autoplay=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <div class="box-comentary">
    <div class="btns-icons">
      <i class="bi bi-hand-thumbs-up"></i>
      <i class="bi bi-hand-thumbs-down"></i>
    </div>
    <form action="">
      <input type="text" placeholder="Mande seu comentário..." />
      <input type="submit" value="Enviar" />
    </form>
  </div>
</template>

<style lang="scss" src="./liveiframe.scss" scoped/>