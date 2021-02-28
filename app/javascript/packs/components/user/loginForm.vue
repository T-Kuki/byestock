<template>
  <div>
    <form @submit.prevent="login()">
      <div>
        <ValidationProvider
          v-slot="{ errors }"
          rules="required">
          <label>Email</label>
          <input
            v-model="email"
            type="text">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div>
        <ValidationProvider
          v-slot="{ errors }"
          rules="required">
          <label>Password</label>
          <input
            v-model="password"
            name="password"
            type="password">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <button type="submit">
        Sign In
      </button>
    </form>
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