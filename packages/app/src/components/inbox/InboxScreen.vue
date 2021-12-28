<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import PureInboxScreen from './PureInboxScreen.vue';

const store = useStore();

const error = computed(() => store.state.error)
</script>

<script lang="ts">
export default {
  name: 'InboxScreen'
}
</script>

<template>
  <PureInboxScreen :error="error" />
</template>