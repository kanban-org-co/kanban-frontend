import { makeAutoObservable } from "mobx";

import { mockBoard } from "./kanban.mock";

import type { KanbanBoard } from "./kanban";

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
}

export const kanbanStore = new KanbanStore();
