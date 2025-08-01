export type TaskId = string;
export type ColumnId = string;

export interface Task {
  id: TaskId;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Column {
  id: ColumnId;
  title: string;
  taskIds: TaskId[]; // порядок задач
}

export interface KanbanBoard {
  columns: Record<ColumnId, Column>;
  tasks: Record<TaskId, Task>;
  columnOrder: ColumnId[]; // порядок колонок
}
