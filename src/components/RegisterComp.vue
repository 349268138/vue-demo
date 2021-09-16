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
      <div class="form-inline">
        <label for="member">内推</label>
        <input class="form-control" id="member" placeholder="内推人账号">
      </div>
      <button type="submit" class="btn btn-default">注册</button>
    </form>
  </div>
</template>

<script>
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
  @import 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'
</style>
