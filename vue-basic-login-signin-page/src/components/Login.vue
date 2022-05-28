<template>
  <div>
    <nav class="nav">
      <a class="logo" href="/login">
        <h1 class="logo_text">ロゴサイト</h1>
      </a>
      <div class="navbar">
        <a
          href="#"
          class="link"
          :class="{ active: login }"
          @click="toLoginPage()"
          >Login</a
        >
        <a
          href="#"
          class="link"
          :class="{ active: !login }"
          @click="toSignInPage()"
          >Sign In</a
        >
      </div>
    </nav>
    <div class="login">
      <form v-if="login" class="form">
        <fieldset class="fieldset">
          <legend></legend>
          <label for="input-name">Username</label>
          <input id="input-name" type="text" />
        </fieldset>
        <fieldset class="fieldset">
          <legend></legend>
          <label for="input-password">Password</label>
          <input id="input-password" type="text" />
        </fieldset>
        <fieldset class="fieldset">
          <legend></legend>
          <a href="#">Forgot Password?</a>
        </fieldset>
        <fieldset class="fieldset" @click="toSignInPage()">
          <legend></legend>
          <a href="#">New Here? Sign in!</a>
        </fieldset>
        <fieldset class="fieldset">
          <legend></legend>
          <Button buttonValue="Login" />
        </fieldset>
      </form>
      <form v-else class="form">
        <fieldset class="fieldset">
          <legend></legend>
          <label for="input-username">Username</label>
          <input id="input-username" type="text" />
        </fieldset>
        <fieldset class="fieldset">
          <legend></legend>
          <label for="input-email">Email</label>
          <input id="input-email" type="email" />
        </fieldset>
        <fieldset class="fieldset">
          <legend></legend>
          <label for="input-password">Password</label>
          <input id="input-password" type="password" />
        </fieldset>
        <fieldset class="fieldset">
          <legend></legend>
          <label for="input-confirm">Confirm Password</label>
          <input id="input-confirm" type="confirm-password" />
        </fieldset>
        <fieldset class="fieldset-checkbox">
          <legend></legend>
          <input id="checkbox" type="checkbox" checked />
          <label class="label-checkbox" for="checkbox"
            >Do you want to receive our emails?</label
          >
        </fieldset>
        <fieldset class="fieldset" @click="toLoginPage()">
          <legend></legend>
          <a href="#">Already have an account? Log in!</a>
        </fieldset>
        <fieldset class="fieldset">
          <legend></legend>
          <Button buttonValue="Create Account" />
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Button from "./partials/Button.vue";

export default {
    name: "Login",
    components: {
        Button,
    },
    data() {
        return {
            login: true,
        };
    },
    methods: {
        toSignInPage() {
            this.login = false;
        },
        toLoginPage() {
            this.login = true;
        },
    },
};
</script>

<style scoped>
.nav {
  margin-top: 4rem;
}
.logo {
  text-decoration: none;
}
.logo_text {
  font-weight: bold;
  color: #42b983;
  font-size: 3rem;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
  margin-top: 1rem;
}
.link {
  font-size: 3rem;
  border: 2px solid black;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  color: black;
}
.login {
  width: 50%;
  margin: 0 auto;
  border: 2px solid black;
  padding: 1rem;
}
.fieldset {
  border: none;
  padding: 1rem;
}
.fieldset label {
  display: block;
  font-size: 2rem;
  text-transform: uppercase;
}
.fieldset input {
  width: 80%;
  font-size: 2rem;
}
.fieldset a {
  font-size: 1.25rem;
}
.fieldset-checkbox {
  border: none;
  font-size: 1.25rem;
}
.fieldset-checkbox input {
  margin-right: 5px;
}
.active {
  color: #42b983;
}
</style>
