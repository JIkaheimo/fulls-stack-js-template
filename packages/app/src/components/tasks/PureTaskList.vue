
<script setup lang="ts">
import { computed } from 'vue';
import { Task, TaskState } from '@jikaheimo/shared';
import { ContentLoader } from 'vue-content-loader'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
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

const tasksInOrder = computed(() => [...props.tasks].filter(({state}) => state !== TaskState.Archived).sort((a, b) => b.state - a.state))

</script>

<script lang="ts">
export default {
  name: 'PureTaskList'
}
</script>

<template>
  <div class="shadow-md w-100">
    <template v-if="loading">
      <div v-for="n in 6" :key="n" class="shadow-sm p-3">
        <content-loader
          :height="40"
          width="100%"
          :speed="2"
          primary-color="#f3f3f3"
          secondary-color="#ecebeb"
        >
          <circle cx="15" cy="20" r="15" />
          <rect x="45" y="5" width="100%" height="40" />
        </content-loader>
      </div>
    </template>

    <div v-else-if="isEmpty" class="flex flex-col space-y-3 justify-center items-center p-5">
      <FontAwesomeIcon size="2x" class="text-green-600" :icon="faCheck" />
      <p class="font-bold">You have no tasks</p>
      <p class>Sit back and relax</p>
    </div>

    <TaskItem
      v-for="task in tasksInOrder"
      v-else
      :key="task.id"
      class="hover:bg-blue-200"
      :task="task"
      @archive-task="onArchiveTask"
      @pin-task="onPinTask"
    />
  </div>
</template>
