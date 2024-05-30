import React from 'react';
import { Todo } from '../interfaces';

interface ListProps {
  tasklist: Array<Todo>;
  setTasklist: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

export const TodoList: React.FC = ({ tasklist, setTasklist }: ListProps) => {
  return <h1>Todo list</h1>;
};
