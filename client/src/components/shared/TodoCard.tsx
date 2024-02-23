import { Card, CardHeader, CardTitle } from '../ui/card';
import TodoList from './TodoList';

const TodoCard = ({ title }: { title: string }) => {
  return (
    <Card className='max-w-[480px] w-full'>
      <CardHeader>
        <CardTitle>
          <TodoList title={title} />
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default TodoCard;
