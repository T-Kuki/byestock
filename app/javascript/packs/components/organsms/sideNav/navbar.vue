<template>
  <div class="sideNavbar">
    <h1 class="title">
      byestock
    </h1>
    <p> {{ currentUser.email }} さん</p>
    <div>
      <WholesalerMenuList v-if="routeMatch" />
      <MenuList v-else />
    </div>
    <button
      class="logout_btn"
      @click="logout">
      ログアウト
    </button>
    <button
      class="logout_btn"
      @click="showMypage">
      マイページ
    </button>
  </div>
</template>

<script>
import MenuList from '../../molecules/sideNav/menuLists'
import WholesalerMenuList from '../../molecules/sideNav/wholesalerMenuLists'
export default {
  components: {
    MenuList,
    WholesalerMenuList
  },
  computed: {
    currentUser() {
      return this.$store.state.wholesaler.data
    },
    routeMatch() {
      return location.pathname.match(/^\/wholesaler/)
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'login'})
    },
    showMypage(){
      this.$router.push({ name: 'items'})
    }
  }

}
</script>
<style module>
.title {
    padding: 3px;
}
.sideNavbar{
    height: 100%;
    width: 20%;
    text-align: center;
    background-color: #2699FB;
    position: fixed!important;
    z-index: 1;
    overflow: auto;
}
.menu_items{
  display: block;
  margin:2rem;
}
.logout_btn{
  margin:1rem auto;
  padding: 0 1,5rem;
}
</style>
