<template>
  <div id="app">
    <div class="app-header">
      <div class="app-header-inner">
        <img src="./assets/img/logo.png">
        <div class="header-nav">
          <ul class="nav-list">
            <li>登录</li>
            <li class="nav-pile">|</li>
            <li>注册</li>
            <li class="nav-pile">|</li>
            <li>关于</li>
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
  </div>
</template>
<script>

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
