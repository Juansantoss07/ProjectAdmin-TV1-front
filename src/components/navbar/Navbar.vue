<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <header>
    <div class="box-header">
      <div class="logo">
        <img
          src="https://logo-suggestion.renderforest.com/suggestions-images/8804/251c/8804251c3e4e6292d1f1da6bb2236553.png"
          width="70px"
          alt=""
        />
      </div>

      <nav>
        <ul>
          <div class="item">
            <li>
              <i class="bi bi-house"></i>
            </li>
            <div class="sub-menu">Home</div>
          </div>
          <div class="item">
            <li>
              <i class="bi bi-broadcast"></i>
            </li>
            <div class="sub-menu">Live</div>
          </div>
          <div class="item">
            <li>
              <i class="bi bi-box-arrow-left"></i>
            </li>
            <div class="sub-menu">Logout</div>
          </div>
        </ul>
      </nav>

      <div class="profile">
        <div class="item">
          <img
            src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
          <div class="sub-menu">Olá, Usuário!</div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" src="./navbar.scss" scoped/>