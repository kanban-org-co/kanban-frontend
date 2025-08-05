import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";

import { mockBoard } from "./kanban.mock";

import type { KanbanBoard, Task } from "./kanban";

class KanbanStore {
  board: KanbanBoard = mockBoard;

  constructor() {
    makeAutoObservable(this);
  }

  moveTask = (
    taskId: string,
    sourceColumnId: string,
    targetColumnId: string,
    targetIndex: number
  ) => {
    const source = this.board.columns[sourceColumnId];
    const target = this.board.columns[targetColumnId];

    if (!source || !target) return;

    const newSourceTaskIds = source.taskIds.filter((id) => id !== taskId);
    const newTargetTaskIds = [...target.taskIds];
    newTargetTaskIds.splice(targetIndex, 0, taskId);

    const newBoard: KanbanBoard = {
      ...this.board,
      columns: {
        ...this.board.columns,
        [sourceColumnId]: {
          ...source,
          taskIds: newSourceTaskIds,
        },
        [targetColumnId]: {
          ...target,
          taskIds: newTargetTaskIds,
        },
      },
    };

    this.board = newBoard;
  };

  moveColumn = (fromIndex: number, toIndex: number) => {
    const newOrder = [...this.board.columnOrder];
    const [moved] = newOrder.splice(fromIndex, 1);
    newOrder.splice(toIndex, 0, moved);

    this.board = {
      ...this.board,
      columnOrder: newOrder,
    };
  };

  addTask = (columnId: string, title: string) => {
    const column = this.board.columns[columnId];
    if (!column) return;

    const newTaskId = nanoid();
    const newTask: Task = {
      id: newTaskId,
      title,
      createdAt: new Date().toISOString(),
    };

    this.board = {
      ...this.board,
      tasks: {
        ...this.board.tasks,
        [newTaskId]: newTask,
      },
      columns: {
        ...this.board.columns,
        [columnId]: {
          ...column,
          taskIds: [...column.taskIds, newTaskId],
        },
      },
    };
  };

  deleteTask = (taskId: string) => {
    const newTasks = { ...this.board.tasks };
    delete newTasks[taskId];

    const newColumns = Object.fromEntries(
      Object.entries(this.board.columns).map(([columnId, column]) => [
        columnId,
        {
          ...column,
          taskIds: column.taskIds.filter((id) => id !== taskId),
        },
      ])
    );

    this.board = {
      ...this.board,
      tasks: newTasks,
      columns: newColumns,
    };
  };
}

export const kanbanStore = new KanbanStore();
