import { Box } from 'grommet';
import { TodoProps } from '../interfaces';
import { Trash, Edit, Checkbox, CheckboxSelected } from 'grommet-icons';
import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const TodoCard = ({ task, tasklist, setTasklist }: TodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.body);

  function toggleIsDone(id: number) {
    if (edit) {
      setEdit(!edit);
      setTasklist((prevList) => {
        return prevList.map((task) => {
          return id === task.id ? { ...task, isDone: !task.isDone } : task;
        });
      });
    } else {
      setTasklist((prevList) => {
        return prevList.map((task) => {
          return id === task.id ? { ...task, isDone: !task.isDone } : task;
        });
      });
    }
  }

  function deleteTask(id: number, body: string) {
    let result = confirm(`Are you sure you want to delete the task: '${body}'?`);
    if (result) {
      setTasklist((prevList) => {
        return prevList.filter((task) => task.id !== id);
      });
    }
  }

  console.log(editTask);

  function handleDiscard() {
    setEditTask(task.body);
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTasklist(tasklist.map((todo) => (todo.id === id ? { ...todo, body: editTask } : todo)));
    setEdit(false);
  };

  return (
    <Box direction="column" pad="small" className="todo__card" justify="start" fill="horizontal">
      <form onSubmit={(e) => handleEdit(e, task.id)}>
        <Box className="tcbtn__cont">
          <ul className="tc__buttons">
            {edit && <button type="submit">save changes</button>}
            {edit && <button onClick={() => handleDiscard()}>discard</button>}
            <li
              className="edit"
              onClick={() => {
                if (!edit && !task.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <Edit />
            </li>
            <li>
              <button
                className={task.isDone ? 'check icon-btn' : 'check icon-btn btn-enb'}
                onClick={() => toggleIsDone(task.id)}
              >
                {task.isDone ? <CheckboxSelected /> : <Checkbox />}
              </button>
            </li>
            <li>
              <button
                className={task.isDone ? 'check icon-btn' : 'check icon-btn btn-enb'}
                onClick={() => deleteTask(task.id, task.body)}
              >
                <Trash />
              </button>
            </li>
          </ul>
        </Box>
        <Box className="tc__body" fill>
          <TextareaAutosize
            className={task.isDone ? 'st tc__input' : 'tc__input'}
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
            readOnly={!edit}
            onClick={() => {
              if (!edit && !task.isDone) {
                setEdit(!edit);
              }
            }}
          />
        </Box>
      </form>
    </Box>
  );
};

export default TodoCard;
