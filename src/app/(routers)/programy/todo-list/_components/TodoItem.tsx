interface TodoItemProps {
    todo: string;
    removeTodo: (index: number) => void;
    index: number;
  }
  
  const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo, index }) => {
    return (
      <li className="flex justify-between items-center p-2 border-b border-gray-300">
        <span>{todo}</span>
        <button
          onClick={() => removeTodo(index)}
          className="ml-2 p-1 bg-red-500 text-white rounded"
        >
          Remove
        </button>
      </li>
    );
  };
  
  export default TodoItem;
  