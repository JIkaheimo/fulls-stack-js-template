<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons'

import { Task, TaskState } from '@jikaheimo/shared';
import { computed } from 'vue';
import { BaseCheckbox, BaseInput } from '@/components/base';

const props = defineProps<{ task: Task }>();

const task = computed(() => props.task)

const emit = defineEmits<{
  (event: 'archive-task', id: string): void,
  (event: 'pin-task', id: string): void
}>()

const isPinned = computed(() => task.value.state === TaskState.Pinned)

const isChecked = computed(() => task.value.state === TaskState.Archived)

const archiveTask = () => emit('archive-task', task.value.id)

const pinTask = () => emit('pin-task', task.value.id)
</script>

<template>
  <div class="flex flex-row items-center space-x-4 w-100 justify-between shadow-sm p-3">
    <div class="flex flex-row items-center space-x-2">
      <BaseCheckbox
        v-if="!isChecked"
        :id="`task-${task.id}-checked`"
        class="border-cyan-600"
        :checked="isChecked"
        disabled
        name="checked"
      />
      <FontAwesomeIcon
        v-else
        class="text-green-500"
        aria-hidden="true"
        :icon="faCheck"
        @click="archiveTask"
      />
      <BaseInput
        :id="`task-${task.id}-title`"
        :value="task.title"
        readonly
        class="bg-inherit"
        placeholder="Input title"
      />
    </div>

    <button v-if="!isChecked" @click="pinTask">
      <FontAwesomeIcon
        :class="{
          'text-yellow-500': isPinned,
          'text-gray-200': !isPinned
        }"
        aria-hidden="true"
        :icon="faStar"
      />
    </button>
  </div>
</template>

