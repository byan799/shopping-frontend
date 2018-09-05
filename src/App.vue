<template>
  <div id="app">
    <div class="app-header">
      <div class="app-header-inner">
        <router-link to="/">
          <img src="/static/img/logo.png">
        </router-link>
        <div class="header-nav">
          <ul class="nav-list">
            <li v-if="userName">{{ userName }}</li>
            <li v-else @click="modalShow('Log')">Login</li>
            <li class="nav-pile">|</li>
            <li v-if="userName !== ''" @click="quit">Logout</li>
            <li v-else @click="modalShow('Reg')">Register</li>
            <li class="nav-pile">|</li>
            <li @click="modalShow('About')">About</li>
            <li v-if="userName">
              <span> | </span>
              <icon name="shopping-cart" id="shopping-cart-icon"></icon>
            </li>
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
      <p>Copyright &copy; boboyan.com </p>
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
  import { mapState, mapActions } from 'vuex'
  import modalDialog from './components/modal-dialog.vue'
  import about from './components/about.vue'
  import login from './components/login.vue'
  import register from './components/register.vue'
  export default {
    components: {
      modalDialog,
      about,
      login,
      register,
    },
    data () {
      return {
        isLogDialogShow: false,
        isLogCoverShow: false,
        isRegDialogShow: false,
        isRegCoverShow: false,
        isAboutDialogShow: false,
        isAboutCoverShow: false,
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {
      ...mapState('login', {
        userName: state => state.userName
      })
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
        //this.$store.dispatch('login/login', name)
        this.userLogIn(name)
      },
      quit () {
        this.userLogOut()
      },
      ...mapActions('login', {
        userLogIn: 'login',
        userLogOut: 'logout'
      })
    }
  }
</script>

<style lang="scss">
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
      width: 1200px;
      height: 80px;
      padding: 20px;
      margin: auto;
      img {
        width: 80px;
        height: 80px;
        float: left;
        margin-left: 20px;
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
            #shopping-cart-icon {
              width: 20px;
              height: 17px;
              margin-top: -4px;
              margin-left: 10px;
            }
          }
        }
      }
      &:after {
        content: '';
        clear: both;
        display: block;
        visibility: hidden;
        overflow: hidden;
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
