<template>
  <div class="sideNavbar">
    <h1 class="title">
      byestock
    </h1>
    <p v-if="currentUser">
      {{ currentUser.email }} さん
    </p>
    <div>
      <WholesalerMenuList v-if="routeMatchWholesaler" />
      <ContractorMenuList v-else-if="routeMatchContractor" />
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
    <div>
      <button
        class="logout_btn"
        @click="showContractorMypage">
        建設業者マイページ
      </button>
    </div>
  </div>
</template>

<script>
import MenuList from '../../molecules/sideNav/menuLists'
import WholesalerMenuList from '../../molecules/sideNav/wholesalerMenuLists'
import ContractorMenuList from '../../molecules/sideNav/contractorMenuLists'
export default {
  components: {
    MenuList,
    WholesalerMenuList,
    ContractorMenuList
  },
  computed: {
    currentUser() {
      return this.$store.state.wholesaler.data
    },
    routeMatchWholesaler() {
      return location.pathname.match(/^\/wholesaler/)
    },
    routeMatchContractor() {
      return location.pathname.match(/^\/contractor/)
    },

  },
  methods: {
    logout() {
      this.$store.dispatch('wholesaler/logout')
      this.$router.push('wholesaler/login')
    },
    showMypage(){
      this.$router.push({ name: 'items'})
    },
    showContractorMypage(){
      this.$router.push({ name: 'orders'})
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
