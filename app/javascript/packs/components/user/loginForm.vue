<template>
  <div>
    <form>
      <div>
        <label>Email</label>
        <input
          v-model="email"
          v-validate="'required|email'"
          type="text">
      </div>
      <div>
        <label>Password</label>
        <input
          v-model="password"
          v-validate="'required'"
          name="password"
          type="password">
      </div>
      <button @click="signIn()">
        Sign In
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      value: null,
      dialog: false,
      email: '',
      password: '',
      errors: ''
    }
  },
  methods: {  
    signIn() {
      this.$store.dispatch('signIn', {email: this.email, password: this.password})
      //this.$emit('signCheckMethod', this.email)
    }
  }
}
</script>