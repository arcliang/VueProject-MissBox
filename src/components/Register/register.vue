<template>
  <mu-container style="padding-top: 2rem">
    <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
      <mu-form-item label="账号/手机" help-text="" prop="username" :rules="usernameRules">
        <mu-text-field v-model="form.username" prop="username"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="密码" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="form.password" prop="password"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="密码确认" prop="password" :rules="password2Rules">
        <mu-text-field type="password" v-model="form.password2" prop="password"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="radio" label="性别">
        <mu-radio v-model="form.sex" value="male" label="男生"></mu-radio>
        <mu-radio v-model="form.sex" value="female" label="女生"></mu-radio>
      </mu-form-item>
      <mu-form-item prop="isAgree" :rules="argeeRules">
        <mu-checkbox label="同意用户协议" v-model="form.isAgree"></mu-checkbox>
      </mu-form-item
      <mu-form-item>
        <mu-button color="primary" @click="submit">注册</mu-button>
      </mu-form-item>
    </mu-form>
  </mu-container>
</template>
<script>
  export default {
    data () {
      return {
        labelPosition: 'top',
        form: {
          username:'',
          password:'',
          password2:'',
          sex:'',
          isAgree:false
        },
        usernameRules: [
          { validate: (val) => !!val, message: '必须填写用户名'},
          { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        passwordRules: [
          { validate: (val) => !!val, message: '必须填写密码'},
          { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        password2Rules: [
          { validate: (val) => !!val, message: '请再输入一次密码！'},
          { validate: (val) => this.form.password2 == this.form.password, message: '与第一次密码不一致'}
        ],
        argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}]
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
