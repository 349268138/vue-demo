<template>
  <div>
    <dialog-window :is-show="isShowCheckDialog" @dialog-window-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </dialog-window>
    <dialog-window :is-show="isShowSuccessDialog" @dialog-window-close="toOrderList">
      购买成功！
    </dialog-window>
    <dialog-window :is-show="isShowFailDialog" @dialog-window-close="toOrderList">
      购买失败！
    </dialog-window>
  </div>
</template>

<script>
import DialogWindow from './base/DialogWindow'
export default {
  components: {
    DialogWindow
  },
  name: 'CheckOrder',
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default () {
        return false
      }
    },
    orderId: {
      type: [String, Number]
    }
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods: {
    checkStatus () {
      let reqParams = {
        orderId: this.OrderId
      }
      this.$http.post('/api/checkOrder', reqParams).then((res) => {
        if (res.data.code !== '0002') {
          this.isShowSuccessDialog = true
          this.$emit('on-close-check-dialog')
        } else {
          console.log(res)
          this.isShowFailDialog = true
          this.$emit('on-close-check-dialog')
        }
      }, (err) => {
        console.log(err)
        this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')
      })
    },
    toOrderList () {
      this.$router.push({path: '/orderList'})
    }
  }
}
</script>

<style scoped>

</style>
