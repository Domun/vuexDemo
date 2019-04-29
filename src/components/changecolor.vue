<template>
  <div id="color">
    <header>
      <router-link to="/"><b class="goback">&lt;</b></router-link>
      <p class="title">主题更换</p>
    </header>
    <main>
        <ul class="color-items">
            <li class="color-item" v-for="(item, i) in colorData" :key='i' @click="gochange(i)">
                <div class="color-choose" :style="{background: item.color}" v-if="item.on">
                    &radic;
                </div>
                <div class="color-choose" :style="{background: item.color}" v-else></div>
                <div class="color-name">
                    <p>{{item.name}}</p>
                </div>
            </li>
        </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: 'color',
  data () {
    return {
      colorData: this.$store.state.themeColor.colorlist
    }
  },
  methods: {
    gochange (i) {
      // alert(i)
      this.$store.commit('changecolor', i)
    }
  }
}
</script>

<style>
.color-items{
    width: 96%;
    padding: 2%;
}
.color-item{
    height: 40px;
    line-height: 40px;
    margin-top: 20px;
    border-bottom: 1px solid #f1f1f1;
}
.color-name{
    height: 40px;
    overflow: hidden;
    padding-left: 20px;
}
.color-choose{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    float: right;
    margin-top: 5px;
    margin-right: 20px;
    color: #f1f1f1;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
}
</style>
