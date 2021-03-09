<template>
  <div class="items">
    <div class="l-wrapper">
      <h2>基本情報</h2>
      <form @submit.prevent="login()">
        <InputForm
          v-model="wholesaler.name"
          label="会社名"
          placeholder="会社名"
          name="text"
          type="text" />
        <InputForm
          v-model="wholesaler.name"
          label="代表者名"
          placeholder="代表者名"
          name="text"
          type="text" />
        <InputForm
          v-model="wholesaler.name"
          label="都道府県"
          placeholder="都道府県"
          name="text"
          type="text" />
        <InputForm
          v-model="wholesaler.name"
          label="市区町村"
          placeholder="市区町村"
          name="text"
          type="text" />
        <InputForm
          v-model="wholesaler.name"
          label="住所"
          placeholder="住所"
          name="text"
          type="text" />
        <InputForm
          v-model="wholesaler.name"
          label="電話番号"
          placeholder="電話番号"
          name="text"
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