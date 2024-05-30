import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './interfaces';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  // create an array of a type or interface
  const [tasklist, setTasklist] = useState<Array<Todo>>([]);

  const addToTasklist = (e: React.FormEvent) => {
    e.preventDefault();
    // check current todo input isn't empty
    if (todo) {
      setTasklist([...tasklist, { id: Date.now(), body: todo, isDone: false }]);
      setTodo('');
    }
  };

  console.log(tasklist);

  return (
    <main>
      <h1>Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} addToTasklist={addToTasklist} />
      <TodoList tasklist={tasklist} setTasklist={setTasklist} />
    </main>
  );
};

export default App;
