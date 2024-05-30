import { Box, Text } from 'grommet';

const TodoCard = () => {
  return (
    <Box align="center" border={{ color: 'green', size: 'medium' }} pad="large" round="small" width="medium">
      <Text>Boxes are containers that drive the layout of your content.</Text>
    </Box>
  );
};

export default TodoCard;
