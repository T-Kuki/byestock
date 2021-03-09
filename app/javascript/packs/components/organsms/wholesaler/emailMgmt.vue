<template>
  <div class="items">
    <div class="l-wrapper">
      <h2>メールアドレス管理</h2>
      <div class="form_block">
        <label class="form_label">
          現在のメールアドレス
        </label>
        <h4>test@test.co.jp</h4>
      </div>
      <form @submit.prevent="login()">
        <InputForm
          v-model="wholesaler.email"
          label="メールアドレス"
          placeholder="メールアドレス"
          name="email"
          type="text" />
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
h4{
  margin: 10px 0;
}
label{
  color: #2699FB;
}
.form_block{
  text-align: center;
  display: block;
  margin: auto;
}
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
  width: 1200px;
  margin: 20px;
  justify-content: space-around;

}
.l-wrapper {
  margin: 1rem auto;
  width: 100%;
}
</style>