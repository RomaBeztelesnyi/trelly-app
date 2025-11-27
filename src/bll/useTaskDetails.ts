import { useState, useEffect } from "react";
import type { Task } from "../types/type";
import { getTask, type TaskDetailsData } from "../dal/api";

export function useTaskDetails(selectedTaskId: string | null, boardId: string | null) {
    const [taskDetails, setTaskDetails] = useState<Task | null>(null);

  useEffect(() => {
    if (!selectedTaskId || !boardId) {
      setTaskDetails(null);
      return;
    }

    const fetchTaskDetails = async () => {
      try {
        const data: TaskDetailsData = await getTask(selectedTaskId, boardId);
        setTaskDetails(data.data);
      } catch (error) {
        console.error("error fetching tasks:", error);
      }
    };
    fetchTaskDetails();
  }, [selectedTaskId, boardId]);

  return {taskDetails}
}