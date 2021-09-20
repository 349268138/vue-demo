<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="userNameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userNameErrors.errorText }}</span>
      </div>
    </div>
    <div class="g-form-line">
      <span class="g-form-label">密码：</span>
      <div class="g-form-input">
        <input type="password" v-model="passwordModel" placeholder="请输入密码">
      </div>
      <span class="g-form-error">{{ passwordErrors.errorText }}</span>
    </div>
    <div class="g-form-line">
      <span class="g-form-label">密码确认：</span>
      <div class="g-form-input">
        <input type="password" v-model="passwordDoubleCheckModel" placeholder="请输入密码">
      </div>
      <span class="g-form-error">{{ passwordDoubleCheckErrors.errorText }}</span>
    </div>
    <div class="g-form-line">
      <div class="g-form-btn">
        <a class="button" @click="register()">注册</a>
      </div>
    </div>
    <p class="g-form-error">{{ errorText }}</p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userNameModel: '',
      userNameFlag: false,
      passwordModel: '',
      passwordFlag: false,
      passwordDoubleCheckModel: '',
      passwordDoubleCheckFlag: false,
      errorText: ''
    }
  },
  computed: {
    userNameErrors () {
      let errorText, status
      if (!/^\w{6,20}$/.test(this.userNameModel)) {
        errorText = '由英文字母、数字或下划线组成且长度大于5小于21'
        status = false
      } else {
        errorText = ''
        status = true
      }
      if (!this.userNameFlag) {
        errorText = ''
        this.changeUserNameFlag()
      }
      return {
        errorText,
        status
      }
    },
    passwordErrors () {
      let errorText, status
      if (!/^\w{6,20}$/.test(this.passwordModel)) {
        errorText = '由英文字母、数字或下划线组成且长度大于5小于21'
        status = false
      } else {
        errorText = ''
        status = true
      }
      if (!this.passwordFlag) {
        errorText = ''
        this.changePasswordFlag()
      }
      return {
        errorText,
        status
      }
    },
    passwordDoubleCheckErrors () {
      let errorText, status
      if (this.passwordDoubleCheckModel !== this.passwordModel) {
        errorText = '两次密码不同'
        status = false
      } else {
        errorText = ''
        status = true
      }
      if (!this.passwordDoubleCheckFlag) {
        errorText = ''
        this.changePasswordDoubleCheckFlag()
      }
      return {
        errorText,
        status
      }
    }
  },
  methods: {
    register () {
      if (!this.userNameErrors.status || !this.passwordErrors.status || !this.passwordDoubleCheckErrors.status) {
        this.errorText = '账号或密码校验未通过'
      } else {
        this.$http.get('/api/wangjinping/register').then((res) => {
          this.errorText = ''
          this.$emit('register-success', res.data)
        }, (error) => {
          console.log(error)
        })
      }
    },
    changeUserNameFlag () {
      this.userNameFlag = true
    },
    changePasswordFlag () {
      this.passwordFlag = true
    },
    changePasswordDoubleCheckFlag () {
      this.passwordDoubleCheckFlag = true
    }
  }
}
</script>

<style scoped>
</style>
