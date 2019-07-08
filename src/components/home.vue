<template>
  <div class="home">
    <header class="hd">
      this is a VuxDemo, used VueX
    </header>
    <div class="linkblock">
      <ul class="link-items">
        <li class="link-item" ref="list" :style="{background: color}" v-bind:class="{blue: isclass}" >
          <router-link to="/easy">简单的vuex</router-link>
        </li>
        <li class="link-item" :style="{background: color}">
          <router-link to="/products">购物车demo</router-link>
        </li>
        <li class="link-item" :style="{background: color}">
          <router-link to="/color">更换主题颜色demo</router-link>
        </li>
        <li class="link-item" :style="{background: color}">
          <router-link to="/chooseCity">城市选择 demo (store封装)</router-link>
          <span class="city">
            {{this.city}}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import {mapState} from 'Vuex'
export default {
  name: 'home',
  data () {
    return {
      color: this.$store.state.themeColor.truecolor,
      city: this.$store.state.chooseCity.city,
      isclass: true
    }
  },
  mounted () {
    // this.getCity()
  },
  computed: {
    // ...mapState(['city'])
  },
  methods: {
    getCity () {
      console.log(this.city)
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
.city{
  float: right;
  color: #ffffff;
  margin-right: 20px;
}
</style>
