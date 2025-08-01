import type { KanbanBoard, Column, Task } from "./kanban";

const mockTasks: Record<string, Task> = {
  "task-1": {
    id: "task-1",
    title: "Создать структуру проекта",
    description: "Использовать FSD + Vite + Emotion",
    createdAt: new Date().toISOString(),
  },
  "task-2": {
    id: "task-2",
    title: "Стилизовать TaskCard",
    description: "Вынести стили в отдельный файл",
    createdAt: new Date().toISOString(),
  },
  "task-3": {
    id: "task-3",
    title: "Добавить drag-and-drop",
    description: "Выбрать между dnd-kit или react-beautiful-dnd",
    createdAt: new Date().toISOString(),
  },
  "task-4": {
    id: "task-4",
    title: "Подключить Zustand",
    description: "Для локального состояния доски",
    createdAt: new Date().toISOString(),
  },
};

const mockColumns: Record<string, Column> = {
  "column-1": {
    id: "column-1",
    title: "To Do",
    taskIds: ["task-1", "task-2"],
  },
  "column-2": {
    id: "column-2",
    title: "In Progress",
    taskIds: ["task-3"],
  },
  "column-3": {
    id: "column-3",
    title: "Done",
    taskIds: ["task-4"],
  },
};

export const mockBoard: KanbanBoard = {
  tasks: mockTasks,
  columns: mockColumns,
  columnOrder: ["column-1", "column-2", "column-3"],
};
