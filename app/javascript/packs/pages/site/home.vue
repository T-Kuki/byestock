<template>
  <div>
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from '../../components/nav/sidebar.vue'
export default {
  components: {
    Sidebar
  },
  currentGetter(){
    return this.$store.getters.data
  }
}
</script>

<style scoped lang="sass">

</style>