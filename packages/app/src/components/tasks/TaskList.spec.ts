import { mount } from '@vue/test-utils';

import { TaskState } from '@jikaheimo/shared';
import { WithPinnedTasks } from '@/components/tasks/TaskList.stories';
import { TaskList, TaskItem } from '.';

describe('TaskList.vue', () => {
  it('renders pinned tasks at the start of the list', () => {
    const wrapper = mount(TaskList, {
      props: WithPinnedTasks.args,
    } as any);
    const firstPinnedTask = wrapper.findComponent(TaskItem);
    expect(firstPinnedTask.props().task.state).toEqual(TaskState.Pinned);
  });
});
