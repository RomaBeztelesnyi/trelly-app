import {useState, useEffect} from "react"
import type { Task } from "../types/type";
import { getTasks, type GlobalTaskListResponse } from "../dal/api";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() : void => {
    const fetchTasks = async () :Promise<void> => {
      try {
        const data: GlobalTaskListResponse = await getTasks();
        setTasks(data.data);
      } catch (error) {
        console.error("error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);
  return {tasks, setTasks}
}