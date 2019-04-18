<template>
  <div id="products">
     <header>
        <router-link to="/products"><b class="goback">&lt;</b></router-link>
        <p class="title">购物车页</p>
     </header>
     <div class="tips" v-if="shopcarlist.length == 0">
       <p>您的购物车是空的哦，请尽情的购物吧</p>
     </div>
     <div class="products-block">
       <ul class="products-items">
         <li class="products-item" v-for="(item, i) in shopcarlist" :key="i">
           <img :src="item.img">
           <!-- <img src="../assets/img/mouse.jpg" alt=""> -->
           <div class="pro-detail">
             <p>{{item.name}}</p>
             <p>￥{{item.price}}</p>
             <p>购买</p>
             <p>共&nbsp;<b>{{item.num}}</b>&nbsp;件</p>
           </div>
         </li>
       </ul>
     </div>
  </div>
</template>

<script>
export default {
  name: 'products',
  data () {
    return {
      shopcar: this.$store.state.modulecar.shopcar,
      shopcarlist: this.$store.state.modulecar.cleanshopup
    }
  }
}
</script>

<style scoped>
*{
  margin: 0%;
  padding: 0%;
}
li{
  list-style: none;
}
.goback{
  float: left;
}
.title{
  text-align: center;
}
.tips{
  text-align: center;
  color: #888;
  margin: 30px;
}
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
</style>
