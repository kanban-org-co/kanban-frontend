import { kanbanStore } from "@/shared/model/kanban";

export const useDeleteTask = () => {
  return {
    deleteTask: kanbanStore.deleteTask,
  };
};
