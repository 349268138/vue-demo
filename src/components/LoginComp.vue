<template>
  <div>
    <h1>登录组件</h1>
    <form>
      <div class="form-inline">
        <label for="account">账号</label>
        <input class="form-control" id="account" placeholder="账号">
      </div>
      <div class="form-inline">
        <label for="password">密码</label>
        <input type="password" class="form-control" id="password" placeholder="密码">
      </div>
      <button type="submit" class="btn btn-default">登录</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
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
