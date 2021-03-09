<template>
  <div class="wrapper">
    <div class="main">
      <Navbar />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '../../organsms/sideNav/navbar'
import ItemMgmt from '../../organsms/wholesaler/itemMgmt'
export default {
  components: {
    Navbar,
    // eslint-disable-next-line vue/no-unused-components
    ItemMgmt
  },
  currentGetter(){
    return this.$store.getters.data
  }
}
</script>

<style scoped lang="sass">
.wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
}
.main {
    background: pink;
    width: 60%;
    margin-right: 20%;
}
</style>