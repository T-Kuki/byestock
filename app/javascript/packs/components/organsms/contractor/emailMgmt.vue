<template>
  <div class="items">
    <div class="l-wrapper">
      <h2>メールアドレス管理</h2>
      <div class="form_block">
        <label class="form_label">
          現在のメールアドレス
        </label>
        <h4>test@email.com</h4>
      </div>
      <form @submit.prevent="update()">
        <InputForm
          label="メールアドレス"
          placeholder="メールアドレス"
          name="email"
          type="text" />
        <div>
          <Button
            class="info"
            type="submit">
            更新する
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputForm from '../../molecules/input/inputForm'
import Button from '../../atoms/button'
export default {
  components: {
    InputForm,
    Button
  },
  data: function() {
    return {
      contractor: {},
      name: '',
    }
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
  width: 1100px;
  margin: 20px;
  justify-content: space-around;

}
.l-wrapper {
  margin: 1rem auto;
  width: 100%;
}
</style>