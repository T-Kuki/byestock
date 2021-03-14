<template>
  <div
    class="form_block"
    :class="[width]">
    <ValidationProvider
      v-slot="{ errors }"
      rules="required">
      <label class="form_label">
        <span v-if="$slots.label"><slot name="label" /></span>
        <span v-else-if="label">{{ label }}</span>
      </label><br>
      <v-select
        :name="name"
        :placeholder="placeholder"
        class="form_input"
        :class="[border]"
        :options="options" />
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
    width: { type: String, default: '' },
    border: { type: String, default: '' },
    value: { type: String, required: true },
    options: { type: Array, default: () => {}, },
    type: { type: String, required: true },
    name: { type: String, required: true },
    // eslint-disable-next-line vue/require-default-prop
    placeholder: { type: String, required: false }
  },
  data: function() {
    return { 
      selected: '',
    }
  },
  methods: {
    updateValue: function(e) {
      this.$emit('input', e.target.value)
    }
  },
}
</script>
<style scoped>
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
.form_block.long{
  width: 500px;
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
}
.form_input.noneBorder{
  border:none;
}
.err_msg{
  color: red;
  float: left;
}
</style>