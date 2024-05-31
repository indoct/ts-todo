import { ListProps } from '../interfaces';
import { Grid } from 'grommet';
import TodoCard from './TodoCard';

const TodoList = ({ tasklist, setTasklist }: ListProps) => {
  // const columns = {
  //   small: ['auto'],
  //   medium: ['auto', 'auto'],
  //   large: ['auto', 'auto', 'auto'],
  //   xlarge: ['auto', 'auto', 'auto'],
  // };

  return (
    <Grid fill gap="small" columns="medium" pad={{ vertical: 'medium', horizontal: 'large' }} justify="start">
      {tasklist.map((task) => (
        <TodoCard task={task} tasklist={tasklist} setTasklist={setTasklist} key={task.id} />
      ))}
    </Grid>
  );
};

export default TodoList;
