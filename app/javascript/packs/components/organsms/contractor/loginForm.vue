<template>
  <div class="login_container">
    <form @submit.prevent="login()">
      <InputForm
        v-model="email"
        label="メールアドレス"
        placeholder="メールアドレス"
        name="email"
        type="text" />
      <br>
      <InputForm
        v-model="password"
        label="パスワード"
        placeholder="パスワード"
        name="password"
        type="password" />
      <br>
      <button
        class="login_button"
        type="submit">
        Login
      </button>
    </form>
    <router-link
      :to="{ name: 'wholesalerLogin'}"
      class="shop_login_link">
      商社の方はこちらからログイン
    </router-link>
  </div>
</template>

<script>
import InputForm from '../../molecules/input/inputForm'
export default {
  components: {
    InputForm
  },
  data: function(){
    return {
      email: '',
      password: '',
    }
  },
  methods: {  
    login() {
      this.$store.dispatch('contractor/login', {email: this.email, password: this.password})
      this.$router.push(this.$route.query.redirect)
    },
    changeEmail(val) {
      this.emailValue = val
    },
    changePassword(val) {
      this.passwordValue = val
    }
  }
}
</script>
<style scoped>
.login_container{
  margin: 0 auto;
  text-align: center;
}
label, input {
  color: #2699FB;
  display: block;
  margin: auto;
}
.form_block{
  min-width: 250px;
  display: inline-block;
  margin: 1rem auto;
}
.form_label{
  float: left;
}
.form_input{
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: button;
  appearance: none;
  border-radius: .3rem;
  width:100%;
  font-size:16px;
  border:1px solid #aaa;
  padding:.5rem;
}
.login_button{
  color: #2699FB;
  margin-top: 2rem;
  padding: .2rem 2rem;
}
.err_msg{
  color: red;
  float: left;
}
.shop_login_link{
  color: #000000;
  border-bottom: 1px solid #000000;
}
</style>