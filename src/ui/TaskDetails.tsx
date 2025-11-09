import { useState, useEffect } from "react";
import type { Task } from "../types/type";
import { getTask, type TaskDetailsData } from "../dal/api";
type Props = {
  selectedTaskId: string | null;
  boardId: string | null;
};

function TaskDetails({ selectedTaskId, boardId }: Props) {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    if (!selectedTaskId || !boardId) {
      setSelectedTask(null);
      return;
    }

    const fetchTaskDetails = async () => {
      try {
        const data: TaskDetailsData = await getTask(selectedTaskId, boardId);
        setSelectedTask(data.data);
      } catch (error) {
        console.error("error fetching tasks:", error);
      }
    };
    fetchTaskDetails();
  }, [selectedTaskId, boardId]);

  return (
    <div className="flex justify-start gap-6 mt-6">
      <div className="border-2 rounded-xl w-3xs h-60 p-4">
        <h1 className="font-bold">Details</h1>
        {!selectedTaskId && "Task is not selected"}
        {selectedTaskId && !selectedTask && "Loading..."}
        {selectedTask && (
          <ul className="flex flex-col gap-2 pl-8 list-disc">
            <li>
              <b>Title:</b> {selectedTask.attributes.title}
            </li>
            <li>
              <b>BoardTitle:</b> {selectedTask.attributes.boardTitle}
            </li>
            <li>
              <b>Description:</b>{" "}
              {selectedTask.attributes.description || "no description"}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default TaskDetails;
