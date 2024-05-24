import TodoItem from './TodoItem';

interface TodoListProps {
  todos: string[];
  removeTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <ul className="mt-4">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} removeTodo={removeTodo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
