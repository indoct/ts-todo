export interface Todo {
  id: number;
  body: string;
  isDone: boolean;
}

export interface ListProps {
  tasklist: Array<Todo>;
  setTasklist: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

export interface InputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addToTasklist: (e: React.FormEvent) => void;
}

export interface TodoProps {
  task: Todo;
  tasklist: Array<Todo>;
  setTasklist: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}
