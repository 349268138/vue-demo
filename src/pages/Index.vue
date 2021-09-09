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
              <a :href="item.url">{{ item.name }}</a>
            </li>
          </ul>
      </div>
    </div>
    <div class="index-right">
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item, index) in boardList" :key="item.id" :class="[{'line-last': index % 2 !== 0}, 'index-board-' + item.imageType]">
          <div class="index-board-item-inner">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <a href="" class="button">立即购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      productList: {
        pc: {
          id: 1,
          title: 'PC产品',
          list: [
            {
              id: 1,
              name: '数据统计',
              url: 'http://starcraft.com',
              hot: true
            },
            {
              id: 2,
              name: '数据预测',
              url: 'http://warcraft.com'
            }
          ]
        },
        app: {
          id: 2,
          title: '手机应用类',
          list: [
            {
              id: 3,
              name: '91助手',
              url: 'http://weixin.com',
              hot: true
            },
            {
              id: 4,
              name: '产品助手',
              url: 'http://twitter.com'
            }
          ]
        }
      },
      newsList: [
        {
          id: 1,
          name: '第64届人气之星结果公布（领奖啦！',
          url: 'http://starcraft.com'
        },
        {
          id: 2,
          name: '出租一个月---合院套三主卧',
          url: 'http://warcraft.com'
        }
      ],
      boardList: [
        {
          id: 1,
          title: '开放产品',
          imageType: 'car',
          description: '开放产品是一款开放产品'
        },
        {
          id: 2,
          title: '品牌营销',
          imageType: 'loud',
          description: '品牌营销帮助你的产品更好地找到定位'
        },
        {
          id: 3,
          title: '开放产品',
          imageType: 'earth',
          description: '开放产品是一款开放产品'
        },
        {
          id: 4,
          title: '品牌营销',
          imageType: 'hill',
          description: '品牌营销帮助你的产品更好地找到定位'
        }
      ]
    }
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
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
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
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
