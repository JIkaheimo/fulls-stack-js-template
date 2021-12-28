import { Task, TaskState } from '@jikaheimo/shared';
import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';

export interface TasksState {
  tasks: Task[];
}

const getTaskWithId = (tasks: Task[], id: Task['id']): Task =>
  tasks.find((task) => task.id === id) as Task;

@Module({ name: 'tasks', store, dynamic: true })
export class Tasks extends VuexModule implements TasksState {
  tasks = [
    { id: '1', title: 'Something', state: TaskState.Inbox },
    { id: '2', title: 'Something more', state: TaskState.Inbox },
    { id: '3', title: 'Something else', state: TaskState.Inbox },
    { id: '4', title: 'Something again', state: TaskState.Inbox },
  ];

  @Mutation
  ARCHIVE_TASK(id: Task['id']) {
    getTaskWithId(this.tasks, id).state = TaskState.Archived;
  }

  @Mutation
  PIN_TASK(id: Task['id']) {
    getTaskWithId(this.tasks, id).state = TaskState.Pinned;
  }

  @Action({ commit: 'ARCHIVE_TASK' })
  archiveTask(id: Task['id']) {
    return id;
  }

  @Action({ commit: 'PIN_TASK' })
  pinTask(id: Task['id']) {
    return id;
  }
}

export const TasksModule = getModule(Tasks, store);
