import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: string[];
    removeTodo: (index: number) => void;
    moveTodo?: (index: number) => void;
    moveLaterTodo?: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo, moveTodo, moveLaterTodo }) => {
    return (
        <ul className="mt-4">
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    removeTodo={removeTodo}
                    index={index}
                    moveTodo={moveTodo}
                    moveLaterTodo={moveLaterTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
