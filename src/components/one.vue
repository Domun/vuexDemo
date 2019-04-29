<template>
  <div id="product-list-one" :style="{background: color}">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product , i) in products" :key="i">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // products: this.$store.state.products // 引入的是state中未计算过的数值
      products: this.$store.getters.changeprice,
      color: this.$store.state.themeColor.truecolor
    }
  }
}
</script>

<style scoped>
#product-list-one {
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>
