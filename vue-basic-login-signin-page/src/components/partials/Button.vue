<template>
  <button class="btn">{{ buttonValue }}</button>
</template>

<script>
export default {
  props: {
    buttonValue: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.btn {
  display: block;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin: 0 auto;
  background: #42b983;
  color: white;
  width: 250px;
  border: none;
  cursor: pointer;
}
</style>
