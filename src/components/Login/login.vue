<template>
  <mu-container style="padding: 0px;margin: 0px;max-width: 100%">
    <mu-tabs :value.sync="active2" color="white" indicator-color="redA700" full-width>
      <mu-tab style="color: black;">账号密码登录</mu-tab>
      <mu-tab style="color: black;">手机号登录</mu-tab>
    </mu-tabs>
    <div class="demo-text" v-if="active2 === 0">
     <AccounterLogin></AccounterLogin>
    </div>
    <div class="demo-text" v-if="active2 === 1">
      <PhoneLogin></PhoneLogin>
    </div>
  </mu-container>
</template>

<script>
  import AccounterLogin from './AccounterLogin'
  import PhoneLogin from './PhoneLogin'
    export default {
      data () {
        return {
          active2: 0
        };
      },components:{
        AccounterLogin,
        PhoneLogin
      }
    }
</script>

<style scoped>
  .demo-text {
    padding: 16px;
    background: #fff;
  p {
    margin: 8px 0;
  }
  }
</style>
