<template>
  <button type="button"></button>
</template>

<script lang="ts">
export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator(value: string) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
      default: 'asd',
    },
  },

  emits: ['click'],
};
</script>
