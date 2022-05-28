<template>
    <div class="bin2dec">
        <h1>Binary to Decimal Converter</h1>
        <p>
            Please enter a binary number Example: 1110 => 14
        </p>
        <form>
            <span v-if="showMessage" id="message">{{ message }}</span>
            <label for="binary">Binary: </label>
            <input type="number" id="binary" v-model="binary" />
            <button id="convert" type="button" @click="convert">Convert</button>
            <span v-if="showResult" id="result">{{ result }}</span>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Bin2dec',
        data() {
            return {
                showMessage: false,
                showResult: false,
                message: '',
                binary: 0,
                result: 0,
            };
        },
        methods: {
            convert() {
                this.clear();
                if (this.binary === '') {
                    this.message = 'Input empty';
                    this.showMessage = true;
                    return;
                }
                this.binary.split('').map((digit) => {
                    if (digit !== '0' && digit !== '1') {
                        this.message = 'Invalid binary';
                        this.showMessage = true;
                        return;
                    }
                });
                const decimal = parseInt(this.binary, 2);
                this.result = `Binary: ${this.binary} | Decimal: ${decimal}`;
                this.showResult = true;
            },
            clear() {
                (this.showMessage = false),
                    (this.showResult = false),
                    (this.message = ''),
                    (this.result = 0);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .bin2dec {
        padding: 10px;
        margin: 0 auto;
        margin-top: 100px;
        max-width: 700px;
        text-align: center;
        & h1 {
            font-size: 30px;
            margin-bottom: 20px;
        }
        & p {
            font-size: 16px;
            margin-bottom: 16px;
        }
        & form {
            margin-bottom: 16px;
            & input {
                font-size: 18px;
                width: 100px;
            }
            & button {
                display: block;
                cursor: pointer;
                border: none;
                outline: none;
                font-size: 18px;
                width: 150px;
                padding: 16px;
                margin: 16px auto;
                color: #fff;
                background-color: rgb(161, 0, 0);
                transition: 0.5s background linear;
                &:hover {
                    background-color: rgb(230, 0, 0);
                }
            }
        }
    }
    #message,
    #result {
        display: block;
        padding: 16px;
        font-size: 18px;
        color: darkgreen;
    }
    #message {
        color: rgb(161, 0, 0);
    }
</style>
