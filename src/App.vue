<template>
  <div id="app">
    <!-- <One v-bind:products="products"></One>
    <Two v-bind:products="products"></Two> -->
    <One></One>
    <Two></Two>
  </div>
</template>

<script>
import One from './components/one.vue'
import Two from './components/two.vue'

export default {
  name: 'app',
  components: {
    One: One,
    Two: Two
  },
  data () {
    return {
    }
  }
}
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
