<template>
    <div id="app">
        <div id="nav">
            <router-link class="link" to="/">dec2bin</router-link> |
            <router-link class="link" to="/bin2dec">bin2dec</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: #42b983;
        height: 100vh;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #fff;
            }
        }
    }
</style>
