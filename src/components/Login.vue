<template>
  <form>
    <div class="form-group">
      <label for="exampleInputUserName">账号</label>
      <input type="email" class="form-control" id="exampleInputUserName" placeholder="账号">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="密码">
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">登录</button>
      </div>
    </div>
  </form>
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
