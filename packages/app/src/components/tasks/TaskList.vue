
<script lang="ts" setup>

import { computed } from 'vue';
import { TasksModule } from '@/store/modules/tasks';

import PureTaskList from './PureTaskList.vue';

const tasks = computed(() => TasksModule.tasks)

const { archiveTask, pinTask } = TasksModule

</script>

<script lang="ts">
export default {
  name: 'TaskList'
}
</script>

<template>
  <PureTaskList :tasks="tasks" @archive-task="archiveTask" @pin-task="pinTask" />
</template>
