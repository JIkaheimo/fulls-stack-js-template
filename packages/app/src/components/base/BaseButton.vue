<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{ name: string }>();
</script>

<template>
  <button className="btn">{{ name }}</button>
</template>

<style></style>
