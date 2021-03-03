<template>
  <ShopLogin />
</template>

<script>
import ShopLogin from '../../components/shopUser/shopLoginForm'

export default {
  components: {
    ShopLogin,
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