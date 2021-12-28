import { mount } from '@vue/test-utils';

import { TaskState } from '@jikaheimo/shared';
import { WithPinnedTasks } from './PureTaskList.stories';
import TaskItem from './TaskItem.vue';
import PureTaskList from './PureTaskList.vue';

describe('PureTaskList.vue', () => {
  it('renders pinned tasks at the start of the list', () => {
    const wrapper = mount(PureTaskList, {
      props: WithPinnedTasks.args,
    } as any);
    const firstPinnedTask = wrapper.findComponent(TaskItem);
    expect(firstPinnedTask.props().task.state).toEqual(TaskState.Pinned);
  });
});
