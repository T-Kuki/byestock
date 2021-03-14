<template>
  <div class="items">
    <div class="l-wrapper">
      <h2>基本情報</h2>
      <form @submit.prevent="update()">
        <InputForm
          v-model="wholesaler.company_name"
          label="会社名"
          placeholder="会社名"
          name="text"
          type="text"
          width="long" />
        <InputForm
          v-model="wholesaler.president_name"
          label="代表者名"
          placeholder="代表者名"
          name="text"
          type="text"
          width="long" />
        <TextareaForm
          v-model="wholesaler.industry"
          label="業種"
          placeholder="業種"
          name="text"
          type="textarea"
          width="long" />
        <InputForm
          v-model="wholesaler.post_code"
          label="都道府県"
          placeholder="都道府県"
          name="text"
          type="text"
          width="long" />
        <InputForm
          v-model="wholesaler.city"
          label="市区町村"
          placeholder="市区町村"
          name="text"
          type="text"
          width="long" />
        <InputForm
          v-model="wholesaler.address"
          label="住所"
          placeholder="住所"
          name="text"
          type="text"
          width="long" />
        <InputForm
          v-model="wholesaler.phone_number"
          label="電話番号"
          placeholder="電話番号"
          name="text"
          type="text"
          width="long" />
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
import TextareaForm from '../../molecules/input/textareaForm'
import axios from 'axios'
export default {
  components: {
    InputForm,
    TextareaForm
  },
  data: function() {
    return {
      wholesaler: {},
      name: '',
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
      this.$store.dispatch('wholesaler/updateProfile', this.wholesaler)
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