import React, { type ReactNode } from "react";
import { Droppable } from "@hello-pangea/dnd";

import { TaskCard } from "@/entities/task";

import {
  ColumnWrapper,
  ColumnTitle,
  TaskList
} from "./column.styles";

import type { Column as ColumnType, Task as TaskType } from "@/shared/model/kanban";

interface ColumnProps {
  column: ColumnType;
  tasks: TaskType[];
  renderAddTask: ReactNode;
}

export const Column: React.FC<ColumnProps> = ({ column, tasks, renderAddTask }) => {
  return (
    <ColumnWrapper>
      <ColumnTitle>{column.title}</ColumnTitle>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      {renderAddTask}
    </ColumnWrapper>
  );
};
