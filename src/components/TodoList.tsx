import { Todo, ListProps } from '../interfaces';
import { Box, Text } from 'grommet';
import TodoCard from './TodoCard';

const TodoList = ({ tasklist, setTasklist }: ListProps) => {
  return (
    <Box direction="row-responsive" gap="medium" align="center">
      {tasklist.map((task) => (
        <TodoCard task={task} setTasklist={setTasklist} />
      ))}
    </Box>
  );
};

export default TodoList;
