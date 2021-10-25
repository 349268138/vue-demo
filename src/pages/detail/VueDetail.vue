<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>Vue培训</h2>
        <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
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
        <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

        <h3>用户行为指标</h3>
        <ul>
          <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
          <li>用户在网站的停留时间；</li>
          <li>用户来源网站（也叫“引导网站”）；</li>
          <li>用户所使用的搜索引擎及其关键词；</li>
          <li>在不同时段的用户访问量情况等。</li>
        </ul>

        <h3>浏览网站方式</h3>
        <ul>
          <li>用户上网设备类型</li>
          <li>用户浏览器的名称和版本</li>
          <li>访问者电脑分辨率显示模式</li>
          <li>用户所使用的操作系统名称和版本</li>
          <li>用户所在地理区域分布状况等</li>
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
