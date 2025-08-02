import React, { useState } from "react";
import {
  DragDropContext, Draggable, Droppable
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
    const { source, destination, draggableId, type } = result;

    if (!destination) return;

    if (type === "column") {
      const newOrder = [...board.columnOrder];
      newOrder.splice(source.index, 1);
      newOrder.splice(destination.index, 0, draggableId);

      setBoard((prev) => ({
        ...prev,
        columnOrder: newOrder,
      }));
      return;
    }

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
      <Droppable
        droppableId="board"
        direction="horizontal"
        type="column"
      >
        {(droppableProvided) => (
          <BoardWrapper
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {board.columnOrder.map((columnId, index) => {
              const column = board.columns[columnId];
              const tasks = column.taskIds.map((taskId) => board.tasks[taskId]);

              return (
                <Draggable draggableId={column.id} key={column.id} index={index}>
                  {(draggableProvided) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <Column column={column} tasks={tasks} />
                    </div>
                  )}
                </Draggable>
              );
            })}
          </BoardWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};
