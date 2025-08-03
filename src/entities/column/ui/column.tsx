import React from "react";
import { Droppable } from "@hello-pangea/dnd";

import { TaskCard } from "@/entities/task";
import { InlineAddTask } from "@/features/add-task";

import {
  ColumnWrapper,
  ColumnTitle,
  TaskList
} from "./column.styles";

import type { Column as ColumnType, Task as TaskType } from "@/shared/model/kanban";

interface ColumnProps {
  column: ColumnType;
  tasks: TaskType[];
}

export const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
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
              <TaskCard key={task.id} task={task} index={index}/>
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      <InlineAddTask columnId={column.id}/>
    </ColumnWrapper>
  );
};
