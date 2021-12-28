<script setup lang="ts">
import { computed } from 'vue';
import { Task, TaskState } from '@jikaheimo/shared';
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
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
    <div class="flex flex-row items-center space-x-2 flex-1">
      <BaseCheckbox
        v-if="!isChecked"
        :id="`task-${task.id}-checked`"
        class="border-cyan-600"
        :checked="isChecked"
        name="checked"
        @click="archiveTask"
      />
      <FontAwesomeIcon v-else class="text-green-500" aria-hidden="true" :icon="faCheck" />

      <BaseInput
        :id="`task-${task.id}-title`"
        :value="task.title"
        readonly
        :label-classes="['flex-1']"
        class="bg-red-500 w-full"
        placeholder="Input title"
      />
    </div>

    <button v-if="!isChecked" class="p-2" aria-label="Pin Task" @click="pinTask">
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


