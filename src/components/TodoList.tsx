import { ListProps } from '../interfaces';
import { Grid } from 'grommet';
import TodoCard from './TodoCard';

const TodoList = ({ tasklist, setTasklist }: ListProps) => {
  return (
    <Grid columns="medium" gap="small" pad={{ vertical: 'medium' }}>
      {tasklist.map((task) => (
        <TodoCard task={task} tasklist={tasklist} setTasklist={setTasklist} key={task.id} />
      ))}
    </Grid>
  );
};

export default TodoList;
