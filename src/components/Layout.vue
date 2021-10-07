<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <img src="../assets/logn.png">
        <div class="head-nav">
          <ul class="nav-list">
            <li>{{ userName }}</li>
            <li class="nav-pile" v-if="userName !== ''">|</li>
            <li class="nav-pile" v-if="userName !== ''" @click="userName = ''">退出</li>
            <li class="nav-pile" v-if="userName !== ''">|</li>
            <li v-on:click="showDialogWindow('isShowLoginDialogWindow')" v-if="userName === ''">登录</li>
            <li class="nav-pile" v-if="userName === ''">|</li>
            <li @click="showDialogWindow('isShowRegisterDialogWindow')" v-if="userName === ''">注册</li>
            <li class="nav-pile" v-if="userName === ''">|</li>
            <li @click="showDialogWindow('isShowAboutDialogWindow')">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>2020-2030 Ningde Vocational And Technical College. All Rights Reserved.</p>
    </div>
    <dialog-window :is-show="isShowLoginDialogWindow" @dialog-window-close="closeDialogWindow('isShowLoginDialogWindow')">
      <login @login-success="onSuccessLogin"></login>
    </dialog-window>
    <dialog-window :is-show="isShowRegisterDialogWindow" @dialog-window-close="closeDialogWindow('isShowRegisterDialogWindow')">
      <register @register-success="onSuccessRegister"></register>
    </dialog-window>
    <dialog-window :is-show="isShowAboutDialogWindow" @dialog-window-close="closeDialogWindow('isShowAboutDialogWindow')">
      <p>宁职前端培训机构 - 一站式前端人才基地，专注IT职业教育前端人才服务，已开设***大课程体系，覆盖IT/设计/运营三大方向。全国建立了***多家培训中心，一地学习全国就业！</p>
    </dialog-window>
  </div>
</template>

<script>
import DialogWindow from './base/DialogWindow'
import Login from './Login'
import Register from './Register'

export default {
  name: 'Layout',
  data () {
    return {
      msg: 'Layout',
      userName: '',
      isShowLoginDialogWindow: false,
      isShowRegisterDialogWindow: false,
      isShowAboutDialogWindow: false
    }
  },
  components: {
    DialogWindow,
    Login,
    Register
  },
  methods: {
    showDialogWindow (attr) {
      this[attr] = true
    },
    closeDialogWindow (attr) {
      this[attr] = false
    },
    onSuccessLogin (data) {
      this.userName = data.userName
      this.closeDialogWindow('isShowLoginDialogWindow')
      console.log('login success: ' + data)
    },
    onSuccessRegister (data) {
      this.userName = data.userName
      this.closeDialogWindow('isShowRegisterDialogWindow')
      console.log('register success: ' + data)
    }
  }
}
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/  */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 70px;
  margin-top: 10px;
  margin-left: 15px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>
