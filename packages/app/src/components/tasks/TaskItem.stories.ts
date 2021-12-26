import { Task, TaskState } from '@jikaheimo/shared';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/vue3';
import TaskItem from './TaskItem.vue';

export default {
  component: TaskItem,
  excludeStories: /.*Data$/,
  title: 'Tasks/TaskItem',

  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

const Template: Story<{ task?: Task }> = (args) => ({
  components: { TaskItem },

  setup() {
    return { args, ...actionsData };
  },

  template: '<TaskItem v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: TaskState.Inbox,
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...(Default.args.task as Task),
    state: TaskState.Pinned,
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...(Default.args.task as Task),
    state: TaskState.Archived,
  },
};
