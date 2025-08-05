import { type FC, useState } from "react";
import { FiPlus } from "react-icons/fi";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

import { Container } from "./inlineAddTask.styles.ts";
import { useAddTask } from "../../model/useAddTask.ts";

import type { ColumnId } from "@/shared/model/kanban";

interface InlineAddTaskProps {
  columnId: ColumnId;
}

const InlineAddTask: FC<InlineAddTaskProps> = ({ columnId }) => {
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const { addTask } = useAddTask();

  const handleSave = () => {
    if (!title.trim()) return;
    addTask(columnId, title);
    setTitle("");
    setEditing(false);
  };

  if (isEditing) {
    return (
      <Container>
        <Input
          autoFocus
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button onClick={handleSave}>Сохранить задачу</Button>
      </Container>
    );
  }

  return (
    <Button icon={<FiPlus/>} onClick={() => setEditing(true)}>Добавить задачу</Button>
  );
};

export default InlineAddTask;
