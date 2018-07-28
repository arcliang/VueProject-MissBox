<template>
  <mu-container class="demo-container">
    <mu-row gutter>
      <mu-col span="3">
        <router-link to="/">
          <img src="../../../static/images/link/1.png">
          <p>首页</p>
        </router-link>
      </mu-col>
      <mu-col span="3">
        <router-link to="/log">
          <img src="../../../static/images/link/2.png">
          <p>日志</p>
        </router-link>
      </mu-col>
      <mu-col span="3">
        <router-link to="/meet">
          <img src="../../../static/images/link/3.png">
          <p>见面</p>
        </router-link>
      </mu-col>
      <mu-col span="3">
        <router-link to="/dating">
          <img src="../../../static/images/link/4.png">
          <p>约会</p>
        </router-link>
      </mu-col>
    </mu-row>
    <mu-row gutter>
      <mu-col span="3">
        <router-link to="/login">
          <img src="../../../static/images/link/5.png">
          <p>登录</p>
        </router-link>
      </mu-col>
      <mu-col span="3">
        <router-link to="/register">
          <img src="../../../static/images/link/6.png">
          <p>注册</p>
        </router-link>
      </mu-col>
      <mu-col span="3">
        <router-link to="/AboutUs">
          <img src="../../../static/images/link/7.png">
          <p>关于我们</p>
        </router-link>
      </mu-col>
      <mu-col span="3">
        <router-link to="/JoinWithUs">
          <img src="../../../static/images/link/8.png">
          <p>加入我们</p>
        </router-link>
      </mu-col>
    </mu-row>
  </mu-container>
</template>

<script>
    export default {
        name: "LinkChoices"
    }
</script>

<style scoped>
img{
  display: block;
  margin: 0 auto;
}
  p{
    color: black;
    text-align: center;
    padding-top: .2rem;
  }
</style>
