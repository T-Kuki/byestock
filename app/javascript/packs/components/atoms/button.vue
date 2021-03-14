<template>
  <button
    class="button"
    :class="[type, size, float]"
    @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    float: {
      type: String,
      default: ''
    },
  },
  methods: {
    click() {
      this.$emit('buttonClick')
    }
  }
}
</script>

<style>
.button {
  background: #f6f6f6;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  color: #666;
  cursor: pointer;
  font-size: 14px;
  margin: 10px 10px;
  outline: none;
  padding: 10px 20px;
  transition: opacity 0.4s;
}
.button:hover {
  opacity: 0.8;
}
.button:active {
  transform: translateY(3px);
  box-shadow: none;
}
.button.primary {
  background: #2980b9;
  color: #ffffff;
}
.button.success {
  background: #2ecc71;
  color: #ffffff;
}
.button.info {
  background: #3498db;
  color: #ffffff;
}
.button.warning {
  background: #f1c40f;
  color: #ffffff;
}
.button.danger {
  background: #e74c3c;
  color: #ffffff;
}
.button.small {
  font-size: 10px;
  padding: 5px 10px;
}
.button.large {
  font-size: 18px;
  padding: 15px 30px;
}
.button.right {
  float: right;
}
.button.left {
  float: left;
}
</style>

