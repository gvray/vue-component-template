<template>
  <button
    :class="[
      'vc-button',
      `vc-button--${type}`,
      `vc-button--${size}`,
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick"
  >
    <span v-if="loading" class="vc-button__loading-icon">⏳</span>
    <span v-if="icon && !loading" class="vc-button__icon">{{ icon }}</span>
    <span v-if="$slots.default" class="vc-button__text">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { buttonProps, buttonEmits } from './button'

defineOptions({
  name: 'VcButton',
})

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return
  emit('click', event)
}
</script>
