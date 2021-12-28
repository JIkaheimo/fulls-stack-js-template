import { Story } from '@storybook/vue3';
import { Task, TaskState } from '@jikaheimo/shared';
import PureTaskList from './PureTaskList.vue';

import * as TaskStories from './TaskItem.stories';

export default {
  component: PureTaskList,
  title: 'Tasks/PureTaskList',
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};

const Template: Story<{ tasks: Task[]; loading?: boolean }> = (args) => ({
  components: { PureTaskList },

  setup() {
    return { args, ...TaskStories.actionsData };
  },

  template: '<PureTaskList v-bind="args" />',
});

const tasks: Task[] = Array.from({ length: 6 }, (_, i) => ({
  id: `${i}`,
  title: `Task ${i}`,
  state: TaskState.Inbox,
}));

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  tasks,
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [...tasks.slice(0, 5), { id: '6', title: 'Task 6 (pinned)', state: TaskState.Pinned }],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
