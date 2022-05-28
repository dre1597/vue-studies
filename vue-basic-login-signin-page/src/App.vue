<template>
  <div id="app">
    <div>
      <Login />
    </div>
  </div>
</template>

<script>

import Login from './components/Login'
export default {
    name: "App",
    components: {
        Login,
    }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #bbb;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
