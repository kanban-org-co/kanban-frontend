import { kanbanStore } from "@/shared/model/kanban";

export const useAddTask = () => {
  return {
    addTask: kanbanStore.addTask,
  };
};
