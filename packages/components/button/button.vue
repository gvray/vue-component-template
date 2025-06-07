<template>
  <button :class="['g-button', type ? `g-button--${type}` : '']" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'GButton',
})

defineProps({
  type: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  background-color: #ffffff;
  border: 1px solid #dcdfe6;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 4px;
}

.g-button:hover,
.g-button:focus {
  color: #409eff;
  border-color: #409eff;
  background-color: #ecf5ff;
}

.g-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.g-button--primary:hover,
.g-button--primary:focus {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}

.g-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
