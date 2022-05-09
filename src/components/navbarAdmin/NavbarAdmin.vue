<script>
import axios from "axios";

export default {
  name: "NavbarAdmin",

  created() {
    this.loadNotifications();
  },

  computed: {
    notifications() {
      return this.notifications;
    },
  },

  data() {
    return {
      notifications: [],
    };
  },

  methods: {
    loadNotifications() {
      axios.get("/notifications").then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

<template>
  <header>
    <div class="box-header">
      <div class="logo">
        <img src="/images/logo_transparent_1.png" alt="" />
      </div>

      <nav>
        <ul>
          <div class="item">
            <router-link to="/dashboard">
              <li>
                <i class="bi bi-speedometer"></i>
              </li>
            </router-link>

            <div class="sub-menu">Dashboard</div>
          </div>

          <div class="item">
            <li>
              <i class="bi bi-bell-fill"></i>
            </li>

            <div id="submenu-not" class="sub-menu">
              <h2>Notificações</h2>
              <div class="box-not">
                <p v-for="notification in notifications" :key="notification">
                  {{ notification }}
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <router-link to="/">
              <li>
                <i class="bi bi-box-arrow-left"></i>
              </li>
            </router-link>
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
          <div class="sub-menu">Olá, {{ user }}!</div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" src="./navbaradmin.scss" scoped/>