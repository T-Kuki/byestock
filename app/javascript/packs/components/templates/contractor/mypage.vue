<template>
  <div class="wrapper">
    <div class="main">
      <Navbar />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '../../organsms/sideNav/navbar'
export default {
  components: {
    Navbar,
  },
}
</script>

<style scoped lang="sass">
.wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
}
.main {
    background: pink;
    width: 60%;
    margin-right: 20%;
}
</style>