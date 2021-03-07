<template>
  <div>
    <router-link
      v-for="item in items"
      :key="item.title"
      class="menu_items"
      :to="{ name: item.link }">
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      items: [
        { title: '商品管理', link: 'items' },
        { title: '受注管理', link: 'received_order' },
        { title: '会員情報'},
        { title: '基本情報', link: 'profile' },
        { title: 'メールアドレス', link: 'email' },
        { title: 'パスワード', link: 'password' },
      ],
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.data
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'login'})
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
