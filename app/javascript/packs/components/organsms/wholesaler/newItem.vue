<template>
  <div class="items">
    <div class="l-wrapper">
      <h2>商品登録</h2>
      <form @submit.prevent="createItems()">
        <InputForm
          v-model="items.maker"
          label="メーカー"
          placeholder="メーカー"
          name="text"
          type="text"
          width="long" />
        <InputForm
          v-model="items.name"
          label="商品名"
          placeholder="商品名"
          name="text"
          type="text"
          width="long" />
        <InputForm
          v-model="items.quantity"
          label="数量"
          placeholder="数量"
          name="text"
          type="text"
          width="long" />
        <InputForm
          v-model="items.condition"
          label="状態"
          placeholder="状態"
          name="text"
          type="text"
          width="long" />
        <SelectForm
          v-model="items.genre"
          label="ジャンル"
          :options="genres"
          placeholder="ジャンル"
          name="text"
          border="noneBorder"
          width="long" />
        <InputForm
          v-model="items.price"
          label="価格"
          placeholder="価格"
          name="text"
          type="text"
          width="long" />
        <TextareaForm
          v-model="items.detail"
          label="詳細"
          placeholder="詳細"
          name="text"
          type="textarea"
          width="long" />
        <InputForm
          v-model="items.image"
          label="商品画像"
          placeholder="電話番号"
          name="text"
          type="file"
          width="long"
          border="noneBorder" />
        <div>
          <Button
            @buttonClick="backItems">
            戻る
          </Button>
          <Button
            class="info"
            type="submit">
            登録
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputForm from '../../molecules/input/inputForm'
import TextareaForm from '../../molecules/input/textareaForm'
import SelectForm from '../../molecules/input/selectForm'
import Button from '../../atoms/button'
import axios from 'axios'
export default {
  components: {
    InputForm,
    TextareaForm,
    SelectForm,
    Button
  },
  data: function() {
    return {
      items: {
        maker: '',
        name: '',
        quantity: '',
        condition: '',
        price: '',
        detail: '',
        genre: ''
      },
      genres: ['床材', '建具', '造作材'],
      errors: ''
    }
  },
  computed: {
    currentWholesaler() {
      return this.$store.state.wholesaler.data
    }
  },
  mounted () {
    axios
      .get(`/api/v1/wholesalers/${this.currentWholesaler.id}.json`, {headers: this.$store.state.wholesaler.headers, data: {} })
      .then(response => this.wholesaler = response.data)
  },
  methods: {
    backItems() {
      this.$router.push({ name: 'items'})
    },
    createItems(){
      axios
        .post(`/api/v1/wholesalers/${this.currentWholesaler.id}/items`, this.items, { headers: this.$store.state.wholesaler.headers })
        .then(response => {
          let e = response.data
          this.$router.push({ name: 'items', params: { id: e.id } })
        })
        .catch(error => {
          console.error(error)
          if (error.response.data && error.response.data.errors) {
            this.errors = error.response.data.errors
          }
        })
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