<script>
export default {
  name: "MenuMobile",

  methods: {
    openMenuMobile() {
      var menuList = document.getElementById("menuList");

      menuList.style.display = "flex";
    },

    closeMenuMobile() {
      menuList.style.display = "none";
    },
  },
};
</script>

<template>
  <header>
    <div v-on:click="openMenuMobile()" class="btn-mobile">
      <i class="bi bi-list-nested"></i>
    </div>
    <div class="logo">
      <img src="/images/logo_transparent_1.png" alt="" />
    </div>
    <nav>
      <ul id="menuList">
        <i v-on:click="closeMenuMobile()" class="bi bi-x-lg" id="closemenu"></i>
        <div class="item">
          <router-link to="/home">
            <li>
              <i class="bi bi-house"></i>
              <span>Home</span>
            </li>
          </router-link>
        </div>

        <div class="item">
          <router-link to="/live">
            <li>
              <i class="bi bi-broadcast"></i>
              <span>Live</span>
            </li>
          </router-link>
        </div>
        <div class="item">
          <router-link to="/">
            <li>
              <i class="bi bi-box-arrow-left"></i>
              <span>Logout</span>
            </li>
          </router-link>
        </div>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" src="./menuMobile.scss" scoped/>