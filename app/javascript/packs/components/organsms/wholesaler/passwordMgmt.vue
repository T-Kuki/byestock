<template>
  <div class="items">
    <div class="l-wrapper">
      <h2>パスワード管理</h2>
      <form @submit.prevent="login()">
        <InputForm
          v-model="wholesaler.oldPassword"
          label="現在のパスワード"
          placeholder="現在のパスワード"
          name="oldPassword"
          type="password" />
        <InputForm
          v-model="wholesaler.newPassword"
          label="新しいパスワード"
          placeholder="新しいパスワード"
          name="newPassword"
          type="password" />
        <InputForm
          v-model="wholesaler.passwordComfirm"
          label="パスワード確認用"
          placeholder="パスワード確認用"
          name="passwordComfirm"
          type="password" />
        <div>
          <button
            class="update_button"
            type="submit">
            更新する
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputForm from '../../molecules/input/inputForm'
import axios from 'axios'
export default {
  components: {
    InputForm
  },
  data: function() {
    return {
      wholesaler: {},
      name: '',
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.data
    }
  },
  mounted () {
    axios
      .get(`/api/v1/wholesalers/${this.currentUser.id}.json`, {headers: this.$store.state.headers, data: {} })
      .then(response => this.wholesaler = response.data)
  },
}
</script>

<style scoped>
form{
  text-align: center;
}
.update_button{
  background-color: #656565;
  color: white;
  display: block;
  margin: 2rem auto;
  padding: .2rem 2rem;
}
.items{
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
  margin: 20px;
  justify-content: space-around;

}
.l-wrapper {
  margin: 1rem auto;
  width: 100%;
}
</style>