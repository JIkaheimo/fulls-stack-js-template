<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <button className="btn">{{ name }}</button>
</template>

<style></style>
