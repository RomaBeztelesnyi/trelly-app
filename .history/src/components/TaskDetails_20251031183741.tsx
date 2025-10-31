import {useState, useEffect} from "react"
import type {Task} from '../types/type'


function TaskDetails({checkTask} :{checkTask: string | null}) {
  const [selectedCheckTask, setSelectedCheckTask] = useState<Task| null>(null);
  // const selectedCheckTask = '4f310604-82b5-4afd-b9a4-ddf12dfac0a3'
  // const boardId = '13923117-72de-4788-a7f0-4c42f162a5ab'
  useEffect(() => {
    if (!checkTask) {
      return;
    }
    const fetchTaskDetails = async () => {
      try {
        const response = await fetch(
          `https://trelly.it-incubator.app/api/1.0/boards/{boardId}/tasks/${checkTask}`,

          {
            headers: { "api-key": "a2d0a6ff-c816-4059-a6b7-b1def8bcdabd" },
          }
        );
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const data = await response.json();
        setSelectedCheckTask(data.data);
      } catch (error) {
        console.error("error fetching tasks:", error);
      }
    };
    fetchTaskDetails();
  }, [checkTask]);


  return (
    <div>
      
      <div className="flex justify-start gap-6 mt-6">
        
        <div className="border-2 rounded-xl w-3xs h-60 p-4" >
          <h1 className="font-bold">Details</h1>
          {!checkTask && "Task is not defined"}
          {checkTask && !selectedCheckTask && "Loading..."}
          {selectedCheckTask && (
            <ul className=" flex flex-col gap-2 pl-8 list-disc">
              <li>
                <b>Title:</b> {selectedCheckTask.attributes.title}
              </li>
              <li>
                <b>BoardTitle:</b> {selectedCheckTask.attributes.boardTitle}
              </li>
              <li>
                <b>Description:</b> {selectedCheckTask.attributes.description}
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
