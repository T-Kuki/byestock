<template>
  <ContractorLogin />
</template>

<script>
import ContractorLogin from '../../organsms/contractor/loginForm.vue'

export default {
  components: {
    ContractorLogin,
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