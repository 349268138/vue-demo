<template>
  <div>
    <h1>注册组件</h1>
    <form>
      <div class="form-inline">
        <label for="account">账号</label>
        <input class="form-control" id="account" placeholder="账号">
      </div>
      <div class="form-inline">
        <label for="password">密码</label>
        <input type="password" class="form-control" id="password" placeholder="密码">
      </div>
      <div class="form-inline">
        <label for="password">确认</label>
        <input type="password" class="form-control" id="password" placeholder="确认密码">
      </div>
      <div class="form-inline">
        <label for="mail">邮箱</label>
        <input class="form-control" id="mail" placeholder="邮箱">
      </div>
      <button type="submit" class="btn btn-primary">注册</button>
    </form>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'Register',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
