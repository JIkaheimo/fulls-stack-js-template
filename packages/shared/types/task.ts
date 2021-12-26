export enum TaskState {
  Inbox,
  Pinned,
  Archived,
}

export interface Task {
  id: string;
  state: TaskState;
  title: string;
}
