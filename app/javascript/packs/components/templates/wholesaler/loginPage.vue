<template>
  <div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../../organsms/wholesaler/loginForm'

export default {
  components: {
    LoginForm,
  }
}
</script>

<style scoped>
.login_page{
  height: 100%;
  text-align: center;
  background-image: url("../../../images/airbnbimg.jpg");
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