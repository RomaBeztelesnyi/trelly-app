
export interface TaskAttributes {
  title: string;
  addedAt: string;
  priority: number;
  status: number;
  boardTitle: string;
  description: string
  boardId: string;
}
export interface Task {
  id: string;
  attributes: TaskAttributes;
}