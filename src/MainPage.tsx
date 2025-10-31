import { useState } from "react";
import TasksList from "./components/TasksList";
import TaskDetails from "./components/TaskDetails";

export function MainPage() {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [boardId, setBoardId] = useState<string | null>(null);

  return (
    <div className="flex gap-8">
      <TasksList
        selectedTaskId={selectedTaskId}
        setSelectedTaskId={setSelectedTaskId}
        setBoardId={setBoardId}
      />
      <TaskDetails selectedTaskId={selectedTaskId} boardId={boardId} />
    </div>
  );
}

