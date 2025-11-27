import { useTaskDetails } from "../bll/useTaskDetails";

type Props = {
  selectedTaskId: string | null;
  boardId: string | null;
};

function TaskDetails({ selectedTaskId, boardId }: Props) {
  const {taskDetails} = useTaskDetails(selectedTaskId,boardId)
  return (
    <div className="flex justify-start gap-6 mt-6">
      <div className="border-2 rounded-xl w-3xs h-60 p-4">
        <h1 className="font-bold">Details</h1>
        {!selectedTaskId && "Task is not selected"}
        {selectedTaskId && !taskDetails && "Loading..."}
        {taskDetails && (
          <ul className="flex flex-col gap-2 pl-8 list-disc">
            <li>
              <b>Title:</b> {taskDetails.attributes.title}
            </li>
            <li>
              <b>BoardTitle:</b> {taskDetails.attributes.boardTitle}
            </li>
            <li>
              <b>Description:</b>{" "}
              {taskDetails.attributes.description || "no description"}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default TaskDetails;
