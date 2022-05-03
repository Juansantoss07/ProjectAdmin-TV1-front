<script>
export default {
  name: "LoginAdmin",
};
</script>

<template>
  <div class="conteiner">
    <div class="box-login">
      <h1>Login Dashboard</h1>
      <form action="">
        <input
          type="email"
          name=""
          id=""
          placeholder="Insira seu e-mail de admin"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Insira sua senha de admin"
        />

        <input type="submit" value="Entrar" />
      </form>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.conteiner {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("https://images.pexels.com/photos/196658/pexels-photo-196658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position: center;
  background-size: cover;

  .box-login {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 50%;
    background: #c0c0c0;

    h1 {
      margin: 1rem 0;
    }

    form {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 100%;

      input[type="email"],
      input[type="password"] {
        padding: 1rem;
        outline: none;
        margin: 0.5rem 0;
        border-radius: 0px;
        border: 1px solid #8d8d8d;
        width: 70%;
      }

      input[type="submit"] {
        padding: 1rem 2rem;
        background: #000;
        color: #fff;
        margin: 1rem;
        cursor: pointer;
        border: none;
      }
    }
  }
}
</style>