<template>
  <mu-container style="height: 100%">
    <mu-form ref="form" :model="validateForm" class="mu-demo-form">
      <mu-form-item label="手机号" help-text="" prop="username" :rules="usernameRules">
        <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="验证码" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" prop="password" style="width: 60%"></mu-text-field>
        <mu-button color="white" textColor="black" @click="">下发验证码</mu-button>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="submit">登录</mu-button>
        <mu-button @click="clear">重置</mu-button>
      </mu-form-item>
    </mu-form>
  </mu-container>
</template>
<script>
  export default {
    data () {
      return {
        usernameRules: [
          { validate: (val) => !!val, message: '必须填写手机号'},
          { validate: (val) => val.length >= 11 && val.length <= 11, message: '请输入正确的手机号'}
        ],
        passwordRules: [
          { validate: (val) => !!val, message: '必须填写验证码'},
          { validate: (val) => val.length >= 6 && val.length <= 6, message: '验证码不符合'}
        ],
        validateForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result)
        });
      },
      clear () {
        this.$refs.form.clear();
        this.validateForm = {
          username: '',
          password: '',
        };
      }
    }
  };
</script>
<style>
  .mu-demo-form {
    width: 100%;
    max-width: 460px;
  }
</style>
