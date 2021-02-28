<template>
  <div :class="$style.sidebar">
    <h1 :class="$style.title">
      byestock
    </h1>
    <p> {{ currentUser.email }}</p>
    <ul>
      <li
        v-for="item in items"
        :key="item.title">
        {{ item.title }}
      </li>
    </ul>
    <button @click="logout">
      ログアウト
    </button>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      items: [
        { title: '床材', icon: 'mdi-home-city', link: 'profile' },
        { title: 'お気に入り・閲覧履歴', icon: 'mdi-home-city', link: 'favHist' },
        { title: 'メールアドレス', icon: 'mdi-account', link: 'email' },
        { title: 'パスワード', icon: 'mdi-account', link: 'password' },
        //{ title: '支払い方法', icon: 'mdi-account-group-outline',link: 'siteIndex' },
        { title: 'お問合わせ', icon: 'mdi-account-group-outline', link: 'contact' },
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
    }
  }

}
</script>
<style module>
.title {
    border: dashed 2px #5b8bd0;
    border-radius: 5px;
    padding: 3px;
}
.sidebar{
    height: 100%;
    width: 200px;
    background-color: #fff;
    position: fixed!important;
    z-index: 1;
    overflow: auto;
}
</style>
