<template>
  <div id="products">
     <header>
        <router-link to="/"><b class="goback">&lt;</b></router-link>
        <p class="title">商品列表页</p>
     </header>
     <div class="products-block">
       <ul class="products-items">
         <li class="products-item" v-for="(item, i) in newproducts" :key="i">
           <img :src="item.img">
           <!-- <img src="../assets/img/mouse.jpg" alt=""> -->
           <div class="pro-detail">
             <p>{{item.name}}</p>
             <p>￥{{item.price}}</p>
             <p><i class="iconfont" @click="addshopcar(i)">&#xe600;</i></p>
           </div>
         </li>
       </ul>
     </div>
     <div class="shopcar">
        <div class="shopcar-bd">
          <div class="carblock" :style="{background: color}">
            <router-link to="/shopcar"><i class="iconfont">&#xe600;</i></router-link>
          </div>
          <div class="carlength" v-if="carlength != '0'" :style="{background: color}">
            <p v-if="carlength == '0'"></p>
            <p v-else>{{carlength}}</p>
         </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'products',
  data () {
    return {
      newproducts: this.$store.state.modulecar.newproducts,
      shopcar: this.$store.state.modulecar.shopcar,
      shopcarlist: this.$store.state.modulecar.cleanshopup,
      color: this.$store.state.themeColor.truecolor
    }
  },
  computed: {
    carlength () {
      return this.shopcarlist.length
    }
  },
  methods: {
    addshopcar (i) {
      // this.$store.commit('minusprice', 2) // 提交`minusPrice,payload为2
      this.$store.commit('addtocar', i)
      // console.log(this.carlength)
      this.$store.commit('cleanshopup')
      alert('添加成功')
    }
  }
}
</script>

<style scoped>
.products-block{
  width: 96%;
  padding: 0% 2%;
}
.products-item{
  overflow: hidden;
  margin: 5% 0%;
  border: 1px solid #eee;
}
.products-item > img{
  width: 100%;
  height: 200px;
}
.pro-detail{
  display: flex;
  padding: 10px 0;
}
.pro-detail > p{
  flex: 1;
  text-align: center;
}
.shopcar{
  position: fixed;
  z-index: 10;
  bottom: 10%;
  right: 2%;
}
.shopcar-bd{
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #4191EA;
  position: relative;
}
.shopcar .iconfont{
  color: #ffffff;
  font-size: 20px;
}
.carblock{
  width: 100%;
  height: 100%;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
}
.carlength{
  position: absolute;
  z-index: 11;
  color: #ffffff;
  width: 20px;
  height: 20px;
  top:-35%;
  right: -20%;
  text-align: center;
  line-height: 20px;
  border-radius: 10px;
}

</style>
