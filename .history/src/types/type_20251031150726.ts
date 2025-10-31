
export interface TaskAttributes {
  title: string;
  addedAt: string;
  priority: number;
  status: number;
  boardTitle: string;
  description: string
  
}
export interface Task {
  id: string;
  boardId: string
  attributes: TaskAttributes;
}