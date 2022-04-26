
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
</style>