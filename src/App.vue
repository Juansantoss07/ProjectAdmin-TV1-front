
<template>
  <RouterView />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body::-webkit-scrollbar {
  width: 10px; /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: transparent; /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #111; /* color of the scroll thumb */
}
.modal-box {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.671);
  backdrop-filter: blur(8px);
  display: none;
}

.modal1 {
  width: 60%;
  height: 70%;
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem;
  overflow: auto;

  .btn-close {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: #ff0000;
    margin-bottom: 2rem;

    h2 {
      cursor: pointer;
    }
  }

  .text {
    h2 {
      margin-bottom: 2rem;
    }
  }
}
</style>