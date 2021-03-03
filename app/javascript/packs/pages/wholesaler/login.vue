<template>
  <div class="login_page">
    <div class="bg-mask">
      <div class="site_name">
        <h1>
          ByeStock
        </h1>
        <p style="font-size: .9rem;">
          在庫販売サービス
        </P>
      </div>
      <Login />
    </div>
  </div>
</template>

<script>
import Login from '../../components/wholesaler/loginForm'

export default {
  components: {
    Login,
  },
  computed: {
    currentUser() {
      return this.$store.state.data
    }
  }
}
</script>

<style scoped>
.login_page{
  height: 100%;
  text-align: center;
  background-image: url("../../images/airbnbimg.jpg");

  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.bg-mask{
  height: 100%;
  background-color:rgba(255,255,255,0.8);
}
.site_name{
  padding: 2rem 0;
  color: #7F7F7F;
}
</style>