import type {Task}  from "../types/type";

const color = ["#ffffff", "#ffd7b5", "#ffb38a", "#ff9248", "#ff6700"];
const statusTask: Record<number, boolean> = {
  0: true,
  2: false,
};

type Props = {
  task: Task;
  isSelected: boolean;
  onSelect: (id: string, boardId: string) => void;
  onToggleStatus: (id: string) => void;
};

const TaskItem = ({ task, isSelected, onSelect, onToggleStatus }: Props) => {
  const { id, attributes } = task;

  return (
    <li
      className="border-4 p-2 rounded shadow-sm"
      style={{
        background: color[attributes.priority],
        border: isSelected ? "5px solid blue" : "none",
      }}
    >
      <h1
        className="font-bold cursor-pointer"
        onClick={() => onSelect(id, attributes.boardId)}
      >
        Header:{" "}
        <span
          style={{
            textDecoration: statusTask[attributes.status]
              ? "line-through"
              : "none",
          }}
        >
          {attributes.title}
        </span>
      </h1>
      <p>
        Status
        <input
          type="checkbox"
          checked={statusTask[attributes.status]}
          onChange={() => onToggleStatus(id)}
          className="ml-2"
        />
      </p>
      <p>
        <b>Date:</b> {new Date(attributes.addedAt).toLocaleDateString()}
      </p>
    </li>
  );
};

export default TaskItem;
