import { useEffect, useState } from "react";
import ClearButton from "./Button";
import type { Task } from "../types/type";
import TaskItem from "./TaskItem";
type Props = {
  selectedTaskId: string | null;
  setSelectedTaskId: (id: string | null) => void;
  setBoardId: (id: string | null) => void;
};



function TasksList({ selectedTaskId, setSelectedTaskId, setBoardId }: Props) {
   const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://trelly.it-incubator.app/api/1.0/boards/tasks",
          {
            headers: {
              "api-key": "a2d0a6ff-c816-4059-a6b7-b1def8bcdabd",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data.data);
      } catch (error) {
        console.error("error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);


 const handleToggleStatus = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              attributes: {
                ...task.attributes,
                status: task.attributes.status === 0 ? 2 : 0,
              },
            }
          : task
      )
    );
  };

 const handleSelectTask = (id: string, boardId: string) => {
    setSelectedTaskId(id);
    setBoardId(boardId);
  };

  const handleReset = () => {
    setSelectedTaskId(null);
    setBoardId(null);
  };

  return (
    <>
      <div className="p-4">
        <ClearButton onClick={handleReset} />
        <ul className="flex flex-col gap-4 w-1xl">
          {tasks.map((task) => (
            <TaskItem
            key={task.id}
            task={task}
            isSelected={task.id === selectedTaskId}
            onSelect={handleSelectTask}
            onToggleStatus={handleToggleStatus}
          />

          ))}
        </ul>
      </div>
      {/* <TaskDetails checkTask={checkTask} /> */}
    </>
  );
}

export default TasksList;
