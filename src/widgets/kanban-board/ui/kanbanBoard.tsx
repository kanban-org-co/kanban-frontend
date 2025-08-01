import React, { useState } from "react";
import {
  DragDropContext
} from "@hello-pangea/dnd";

import { Column } from "@/entities/column";
import { mockBoard } from "@/shared/model/kanban";

import { BoardWrapper } from "./kanbanBoard.styles";

import type {
  DropResult } from "@hello-pangea/dnd";
import type { KanbanBoard as KanbanBoardType } from "@/shared/model/kanban";

export const KanbanBoard: React.FC = () => {
  const [board, setBoard] = useState<KanbanBoardType>(mockBoard);

  // const onBeforeCapture = (before: BeforeCapture) => {
  //   before.
  // }

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    const sourceCol = board.columns[source.droppableId];
    const targetCol = board.columns[destination.droppableId];

    if (sourceCol === targetCol) {
      const newTaskIds = [...sourceCol.taskIds];
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const updatedColumn = { ...sourceCol, taskIds: newTaskIds };

      setBoard((prev) => ({
        ...prev,
        columns: {
          ...prev.columns,
          [updatedColumn.id]: updatedColumn,
        },
      }));
    } else {
      const sourceTaskIds = [...sourceCol.taskIds];
      sourceTaskIds.splice(source.index, 1);
      const targetTaskIds = [...targetCol.taskIds];
      targetTaskIds.splice(destination.index, 0, draggableId);

      setBoard((prev) => ({
        ...prev,
        columns: {
          ...prev.columns,
          [sourceCol.id]: { ...sourceCol, taskIds: sourceTaskIds },
          [targetCol.id]: { ...targetCol, taskIds: targetTaskIds },
        },
      }));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onBeforeCapture={() => {}} >
      <BoardWrapper>
        {board.columnOrder.map((columnId) => {
          const column = board.columns[columnId];
          const tasks = column.taskIds.map((taskId) => board.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </BoardWrapper>
    </DragDropContext>
  );
};
