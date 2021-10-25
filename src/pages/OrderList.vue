<template>
  <div class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <selection :selections="products" @on-change="productChange"></selection>
      </div>
      <div class="order-list-option">
        开始日期：
        <datepicker format="YYYY-MM-DD" :value="startDate" @on-change="changeStartDate($event)"></datepicker>
      </div>
      <div class="order-list-option">
        结束日期：
        <datepicker format="YYYY-MM-DD" :value="endDate" @on-change="changeEndDate($event)"></datepicker>
      </div>
      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="(tableHead, index) in tableHeads" v-bind:key="index" @click="changeOrder(tableHead)" :class="{active: tableHead.active}">
            {{ tableHead.label }}
          </th>
        </tr>
        <tr v-for="(tableData, index) in tableDatas" v-bind:key="index">
          <td v-for="(tableHead, index) in tableHeads" v-bind:key="index">
            {{ tableData[tableHead.key] }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Selection from '../components/base/Selection'
import Datepicker from '../components/base/Datepicker'
import _ from 'lodash'

export default {
  name: 'OrderList',
  components: {
    Selection,
    Datepicker
  },
  data () {
    return {
      productId: 0,
      query: '',
      products: [
        {
          id: 1,
          value: 1,
          label: 'Vue培训'
        },
        {
          id: 2,
          value: 2,
          label: 'React培训'
        }
      ],
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId'
        },
        {
          label: '购买产品',
          key: 'product'
        },
        {
          label: '购买日期',
          key: 'date'
        },
        {
          label: '培训级别',
          key: 'buyType'
        },
        {
          label: '培训时长',
          key: 'period'
        },
        {
          label: '培训总价',
          key: 'amount'
        }
      ],
      tableDatas: [],
      startDate: '',
      endDate: '',
      currentOrder: 'asc'
    }
  },
  watch: {
    query () {
      this.getTableData()
    }
  },
  methods: {
    productChange (obj) {
      this.productId = obj.value
      this.getTableData()
    },
    changeStartDate (date) {
      this.startDate = date
      this.getTableData()
    },
    changeEndDate (date) {
      this.endDate = date
      this.getTableData()
    },
    getTableData () {
      let reqParam = {
        product: this.productId,
        startDate: this.startDate,
        endDate: this.endDate,
        query: this.query
      }
      this.$http.post('/api/queryOrderList', reqParam).then((res) => {
        this.tableDatas = res.data
      }, (err) => {
        console.log(err)
      })
    },
    changeOrder (headItem) {
      this.tableHeads.map((item) => {
        item.active = false
        return item
      })
      headItem.active = true
      if (this.currentOrder === 'asc') {
        this.currentOrder = 'desc'
      } else if (this.currentOrder === 'desc') {
        this.currentOrder = 'asc'
      }
      this.tableDatas = _.orderBy(this.tableDatas, headItem.key, this.currentOrder)
    }
  },
  mounted () {
    this.getTableData()
  }
}
</script>

<style scoped>
.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
}
.order-wrap h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.order-query {
  height: 25px;
  line-height: 25px;
  border: 1px solid #e3e3e3;
  outline: none;
  text-indent: 10px;
}
.order-list-option {
  display: inline-block;
  padding-left: 15px;
}
.order-list-option:first-child {
  padding-left: 0;
}
.order-list-table {
  margin-top: 20px;
}
.order-list-table table {
  width: 100%;
  background: #fff;
}
.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}
.order-list-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
  cursor: pointer;
}
.order-list-table th.active {
  background: #35495e;
}
</style>
