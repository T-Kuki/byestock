<template>
  <div class="items">
    <div class="l-wrapper">
      <h2>パスワード管理</h2>
      <form @submit.prevent="update()">
        <!--<InputForm
          v-model="currentPassword"
          label="現在のパスワード"
          placeholder="現在のパスワード"
          name="current_password"
          type="password" /> -->
        <InputForm
          v-model="password"
          label="新しいパスワード"
          placeholder="新しいパスワード"
          name="password"
          type="password" />
        <InputForm
          v-model="passwordConfirmation"
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
      //currentPassword: '',
      password: '',
      passwordConfirmation: ''
    }
  },
  computed: {
    currentWholesaler() {
      return this.$store.state.wholesaler.data
    }
  },
  mounted () {
    this.getProfile().then(result => {
      this.wholesaler = result
    })
  },
  methods: {
    backItems() {
      this.$router.push({ name: 'items'})
    },
    getProfile: async function() {
      const res = await axios .get(`/api/v1/wholesalers/${this.currentWholesaler.id}.json`, {headers: this.$store.state.wholesaler.headers, data: {} })
      return res.data.wholesaler
    },
    update(){
      this.$store.dispatch('wholesaler/updatePassword', {password: this.password, password_confirmation: this.passwordConfirmation})
    }
  }
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