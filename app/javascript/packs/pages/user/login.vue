<template>
  <Login />
</template>

<script>
import Login from '../../components/user/loginForm'

export default {
  components: {
    Login,
  },
  computed: {
    currentUser() {
      return this.$store.state.data
    }
  }
}
</script>

<style scoped lang="sass">

</style>