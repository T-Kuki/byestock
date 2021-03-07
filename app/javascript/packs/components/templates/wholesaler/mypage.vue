<template>
  <div class="wrapper">
    <div class="main">
      <Navbar />
    </div>
    <div>
      <h2>床材</h2>
      <ItemList />
    </div>
  </div>
</template>

<script>
import Navbar from '../../organsms/sideNav/navbar.vue'
import ItemList from '../../organsms/itemlist/itemlist.vue'
export default {
  components: {
    Navbar,
    ItemList
  },
  currentGetter(){
    return this.$store.getters.data
  }
}
</script>

<style scoped lang="sass">
.main {
    background: pink;
    width: 60%;
    margin-right: 20%;
}
.wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>