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
        { title: '床材', link: 'floors' },
        { title: '建具', link: 'doors' },
        { title: '造作材', link: 'features' },
        { title: '水回り', link: 'wetareas' },
        { title: 'その他', link: 'others' },
      ],
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.wholesaler.data
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('wholesaler/logout')
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
  color: white;
  display: block;
  margin:2rem;
}
.logout_btn{
  margin:1rem auto;
  padding: 0 1,5rem;
}
</style>
