<template>
  <div class="login_container">
    <form @submit.prevent="login()">
      <div class="form_block">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required">
          <label class="form_label">Email</label>
          <input
            v-model="email"
            class="form_input"
            type="text">
          <span class="err_msg">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <br>
      <div class="form_block">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required">
          <label class="form_label">Password</label>
          <input
            v-model="password"
            class="form_input"
            name="password"
            type="password">
          <span class="err_msg">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <br>
      <button
        class="login_button"
        type="submit">
        Login
      </button>
    </form>
    <a
      :to="{ name: 'shopLogin'}">
      class="shop_login_link">工務店様はこちらからログイン</a>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationProvider
  },
  data: function(){
    return {
      value: null,
      dialog: false,
      email: '',
      password: '',
     
    }
  },
  methods: {  
    login() {
      this.$store.dispatch('login', {email: this.email, password: this.password})
      this.$router.push({ name: 'home'})
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
  color: #BCE0FD;
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
  border-radius: 0;
  width:100%;
  font-size:16px;
  border:1px solid #aaa;
  padding:.3rem;
}
.login_button{
  color: #BCE0FD;
  margin-top: 2rem;
  padding: .2rem 2rem;
}
.err_msg{
  color: red;
}
.shop_login_link{
  border-bottom: 1px;
}
</style>