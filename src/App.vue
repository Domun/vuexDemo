<template>
  <div id="app">
    <!-- <One v-bind:products="products"></One>
    <Two v-bind:products="products"></Two> -->
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
