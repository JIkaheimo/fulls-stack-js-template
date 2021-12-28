<script setup lang="ts">
defineProps<{ id: string, label?: string, labelClasses?: string[] }>()
</script>

<script lang="ts">
export default {
  name: 'BaseInput',
  inheritAttrs: false
}
</script>

<template>
  <label :class="labelClasses" class="inline-flex items-center" :for="id">
    <input v-bind="$attrs" :id="id" class="form-input" />
    {{ label || null }}
  </label>
</template>