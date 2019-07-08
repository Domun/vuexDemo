<template>
  <div class="chooseCity">
      <header>
      <router-link to="/"><b class="goback">&lt;</b></router-link>
      <p class="title">this is chooseCity vue</p>
    </header>
    <main>
      <div class="nowcity">
            <div class="list-title border-bottom">当前城市</div>
            <div class="city-area">
                <p class="now-txt">{{this.city}}</p>
            </div>
           </div>
        <div class="hotcity">
           <div class="list-title border-bottom">热门城市</div>
           <div class="city-area">
               <ul>
                   <li  v-for="item of hotcities" :key="item.id" class="city-li" @click="changeclick(item.name)">
                       {{item.name}}
                    </li>
               </ul>
           </div>
        </div>
       <div class="allcity" v-for="(item , key) of citylists" :key="key" :ref="key">
           <div class="list-title border-bottom">{{key}}</div>
           <div class="city-area">
               <ul>
                   <li class="city-li" v-for="inneritem of item" :key="inneritem.id" @click="changeclick(inneritem.name)">
                       {{inneritem.name}}
                    </li>
               </ul>
           </div>
       </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
// import {mapState} from 'vuex'
export default {
  name: 'chooseCity',
  data () {
    return {
      citylists: {},
      hotcities: [],
      city: this.$store.state.chooseCity.city
    }
  },
  mounted () {
    this.getCitylists()
  },
  computed: {
    // ...mapState(['city'])
  },
  methods: {
    // 获取数据
    getCitylists () {
      axios.get('https://www.easy-mock.com/mock/5bbd5b3cdd1a97432d9d8c31/travel/city')
        .then(this.getcityinfosucc)
        .catch(function (err) {
          console.log(err)
        })
    },
    // 处理
    getcityinfosucc (res) {
      console.log(res)
      if (res.data.ret) {
        var data = res.data.data
        console.log(data)
        this.citylists = data.cities
        this.hotcities = data.hotCities
      }
    },
    // 改变城市数据
    changeclick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-title{
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #333;
  background: #eeeeee;
  margin: 10px 0px;
  padding-left: 20px;
}
.city-area{
  overflow: hidden;
  padding: 0% 2%;
}
.now-txt{
  width: 30%;
  height: 32px;
  margin: 2% 1%;
  text-align: center;
  border: 1px solid rgb(88, 176, 235);
  border-radius: 10px;
  font-size: 16px;
  line-height: 32px;
  text-overflow: ellipsis;
  color: #888888;
}
.city-li{
  width: 30%;
  height: 36px;
  margin: 2% 1%;
  float: left;
  text-align: center;
  border: 1px solid #888888;
  border-radius: 10px;
  font-size: 16px;
  line-height: 36px;
  text-overflow: ellipsis;
  color: #888888;
}
</style>
