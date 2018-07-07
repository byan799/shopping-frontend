<template>
  <div id="app">
    <div class="app-header">
      <div class="app-header-inner">
        <img src="./assets/img/logo.png">
        <div class="header-nav">
          <ul class="nav-list">
            <li v-if="userName !== ''">{{ userName }}</li>
            <li v-else @click="modalShow('Log')">登录</li>
            <li class="nav-pile">|</li>
            <li v-if="userName != ''" @click="quit">退出</li>
            <li v-else @click="modalShow('Reg')">注册</li>
            <li class="nav-pile">|</li>
            <li @click="modalShow('About')">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <p>Copyright &copy; 2018 xxx.com</p>
    </div>
    <modal-dialog :is-dialog-show="isLogDialogShow" :is-cover-show="isLogCoverShow"@on-close="closeDialog('Log')">
      <login @login-success="loginSucess"></login>
    </modal-dialog>
    <modal-dialog :is-dialog-show="isRegDialogShow" :is-cover-show="isRegCoverShow" @on-close="closeDialog('Reg')">
      <register></register>
    </modal-dialog>
    <modal-dialog :is-dialog-show="isAboutDialogShow" :is-cover-show="isAboutCoverShow" @on-close="closeDialog('About')">
      <about></about>
    </modal-dialog>
  </div>
</template>
<script>
  import modalDialog from './components/modal-dialog.vue'
  import about from './components/about.vue'
  import login from './components/login.vue'
  import register from './components/register.vue'
  export default {
    components: {
      modalDialog,
      about,
      login,
      register
    },
    data () {
      return {
        isLogDialogShow: false,
        isLogCoverShow: false,
        isRegDialogShow: false,
        isRegCoverShow: false,
        isAboutDialogShow: false,
        isAboutCoverShow: false,
        userName: ''
      }
    },
    methods: {
      modalShow (modal) {
        let dialog = 'is' + modal + 'DialogShow'
        let cover = 'is' + modal + 'CoverShow'
        this[dialog] = true
        this[cover] = true
      },
      closeDialog (modal) {
        let dialog = 'is' + modal + 'DialogShow'
        let cover = 'is' + modal + 'CoverShow'
        this[dialog] = false
        setTimeout(() => {
          this[cover] = false
        }, 300)
      },
      loginSucess (name) {
        this.closeDialog('Log')
        this.userName = name
      },
      quit () {
        this.userName = ''
      }
    }
  }
</script>

<style lang="scss">
@import './style/layout.scss';
body {
  margin: 0;
  background-color: #f1f1f1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style lang="scss" scoped>
  .app-header {
    height: 120px;
    width: 100%;
    background-color: #363636;
    .app-header-inner {
      height: 80px;
      padding: 20px 40px;
      img {
        width: 80px;
        height: 80px;
        float: left;
      }
      .header-nav {
        float: right;
        .nav-list {
          margin: 0;
          >li {
            line-height: 80px;
            display: inline;
            text-decoration: none;
            color: white;
            margin: 0 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .app-content {
    width: 1200px;
    margin: 0 auto;
    &:after {
      content: '';
      display: block;
      clear: both;
      overflow: hidden;
      visibility: hidden;
    }
  }
  .app-footer {
    height: 80px;
    background-color: #c3c1c1;
    p {
      margin: 0;
      line-height: 80px;
    }
  }
</style>
