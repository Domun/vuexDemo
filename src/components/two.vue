<template>
    <div id="product-list-two" :style="{background: color}">
        <h2>Product List Two</h2>
        <ul>
            <li v-for="(product , i) in products" :key="i">
                <span class="name">{{ product.name }}</span>
                <span class="price">${{ product.price }}</span>
            </li>
            <li><button @click="minusprice">减少价格 by mutations</button></li>
            <button @click="minusPriceAsync">异步减少价格 by actions</button>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      products: this.$store.state.moduleA.products,
      color: this.$store.state.themeColor.truecolor
    }
  },
  methods: {
    minusprice () {
      this.$store.commit('minusprice', 2) // 提交`minusPrice,payload为2
    },
    minusPriceAsync () {
      this.$store.dispatch('minusPriceAsync', 4) // 提交`minusPrice,payload为2
    }
  }
}
</script>

<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
