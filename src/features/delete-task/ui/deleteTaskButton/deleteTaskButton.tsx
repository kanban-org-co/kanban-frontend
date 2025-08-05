import { FaTrash } from "react-icons/fa";

import { Button } from "@/shared/ui/button";
import { useDeleteTask } from "@/features/delete-task/model/useDeleteTask.ts";

import type { FC } from "react";
import type { TaskId } from "@/shared/model/kanban";

interface DeleteTaskButtonProps {
  taskId: TaskId;
}

const DeleteTaskButton: FC<DeleteTaskButtonProps> = ({ taskId }) => {
  const { deleteTask } = useDeleteTask();

  const handleClick = () => {
    deleteTask(taskId);
  };

  return (
    <Button
      icon={<FaTrash/>}
      onClick={handleClick}
      size="small"
      type="text"
    />
  );
};

export default DeleteTaskButton;
