import { MdDeleteForever, MdDone, MdOutlineWatchLater } from "react-icons/md";

interface TodoItemProps {
    todo: string;
    removeTodo: (index: number) => void;
    moveTodo: (index: number) => void;
    moveLaterTodo: (index: number) => void;
    index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    removeTodo,
    moveTodo,
    moveLaterTodo,
    index,
}) => {
    return (
        <li className="flex justify-between items-start p-2 border-b border-gray-200">
            <span className="pl-2">{todo}</span>
            <div className="flex space-x-3">
                <button
                    onClick={() => moveTodo(index)}
                    className="p-1.5 bg-green-500 text-white rounded"
                >
                    <MdDone />
                </button>
                <button
                    onClick={() => moveLaterTodo(index)}
                    className="p-1.5 bg-yellow-500 text-white rounded"
                >
                    <MdOutlineWatchLater />
                </button>
                <button
                    onClick={() => removeTodo(index)}
                    className="p-1.5 bg-red-500 text-white rounded"
                >
                    <MdDeleteForever />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
