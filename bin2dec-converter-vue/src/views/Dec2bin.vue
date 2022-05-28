<template>
    <div class="dec2bin">
        <h1>Decimal to Binary Converter</h1>
        <p>
            Please enter a decimal number. Example: 14 => 1110
        </p>
        <form>
            <span v-if="showMessage" id="message">{{ message }}</span>
            <label for="decimal">Decimal: </label>
            <input type="number" id="decimal" v-model="decimal" />
            <button id="convert" type="button" @click="convert">Convert</button>
            <span v-if="showResult" id="result">{{ result }}</span>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Dec2bin',
        data() {
            return {
                showMessage: false,
                showResult: false,
                message: '',
                decimal: 0,
                result: 0,
            };
        },
        methods: {
            convert() {
                this.clear();
                if (this.decimal === '') {
                    this.message = 'Input empty';
                    this.showMessage = true;
                    return;
                }
                if (
                    this.decimal < 0 ||
                    this.decimal.includes('.') ||
                    this.decimal.includes('e') ||
                    this.decimal.includes('E')
                ) {
                    this.message = 'Invalid decimal';
                    this.showMessage = true;
                    return;
                }
                const binary = parseInt(this.decimal).toString(2);
                this.result = `Decimal: ${this.decimal} | Binary: ${binary}`;
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
    .dec2bin {
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
