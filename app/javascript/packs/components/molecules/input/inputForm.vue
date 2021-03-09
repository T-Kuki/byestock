<template>
  <div class="form_block">
    <ValidationProvider
      v-slot="{ errors }"
      rules="required">
      <label class="form_label">
        <span v-if="$slots.label"><slot name="label" /></span>
        <span v-else-if="label">{{ label }}</span>
      </label>
      <input
        :type="type"
        :name="name"
        :value="value"
        :placeholder="placeholder"
        class="form_input"
        @input="updateValue">
      <span class="err_msg">{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationProvider
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    label: { type: String },
    value: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    // eslint-disable-next-line vue/require-default-prop
    placeholder: { type: String, required: false }
  },
  methods: {
    updateValue: function(e) {
      this.$emit('input', e.target.value)
    }
  },
}
</script>
<style scoped>
.login_container{
  margin: 0 auto;
  text-align: center;
}
label, input {
  color: #2699FB;
  display: block;
  margin: auto;
}
.form_block{
  width: 300px;
  position: relative;
  margin: 1rem auto;
}
.form_label{
  float: left;
}
.form_input{
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: button;
  appearance: none;
  border-radius: .3rem;
  width:100%;
  font-size:16px;
  border:1px solid #aaa;
  padding:.5rem;
}
.login_button{
  color: #2699FB;
  margin-top: 2rem;
  padding: .2rem 2rem;
}
.err_msg{
  color: red;
  float: left;
}
.shop_login_link{
  color: #000000;
  border-bottom: 1px solid #000000;
}
</style>