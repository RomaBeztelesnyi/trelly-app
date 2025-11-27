import ClearButton from "./Button";
import TaskItem from "./TaskItem";
import {useTasks} from '../bll/useTasks'

type Props = {
  selectedTaskId: string | null;
  setSelectedTaskId: (id: string | null) => void;
  setBoardId: (id: string | null) => void;
};

function TasksList({ selectedTaskId, setSelectedTaskId, setBoardId }: Props) {
  const {tasks, setTasks} = useTasks()

  const handleToggleStatus = (id: string) : void => {
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
