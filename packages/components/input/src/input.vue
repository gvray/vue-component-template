<template>
  <div
    :class="[
      'vc-input',
      `vc-input--${size}`,
      {
        'is-disabled': disabled,
        'is-focused': focused,
      },
    ]"
  >
    <input
      ref="inputRef"
      :class="['vc-input__inner']"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { inputProps, inputEmits } from './input'

defineOptions({
  name: 'VcInput',
})

const props = defineProps(inputProps)

const emit = defineEmits(inputEmits)

const inputRef = ref<HTMLInputElement>()
const focused = ref(false)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('input', target.value)
}

const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  focused.value = false
  emit('blur', event)
}
</script>
