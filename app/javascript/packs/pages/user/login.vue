<template>
  <SignIn />
</template>

<script>
import SignIn from '../../components/user/loginForm'

export default {
  components: {
    SignIn,
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