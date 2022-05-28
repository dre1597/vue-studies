<template>
    <div id="app">
        <h1 class="title">{{ title }}</h1>
        <form action=""></form>
        <form action="">
            <fieldset :key="info" v-for="info in fieldsInfos">
                <label :for="info.name">{{ info.label }}</label>
                <input type="text" :id="info.name" />
                <select name="units" id="units">
                    <option
                        :key="option"
                        v-for="option in options"
                        :value="option.value"
                        >{{ option.label }}</option
                    >
                </select>
            </fieldset>
            <button type="button">Generate</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                title: 'Border previewer',
                fieldsInfos: [
                    {
                        label: 'Top Left',
                        name: 'top-left',
                    },
                    {
                        label: 'Top Right',
                        name: 'top-right',
                    },
                    {
                        label: 'Bottom Left',
                        name: 'bottom-left',
                    },
                    {
                        label: 'Bottom Right',
                        name: 'bottom-right',
                    },
                ],
                options: [
                    {
                        label: 'px',
                        value: 'pixel',
                    },
                    {
                        label: '%',
                        value: 'percent',
                    },
                ],
            };
        },
    };
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    #app {
        text-align: center;
        color: #42b883;
        background-color: #2c3e50;
        height: 100vh;
    }
    .title {
        padding-top: 60px;
    }
    fieldset {
        border: none;
        padding: 16px;
    }
    fieldset label {
        padding: 16px;
    }
    fieldset input {
        padding: 5px;
        margin-right: 5px;
        width: 100px;
    }
    button {
        margin-top: 20px;
        padding: 16px;
        font-size: 20px;
        width: 200px;
        border: none;
        outline: none;
        background-color: #42b883;
        color: #fff;
        cursor: pointer;
    }
    select {
        padding: 5px;
        background-color: transparent;
        color: #fff;
        border: none;
        outline: none;
    }
    option {
        background-color: #2c3e50;
        color: #fff;
    }
</style>
