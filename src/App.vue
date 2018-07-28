<template>
  <div id="app">
    <header id="header" class="mui-bar mui-bar-nav">
      <img src="../static/images/菜单.png" style="float: left;padding-top: 5px" @click="open = !open">
      <a class="mui-action-back mui-icon mui-pull-right"><p style="padding-top: 5px;color: black;padding-right: 4px">back</p></a>
      <h1 class="mui-title" style="color: #cf2d28;font-weight: bold;font-size: 20px">想 念 盒</h1>
    </header>
    <router-view style="margin-top: 45px"></router-view>
    <go-top></go-top>
    <div data-v-1b447d36="" data-v-9c6708ce="" id="pfooter" class="footer">
      <div data-v-1b447d36="" class="footer-row">
        <a data-v-1b447d36="" href="#/login">登录</a> |
        <a data-v-1b447d36="" href="#/register">注册</a> |
        <a data-v-1b447d36="">客服</a> |
        <a data-v-1b447d36="">关于想念盒</a>
      </div>
      <div data-v-1b447d36="" class="footer-attestation">

      </div>
      <div data-v-1b447d36="" class="footer-copyright">
      copyright&nbsp;&nbsp;©2017-2018 想念盒工作室 版权所有
      </div>
    </div>
        <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
          <div class="userinfo">
            <img src="../static/images/头像.jpeg" class="userpic">
            <h5 class="name">桂平马化腾</h5>
          </div>
          <div class="weather">
            <img src="../static/images/weather/下雨.png">
            <h3 style="text-align: center">西安</h3>
            <p style="text-align: center"></p>

          </div>
          <div class="choose">
            <button class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined" type="button" id="btn1">个人信息</button>
            <button class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined" type="button" id="btn2">最近浏览</button>
            <button class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined" type="button" id="btn3">我的日志</button>
            <button class="mui-btn mui-btn-danger mui-btn-block" type="button" id="btn4">退出登录</button>
          </div>
        </mu-drawer>

    <!--<vue-drawer-layout-->
      <!--ref="drawer"-->
      <!--:drawer-width="200"-->
      <!--:enable="true"-->
      <!--:animatable="true"-->
      <!--:z-index="1"-->
      <!--:drawable-distance="Math.floor(800/3)"-->
      <!--:content-drawable="true"-->
      <!--:backdrop="true"-->
      <!--:backdrop-opacity-range="[0,0.4]">-->
      <!--<div class="drawer-content" slot="drawer">-->
        <!--&lt;!&ndash; drawer-content &ndash;&gt;-->
        <!--<div class="userinfo">-->
          <!--<img src="../static/images/头像.jpeg" class="userpic">-->
          <!--<h5 class="name">桂平马化腾</h5>-->
        <!--</div>-->
        <!--<div class="weather">-->
          <!--<img src="../static/images/weather/下雨.png">-->
          <!--<h3 style="text-align: center">西安</h3>-->
          <!--<p style="text-align: center"></p>-->

        <!--</div>-->
        <!--<div class="choose">-->
          <!--<button class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined" type="button" id="btn1">个人信息</button>-->
          <!--<button class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined" type="button" id="btn2">最近浏览</button>-->
          <!--<button class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined" type="button" id="btn3">我的日志</button>-->
          <!--<button class="mui-btn mui-btn-danger mui-btn-block" type="button" id="btn4">退出登录</button>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div slot="content" style="height: 100%;overflow: auto">-->
        <!--&lt;!&ndash; main-content &ndash;&gt;-->

        <!--<router-view style="margin-top: 45px"></router-view>-->
      <!--</div>-->
    <!--</vue-drawer-layout>-->
  </div>
</template>

<script>
  import goTop from './components/public/goTop.vue'
  export default {
    data () {
      return {
        docked: false,
        open: false,
        position: 'left'
      }
    },
    components:{
      goTop
    }
  }
</script>

<style scoped>
  .userpic{
    width:60px;height:60px;border-radius:60px;
    margin: auto;
    position: absolute;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
    border: 2px solid #656b79;
  }
  .userinfo{
    height: 200px;
    background-color: clear;
    color: #323232;
    position: relative;
  }
  .name{
    color: black;
    padding-top: 140px;
    text-align: center;
  }
#btn1,#btn2,#btn3,#btn4{
  border-radius:0px;
  border-left: white;
  border-right: white;
}
  .weather img{
    display: block;
    margin: 0 auto;
  }
  .weather h3{
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .weather p{
    padding-bottom: 20px;
  }
.footer-row{
  text-align: center;
  color: #cf2d28;
  padding-bottom: 8px;
  padding-top: 8px;
}
  .footer-row a{
    color: #cf2d28;
  }
.footer-attestation{
  text-align: center;
}
  .footer-copyright{
    text-align: center;
    color: #9e9e9e;
    padding-bottom: 5px;
  }
#pfooter{
  background-color: white;
  margin-top: 10px;
  box-shadow: 0 1px 6px #ccc;
}
  .top-wrap[data-v-74848873] {
    position: fixed;
    top: 90%;
    right: .4rem;
    font-size: .4rem;
    background-color: #c8c4c4;
    color: #fff;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    text-align: center;
    box-sizing: border-box;
    padding-top: .13333rem;
    opacity: .8;
    z-index: 100;
  }
</style>
