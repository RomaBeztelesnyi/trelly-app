import TasksList  from "./components/TasksList";

export function MainPage() {
  return (
    <div>
      <div className="flex gap-8">
        <TasksList />
        {/* <TaskDetails /> */}
      </div>
    </div>
  );
}
