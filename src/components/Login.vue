<template>
  <div>
    <form>
      <div class="form-inline">
        <label for="account">账号</label>
        <input class="form-control" id="account" placeholder="账号">
      </div>
      <div class="form-inline">
        <label for="password">密码</label>
        <input type="password" class="form-control" id="password" placeholder="密码">
      </div>
      <button type="submit" class="btn btn-primary">登录</button>
    </form>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

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
</style>
