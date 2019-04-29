<template>
  <div id="easy">
    <header>
      <router-link to="/"><b class="goback">&lt;</b></router-link>
      <p class="title">简单的vuex页面</p>
    </header>
    <One></One>
    <Two></Two>
  </div>
</template>

<script>
import One from './one.vue'
import Two from './two.vue'
export default {
  name: 'easy',
  components: {
    One: One,
    Two: Two
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.goback{
  float: left;
}
.title{
  text-align: center;
}
</style>
