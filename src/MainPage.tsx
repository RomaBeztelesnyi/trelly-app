import TasksList from "./ui/TasksList";
import TaskDetails from "./ui/TaskDetails";
import { useTaskSelection } from "./bll/useTaskSelection";

export function MainPage() {
 const {selectedTaskId, setSelectedTaskId, boardId, setBoardId} = useTaskSelection()
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

