<template>
  <ContractorLogin />
</template>

<script>
import ContractorLogin from '../../components/templates/contractor/loginPage'

export default {
  components: {
    ContractorLogin,
  },
  computed: {
    currentUser() {
      return this.$store.state.wholesaler.data
    }
  }
}
</script>

<style scoped lang="sass">

</style>