import { Box } from 'grommet';
import { Todo } from '../interfaces';
import { Trash, Edit, Checkbox, CheckboxSelected } from 'grommet-icons';

interface TodoProps {
  task: Todo;
  tasklist: Array<Todo>;
  setTasklist: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoCard = ({ task, tasklist, setTasklist }: TodoProps) => {
  function toggleIsDone(id: number) {
    setTasklist((prevList) => {
      return prevList.map((task) => {
        return id === task.id ? { ...task, isDone: !task.isDone } : task;
      });
    });
  }

  function deleteTask(id: number, body: string) {
    let result = confirm(`Are you sure you want to delete the task: '${body}'?`);
    if (result) {
      setTasklist((prevList) => {
        return prevList.filter((task) => task.id !== id);
      });
    }
  }

  return (
    <Box direction="column" pad="medium" className="todo__card">
      <Box className="tcbtn__cont">
        <ul className="tc__buttons">
          <li className="edit">
            <Edit />
          </li>
          <li className="check" onClick={() => toggleIsDone(task.id)}>
            {task.isDone ? <CheckboxSelected /> : <Checkbox />}
          </li>
          <li className="delete" onClick={() => deleteTask(task.id, task.body)}>
            <Trash />
          </li>
        </ul>
      </Box>
      <Box className="tc__body" pad={{ horizontal: 'medium' }}>
        <p className={task.isDone ? 'st' : ''}>{task.body}</p>
      </Box>
    </Box>
  );
};

export default TodoCard;
