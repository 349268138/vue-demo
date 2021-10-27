<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>Vue培训</h2>
        <p>Vue.js是一个用来开发web界面的前端框架，小巧的外表、优雅的代码结构和全新的MVVM理念，很快受到了众多前端工程师追捧的新宠。本课程将带你掌握vue的语法结构、单向数据流、数据的双向绑定，数据交互、动画、路由等内容。</p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  培训级别：
              </div>
              <div class="sales-board-line-right">
                  <selection :selections="buyTypes" @on-change="onParamChange('buyType', $event)"></selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  培训时长：
              </div>
              <div class="sales-board-line-right">
                  <chooser :selections="periodList" @on-change="onParamChange('period', $event)"></chooser>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  培训总价：
              </div>
              <div class="sales-board-line-right">
                  {{ price }} 元
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button" @click="showPayDialog()">
                    立即购买
                  </div>
              </div>
          </div>
      </div>
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>本课程由xxx高级前端工程师讲授，授课风格言简意赅、通俗易懂，深入浅出，知识含金量大；为想学Vue却无从下手的人群设计，以实际项目为例，逐层深入，学透Vue。</p>

        <h3>课程目标是什么</h3>
        <ul>
          <li>1、使用Vue快速提高开发效率；</li>
          <li>2、掌握MVVM的开发思想；</li>
          <li>3、开发可复用的自定义组件；</li>
          <li>4、独立使用Vue开发完整项目。</li>
        </ul>

        <h3>教学方式是什么</h3>
        <ul>
          <li>本门课程采用视频学习+讲师答疑+面授实战的形式进行教学；</li>
          <li>1、基础阶段。因为每位同学的基础不同，将采取学员主导的视频学习方式，把基础知识体系拆成一个个知识点，包含5分钟左右的精品视频，方便学习；</li>
          <li>2、微信群答疑。讲师和辅导员会在VIP微信群里针对大家遇到的问题在微信中进行答疑,帮助大家解决学习中的问题；</li>
          <li>3、项目实战。基础知识学完通过测试后后我们会有完整二天的项目实战，带手把手带大家做一个完整的全栈项目；</li>
        </ul>
      </div>

      <dialog-window :isShow="isShowPayDialog" @dialog-window-close="hidePayDialog()">
        <table class="buy-dialog-table">
          <tr>
            <th>培训级别</th>
            <th>培训时长</th>
            <th>培训总价</th>
          </tr>
          <tr>
            <td>{{ buyType.label }}</td>
            <td>{{ period.label }}</td>
            <td>{{ price }}</td>
          </tr>
        </table>
        <h3 class="buy-dialog-title">请选择银行</h3>
        <bank-chooser @on-change="onChangeBanks($event)"></bank-chooser>
        <div class="button buy-dialog-btn" @click="confirmBuy()">
          确认购买
        </div>
      </dialog-window>
      <dialog-window :is-show="isShowErrDialog" @dialog-window-close="hideErrDialog">
        支付失败！
      </dialog-window>
      <check-order :is-show-check-dialog="isShowCheckOrder" :order-id="orderId" @on-close-check-dialog="hideCheckOrder">
      </check-order>
  </div>
</template>

<script>
import Selection from '../../components/base/Selection'
import Chooser from '../../components/base/Chooser'
import DialogWindow from '../../components/base/DialogWindow'
import BankChooser from '../../components/BankChooser'
import CheckOrder from '../../components/CheckOrder'

export default {
  components: {
    Selection,
    Chooser,
    DialogWindow,
    BankChooser,
    CheckOrder
  },
  data () {
    return {
      buyType: {},
      period: {},
      price: 0,
      periodList: [
        {
          label: '半年',
          value: 0
        },
        {
          label: '一年',
          value: 1
        },
        {
          label: '三年',
          value: 2
        }
      ],
      buyTypes: [
        {
          label: '初级',
          value: 0
        },
        {
          label: '中级',
          value: 1
        },
        {
          label: '高级',
          value: 2
        }
      ],
      isShowPayDialog: false,
      bankId: null,
      orderId: null,
      isShowCheckOrder: false,
      isShowErrDialog: false
    }
  },
  methods: {
    onParamChange (attr, val) {
      this[attr] = val
      this.getPrice()
    },
    getPrice () {
      let reqParams = {
        buyType: this.buyType.value,
        period: this.period.value
      }

      this.price = (reqParams.buyType + 1) * (reqParams.period + 1) * 1100

      // this.$http.post('/api/price', reqParams).then((res) => {
      //   this.price = res.data.amount
      // }, (err) => {
      //   console.log(err)
      // })
    },
    showPayDialog () {
      this.isShowPayDialog = true
    },
    hidePayDialog () {
      this.isShowPayDialog = false
    },
    hideErrDialog () {
      this.isShowErrDialog = false
    },
    hideCheckOrder () {
      this.isShowCheckOrder = false
    },
    onChangeBanks (bankObj) {
      console.log(bankObj)
      this.bankId = bankObj.id
    },
    confirmBuy () {
      // this.orderId = new Date().getTime()

      let reqParams = {
        buyType: this.buyType.value,
        period: this.period.value
      }

      this.$http.post('/api/createOrder', reqParams).then((res) => {
        if (res.data.code !== '0002') {
          this.orderId = res.data.orderId
          this.isShowCheckOrder = true
          this.isShowPayDialog = false
        } else {
          console.log(res)
          this.isShowBuyDialog = false
          this.isShowErrDialog = true
        }
      }, (err) => {
        console.log(err)
        this.isShowBuyDialog = false
        this.isShowErrDialog = true
      })
    }
  },
  mounted () {
    this.buyType = this.buyTypes[0]
    this.period = this.periodList[0]
    this.getPrice()
  }
}
</script>

<style scoped>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
</style>
