import { createStore } from 'vuex';
import { TasksState } from './modules/tasks';

export interface RootState {
  tasks: TasksState;
}

export default createStore<RootState>({});
