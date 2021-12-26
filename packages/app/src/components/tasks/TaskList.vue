
<script setup lang="ts">
import { computed } from 'vue';
import { Task } from '@jikaheimo/shared';
import TaskItem from './TaskItem.vue';

const props = withDefaults(defineProps<{
  tasks: Task[]
  loading?: boolean
}>(), {
  loading: false
})

const emit = defineEmits<{
  (event: 'archive-task', taskId: string): void,
  (event: 'pin-task', taskId: string): void
}>()

const isEmpty = computed(() => props.tasks.length === 0)

const onArchiveTask = (taskId: string) => {
  emit('archive-task', taskId)
}

const onPinTask = (taskId: string) => {
  emit('pin-task', taskId)
}

</script>

<template>
  <template v-if="loading">loading</template>
  <template v-else-if="isEmpty">empty</template>
  <div v-else class="shadow-md">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      class="hover:bg-blue-200"
      :task="task"
      @archive-task="onArchiveTask"
      @pin-task="onPinTask"
    />
  </div>
</template>
