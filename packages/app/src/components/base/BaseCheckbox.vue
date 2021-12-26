<script setup lang="ts">
defineProps<{ id: string, label?: string }>()
</script>

<script lang="ts">
export default {
  name: 'BaseCheckbox',
  inheritAttrs: false
}
</script>

<template>
  <label class="inline-flex items-center" :for="id">
    <input
      v-bind="$attrs"
      :id="id"
      type="checkbox"
      class="form-checkbox border rounded text-indigo-600"
    />
    {{ label || null }}
  </label>
</template>