<template>
  <div class="wrapper">
    <div class="main">
      <Sidebar />
    </div>
    <div>
      <ItemList />
    </div>
  </div>
</template>

<script>
import Sidebar from '../../components/nav/sidebar.vue'
import ItemList from '../../components/itemlist/itemlist.vue'
export default {
  components: {
    Sidebar,
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