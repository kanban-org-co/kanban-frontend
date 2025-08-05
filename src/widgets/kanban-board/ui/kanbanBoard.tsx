import React from "react";
import {
  DragDropContext, Draggable, Droppable
} from "@hello-pangea/dnd";
import { observer } from "mobx-react-lite";

import { Column } from "@/entities/column";
import { kanbanStore } from "@/shared/model/kanban";
import { InlineAddTask } from "@/features/add-task";

import { BoardWrapper } from "./kanbanBoard.styles";

import type { DropResult } from "@hello-pangea/dnd";

export const KanbanBoard: React.FC = observer(() => {
  const { board, moveTask, moveColumn } = kanbanStore;

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId, type } = result;

    if (!destination) return;

    if (type === "column") {
      moveColumn(source.index, destination.index);
      return;
    }

    moveTask(draggableId, source.droppableId, destination.droppableId, destination.index);
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
                      <Column
                        column={column}
                        tasks={tasks}
                        renderAddTask={<InlineAddTask columnId={column.id} />}
                      />
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
});
