import type { Task } from "../types/type";

export type Props = {
  selectedTaskId: string | null;
  boardId: string | null;
};

export type TaskDetailsData = {
  data: Task;
};

export const getTask = async (selectedTaskId: string, boardId: string) : Promise<TaskDetailsData> => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API}/boards/${boardId}/tasks/${selectedTaskId}`,
    {
      headers: { "api-key": import.meta.env.VITE_APP_KEY },
    }
  );
  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  const data :TaskDetailsData = await response.json();
  return data;
};

 export type GlobalTaskListResponse = {
    data: Task[]
}

export const getTasks : () => Promise<GlobalTaskListResponse> = async(): Promise<GlobalTaskListResponse> => {
     const response = await fetch(
          `${import.meta.env.VITE_APP_API}/boards/tasks`,
          {
            headers: {
              "api-key": import.meta.env.VITE_APP_KEY,
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const data :GlobalTaskListResponse = await response.json();
        return data
}