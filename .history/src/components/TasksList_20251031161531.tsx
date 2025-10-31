import { useEffect, useState } from "react";
import ClearButton from "./Button";
import type { Task } from "../types/type";
import TaskDetails from "./TaskDetails";

const color: string[] = ["#ffffff", "#ffd7b5", "#ffb38a", "#ff9248", "#ff6700"];

const statusTask: Record<number, boolean> = {
  0: true,
  2: false,
};

function TasksList() {
  const [checkTask, setCheckTask] = useState<string | null>(null);
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [boardId, setBoardId] = useState<string | null>(null)
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
        setTaskList(data.data);
      } catch (error) {
        console.error("error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);


  useEffect(() => {
    const fetchBoard = async () => {
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
        setTaskList(data.data);
      } catch (error) {
        console.error("error fetching tasks:", error);
      }
    };

    fetchBoard();
  }, [checkTask]);

  function handleClick(id: string) {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
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
  }

  return (
    <>
      <div className="p-4">
        <ClearButton setCheckTask={setCheckTask} />
        <ul className="flex flex-col gap-4 w-1xl">
          {taskList.map((task) => (
            <li
              key={task.id}
              className="border-4 p-2 rounded shadow-sm"
              style={{
                background: color[task.attributes.priority],
                border: task.id === checkTask ? "3px solid black" : "none",
              }}
            >
              <h1
                className="font-bold cursor-pointer"
                onClick={() => setCheckTask(task.id)}
              >
                Header:{" "}
                <span
                  style={{
                    textDecoration: statusTask[task.attributes.status]
                      ? "line-through"
                      : "none",
                  }}
                >
                  {task.attributes.title}
                </span>
              </h1>
              <p>
                Status
                <input
                  type="checkbox"
                  checked={statusTask[task.attributes.status]}
                  onChange={() => handleClick(task.id)}
                  className="ml-2"
                />
              </p>
              <p>
                <b>Date:</b>{" "}
                {new Date(task.attributes.addedAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <TaskDetails checkTask={checkTask} />
    </>
  );
}

export default TasksList;
