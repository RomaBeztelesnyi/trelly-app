import TasksList  from "./components/TasksList";
import TaskDetails from './components/TaskDetails'

export function MainPage() {
  return (
    <div>
      <div className="flex gap-8">
        <TasksList />
        <TaskDetails />
      </div>
    </div>
  );
}
