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
  // will run when submit button is pressed, returning nothing
  addToTasklist: (e: React.FormEvent) => void;
}
