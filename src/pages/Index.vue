<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <div v-for="product in productList" :key="product.id">
          <h3>{{ product.title }}</h3>
          <ul>
            <li v-for="item in product.list" :key="item.id">
              <a :href="item.url">{{ item.name }}</a>
               <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div class="hr"></div>
        </div>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
          <ul>
            <li v-for="item in newsList" :key="item.id">
              <a :href="item.url" class="news-item">{{ item.name }}</a>
            </li>
          </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides"></slide-show>
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item, index) in boardList" :key="item.id" :class="[{'line-last': index % 2 !== 0}, 'index-board-' + item.imageType]">
          <div class="index-board-item-inner">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path: item.herf}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideShow from '../components/SlideShow'

export default {
  name: 'Index',
  created () {
    this.$http.get('/api/newsList').then(function (res) {
      this.newsList = res.data
      console.log(res.data)
    }, function (err) {
      console.log(err)
    })
    this.$http.get('/api/productList').then(function (res) {
      this.productList = res.data
      console.log(res.data)
    }, function (err) {
      console.log(err)
    })
    this.$http.get('/api/boardList').then(function (res) {
      this.boardList = res.data
      console.log(res.data)
    }, function (err) {
      console.log(err)
    })
    // this.$http.post('/api/modify', {userId: '1'}).then(function (data) {
    //   console.log(data)
    // }, function (err) {
    //   console.log(err)
    // })
  },
  data () {
    return {
      productList: {},
      newsList: [],
      boardList: [],
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/react'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/vue'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'detail/vue'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/react'
        }
      ]
    }
  },
  components: {
    SlideShow
  }
}
</script>

<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-type-1 .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-type-2 .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-type-3 .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-type-4 .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.news-item {
  display: inline-block;
  width: 230px;
  /* 超出部分隐藏 */
  overflow: hidden;
  /* 超出部分为省略号 */
  text-overflow: ellipsis;
  /* 不允许换行 */
  white-space: nowrap;
}
</style>
