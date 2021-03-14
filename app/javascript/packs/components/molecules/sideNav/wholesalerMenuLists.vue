<template>
  <div>
    <router-link
      v-for="item in items"
      :key="item.title"
      class="menu_items"
      :to="{ name: item.link }">
      {{ item.title }}
    </router-link>
    <a class="acordion_top">
      会員管理
    </a>
    <router-link
      v-for="profile in profiles"
      :key="profile.title"
      class="menu_profiles"
      :to="{ name: profile.link }">
      {{ profile.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      items: [
        { title: '商品管理', link: 'items' },
        { title: '受注管理', link: 'receivedOrder' },
      ],
      profiles: [
        { title: '基本情報', link: 'profile' },
        { title: 'メールアドレス', link: 'email' },
        { title: 'パスワード', link: 'password' },
      ]
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.wholesaler.data
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
  font-size: .9rem;
  color: white;
  display: block;
  margin:2rem;
}
.acordion_top{
  color: white;
  font-size: .9rem;
  margin:2rem 2rem 1rem 2rem;
  pointer-events:none;
  display: block;
}
.menu_profiles{
  font-size: .9rem;
  text-align: left;
  color: white;
  display: block;
  margin:2rem 2rem 2rem 9rem;
}
.logout_btn{
  margin:1rem auto;
  padding: 0 1,5rem;
}
</style>
