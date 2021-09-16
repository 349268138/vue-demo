<template>
  <div id="router-comp">
    <div>
      <router-link to="/login">登陆</router-link>
      <router-link to="/register">注册</router-link>
      <router-view/>
    </div>
  </div>
</template>

<style>
  #router-comp {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .my-active, .my-exact-active {
    background: #007aff;
    font-weight: 800;
    color: #fff;
  }
</style>
