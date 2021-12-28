<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSadCry } from '@fortawesome/free-solid-svg-icons'
import { TaskList } from '@/components/tasks';

withDefaults(defineProps<{ error?: boolean }>(), { error: false })

</script>

<script lang="ts">
export default {
  name: 'PureInboxScreen',
}
</script>

<template>
  <div v-if="error" class="flex flex-col justify-center items-center w-100">
    <FontAwesomeIcon :icon="faSadCry" />
    <div>Oh no!</div>
    <div>Something went wrong</div>
  </div>
  <div v-else class="shadow-lg">
    <nav class="bg-blue-600 text-white px-3 py-5 text-lg">
      <h1>Taskbox</h1>
    </nav>
    <TaskList />
  </div>
</template>