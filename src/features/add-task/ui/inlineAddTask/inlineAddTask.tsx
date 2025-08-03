import { type FC, useState } from "react";
import { FiPlus } from "react-icons/fi";

import { Button } from "@/shared/ui/button";

import { Container } from "./inlineAddTask.styles.ts";
import { useAddTask } from "../../model/useAddTask.ts";

interface InlineAddTaskProps {
  columnId: string;
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
        <input
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
