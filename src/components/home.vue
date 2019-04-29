<template>
  <div class="home">
    <header class="hd">
      this is a VuxDemo, used VueX
    </header>
    <div class="linkblock">
      <ul class="link-items">
        <li class="link-item" ref="list" :style="{background: color}">
          <router-link to="/easy">简单的vuex</router-link>
        </li>
        <li class="link-item" :style="{background: color}">
          <router-link to="/products">购物车demo</router-link>
        </li>
        <li class="link-item" :style="{background: color}">
          <router-link to="/color">更换主题颜色demo</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      color: this.$store.state.themeColor.truecolor
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  color: #eeeeee;
}
.hd{
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid #eeeeee;
}
.linkblock{
  width: 90%;
  padding: 5%;
}
.link-items{
}
.link-item{
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  margin-top: 20px;
}
.link-item:first-of-type{
  margin-top: 0px;
}
</style>
