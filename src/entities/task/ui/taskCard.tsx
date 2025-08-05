import React from "react";
import { Draggable } from "@hello-pangea/dnd";

import { DeleteTaskButton } from "@/features/delete-task";

import { Card, Title } from "./taskCard.styles";

import type { Task } from "@/shared/model/kanban/kanban.ts";

interface TaskCardProps {
  task: Task;
  index: number;
  onClick?: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onClick, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={onClick}
        >
          <Title>{task.title}</Title>
          <DeleteTaskButton taskId={task.id}/>
          {/*{task.description && <Description>{task.description}</Description>}*/}
        </Card>
      )}
    </Draggable>
  );
};
